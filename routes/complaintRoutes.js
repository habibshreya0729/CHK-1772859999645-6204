const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const Complaint = require("../models/Complaint");

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'complaint-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: function(req, file, cb) {
        const allowedTypes = /jpeg|jpg|png/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        
        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Only image files (JPEG, JPG, PNG) are allowed'));
        }
    }
});

// Generate unique Ticket ID
async function generateTicketId() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const datePrefix = `${year}${month}${day}`;
    
    // Find all tickets created today
    const todayStart = new Date(today.setHours(0, 0, 0, 0));
    const todayEnd = new Date(today.setHours(23, 59, 59, 999));
    
    const todayComplaints = await Complaint.find({
        date: { $gte: todayStart, $lte: todayEnd }
    }).sort({ date: -1 }).limit(1);
    
    let sequence = 1;
    
    if (todayComplaints.length > 0 && todayComplaints[0].ticketId) {
        // Extract the sequence number from the last ticket
        const lastTicketId = todayComplaints[0].ticketId;
        const lastSequence = parseInt(lastTicketId.split('-')[2]);
        if (!isNaN(lastSequence)) {
            sequence = lastSequence + 1;
        }
    }
    
    const sequenceStr = String(sequence).padStart(4, '0');
    return `CMP-${datePrefix}-${sequenceStr}`;
}

function classifyDepartment(text){

text=text.toLowerCase();

if(text.includes("water")) return "Water";

if(text.includes("electric")) return "Electricity";

if(text.includes("garbage")) return "Sanitation";

if(text.includes("road")) return "Road";

return "General";

}

function detectPriority(text){

text = text.toLowerCase();

if(text.includes("burst") || 
text.includes("fire") || 
text.includes("danger")){

return "High";

}

if(text.includes("not working") ||
text.includes("leak") ||
text.includes("broken")){

return "Medium";

}

return "Low";

}

router.post("/create", upload.single('image'), async(req,res)=>{

try {
    let department =
    classifyDepartment(req.body.description);

    let priority =
    detectPriority(req.body.description);

    // Generate unique ticket ID
    const ticketId = await generateTicketId();

    const complaint = new Complaint({

    ticketId: ticketId,

    name: req.body.name,

    description: req.body.description,

    department: req.body.department || department,

    location: req.body.location || 'Not specified',

    latitude: req.body.latitude,

    longitude: req.body.longitude,

    image: req.file ? `/uploads/${req.file.filename}` : null,

    priority: priority,

    status: "Pending"

    });

    await complaint.save();

    res.json({
        message: "Complaint submitted successfully",
        ticketId: ticketId,
        priority: priority,
        complaint: complaint
    });
} catch (error) {
    console.error("Error creating complaint:", error);
    res.status(500).json({
        message: "Error creating complaint",
        error: error.message
    });
}

});


router.get("/all", async(req,res)=>{

const complaints =
await Complaint.find();

res.json(complaints);

});

// Update complaint status
router.put("/update/:id", async(req, res) => {
    try {
        const complaint = await Complaint.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );
        
        if (!complaint) {
            return res.status(404).json({ message: "Complaint not found" });
        }
        
        res.json({ message: "Status updated successfully", complaint });
    } catch (error) {
        res.status(500).json({ message: "Error updating complaint", error: error.message });
    }
});

// Delete complaint
router.delete("/delete/:id", async(req, res) => {
    try {
        const complaint = await Complaint.findByIdAndDelete(req.params.id);
        
        if (!complaint) {
            return res.status(404).json({ message: "Complaint not found" });
        }
        
        res.json({ message: "Complaint deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting complaint", error: error.message });
    }
});

// Search complaint by Ticket ID
router.get("/ticket/:ticketId", async(req, res) => {
    try {
        const complaint = await Complaint.findOne({ ticketId: req.params.ticketId });
        
        if (!complaint) {
            return res.status(404).json({ message: "Complaint not found with this Ticket ID" });
        }
        
        res.json(complaint);
    } catch (error) {
        res.status(500).json({ message: "Error searching complaint", error: error.message });
    }
});

module.exports = router;

