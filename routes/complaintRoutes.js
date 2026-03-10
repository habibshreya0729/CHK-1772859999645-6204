const express = require("express");
const router = express.Router();

const Complaint = require("../models/Complaint");

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

router.post("/create", async(req,res)=>{

let department =
classifyDepartment(req.body.description);

let priority =
detectPriority(req.body.description);

const complaint = new Complaint({

name:req.body.name,

description:req.body.description,

department:department,

priority:priority,

status:"Pending"

});

await complaint.save();

res.json({message:"Complaint submitted"});

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

module.exports = router;

