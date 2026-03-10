const express = require("express");
const router = express.Router();

// Property Tax Knowledge Base
const propertyTaxKnowledge = {
    // Payment related
    payment: {
        keywords: ['pay', 'payment', 'how to pay', 'online payment', 'pay tax', 'payment method'],
        response: "You can pay property tax online through our portal, at municipal offices, or via authorized banks. We accept credit/debit cards, net banking, and UPI payments."
    },
    
    // Due date
    dueDate: {
        keywords: ['due date', 'deadline', 'when to pay', 'last date', 'due', 'before when'],
        response: "Property tax is due annually by March 31st. Early payment before September 30th qualifies for a 5% discount. Late payment attracts a penalty of 2% per month."
    },
    
    // Calculation
    calculation: {
        keywords: ['calculate', 'calculation', 'how much', 'amount', 'rate', 'how is calculated'],
        response: "Property tax is calculated based on: Annual Value = (Carpet Area × Rate per sq.ft × Age Factor × Type Factor). Residential rates: ₹5-15/sq.ft, Commercial: ₹20-50/sq.ft depending on location."
    },
    
    // Exemption
    exemption: {
        keywords: ['exemption', 'discount', 'rebate', 'waiver', 'concession', 'relief'],
        response: "Exemptions available for: Senior citizens (30% discount), Disabled persons (50% discount), Armed forces personnel (20% discount), Properties under ₹1 lakh annual value. Apply at municipal office with valid documents."
    },
    
    // Documents
    documents: {
        keywords: ['document', 'documents', 'required', 'need', 'papers', 'proof'],
        response: "Required documents: Property ownership deed, Previous tax receipt, Identity proof (Aadhaar/PAN), Property size document, Occupancy certificate, and a recent photograph."
    },
    
    // Arrears
    arrears: {
        keywords: ['arrears', 'pending', 'outstanding', 'unpaid', 'overdue', 'old dues'],
        response: "Check arrears by entering your property ID on our portal. Pay arrears with current tax to avoid legal action. One-time settlement schemes are announced periodically with reduced penalties."
    },
    
    // Receipt
    receipt: {
        keywords: ['receipt', 'acknowledgement', 'proof of payment', 'download receipt', 'tax receipt'],
        response: "Download your receipt from the portal using property ID and transaction number. Physical receipts available at municipal office. Keep receipts for 7 years as per records."
    },
    
    // Transfer
    transfer: {
        keywords: ['transfer', 'change ownership', 'name change', 'mutation', 'transfer property'],
        response: "For property transfer: Submit mutation application, Sale deed copy, NOC from previous owner, Tax clearance certificate, and prescribed fees. Process takes 30-45 days."
    },
    
    // Penalty
    penalty: {
        keywords: ['penalty', 'late fee', 'fine', 'charges', 'interest'],
        response: "Late payment penalty: 2% per month on outstanding amount. After 1 year: Additional legal charges apply. Disconnect of water/sewage connection possible after 2 years of non-payment."
    },
    
    // Assessment
    assessment: {
        keywords: ['assessment', 'reassessment', 'new assessment', 'property value', 'valuation'],
        response: "Self-assessment online: Enter property details and system calculates tax. Official assessment by municipal surveyor. Reassessment required for: New construction, Major renovation, Change in property use."
    },
    
    // Contact
    contact: {
        keywords: ['contact', 'helpline', 'phone', 'email', 'support', 'help'],
        response: "Property Tax Helpline: 1800-XXX-XXXX (Toll-free)\nEmail: propertytax@urbanportal.gov\nOffice Hours: 9 AM - 5 PM (Mon-Fri)\nOnline support: 24/7 through this portal"
    },
    
    // Online portal
    portal: {
        keywords: ['portal', 'website', 'online', 'login', 'register online'],
        response: "Access property tax portal at: propertytax.urbanportal.gov\nRegister using property ID. Features: View/Pay tax, Download receipts, Track applications, Check arrears, File complaints."
    }
};

// AI/NLP function to process user query
function processQuery(query) {
    query = query.toLowerCase().trim();
    
    // Handle greetings
    const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'];
    if (greetings.some(g => query.startsWith(g))) {
        return "Hello! I'm your Property Tax Assistant. I can help you with property tax payments, calculations, exemptions, due dates, and more. How can I assist you today?";
    }
    
    // Handle thanks
    if (query.includes('thank') || query.includes('thanks')) {
        return "You're welcome! Feel free to ask if you have more questions about property tax.";
    }
    
    // Search through knowledge base
    let bestMatch = null;
    let highestScore = 0;
    
    for (const [key, data] of Object.entries(propertyTaxKnowledge)) {
        let score = 0;
        data.keywords.forEach(keyword => {
            if (query.includes(keyword)) {
                score += keyword.split(' ').length; // Multi-word matches score higher
            }
        });
        
        if (score > highestScore) {
            highestScore = score;
            bestMatch = data.response;
        }
    }
    
    // Return best match or default
    if (bestMatch) {
        return bestMatch;
    } else {
        return "I specialize in property tax related queries. I can help you with:\n\n✓ Payment methods and procedures\n✓ Due dates and penalties\n✓ Tax calculation\n✓ Exemptions and discounts\n✓ Required documents\n✓ Arrears checking\n✓ Property transfer\n✓ Assessments\n\nPlease ask a property tax related question!";
    }
}

// Chat endpoint
router.post("/chat", (req, res) => {
    try {
        const userQuery = req.body.message;
        
        if (!userQuery || userQuery.trim() === '') {
            return res.status(400).json({ 
                response: "Please enter a valid question." 
            });
        }
        
        const botResponse = processQuery(userQuery);
        
        res.json({ 
            response: botResponse,
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error("Chatbot error:", error);
        res.status(500).json({ 
            response: "Sorry, I encountered an error. Please try again." 
        });
    }
});

module.exports = router;
