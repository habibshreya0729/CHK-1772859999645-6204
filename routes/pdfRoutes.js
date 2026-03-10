const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const Complaint = require('../models/Complaint');
const fs = require('fs');
const path = require('path');

// Generate PDF for a single complaint
router.get('/complaint/:id', async (req, res) => {
    try {
        const complaint = await Complaint.findById(req.params.id);
        
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }

        // Create a new PDF document
        const doc = new PDFDocument({ 
            size: 'A4',
            margins: { top: 50, bottom: 50, left: 50, right: 50 }
        });

        // Set response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=complaint-${complaint.ticketId || complaint._id}.pdf`);

        // Pipe the PDF to the response
        doc.pipe(res);

        // Add header with logo placeholder
        doc.fontSize(24)
           .fillColor('#1e293b')
           .text('Urban Governance Portal', { align: 'center' });
        
        doc.fontSize(12)
           .fillColor('#64748b')
           .text('Complaint Report', { align: 'center' });
        
        doc.moveDown(1);
        doc.strokeColor('#f59e0b').lineWidth(2).moveTo(50, doc.y).lineTo(545, doc.y).stroke();
        doc.moveDown(1.5);

        // Complaint Details Section
        doc.fontSize(18)
           .fillColor('#1e293b')
           .text('Complaint Details', { underline: true });
        doc.moveDown(0.5);

        // Ticket ID with highlight
        doc.fontSize(12)
           .fillColor('#1e293b')
           .text('Ticket ID: ', { continued: true })
           .fillColor('#4649de')
           .text(complaint.ticketId || 'Not assigned', { bold: true });
        doc.moveDown(0.3);

        // Basic Information
        const details = [
            { label: 'Complaint ID', value: complaint._id },
            { label: 'Citizen Name', value: complaint.name || 'Anonymous' },
            { label: 'Department', value: complaint.department || 'General' },
            { label: 'Date Submitted', value: new Date(complaint.date).toLocaleString('en-IN', { 
                dateStyle: 'full', 
                timeStyle: 'short' 
            })},
            { label: 'Priority', value: complaint.priority || 'Medium' },
            { label: 'Status', value: complaint.status || 'Pending' }
        ];

        details.forEach(item => {
            doc.fontSize(11)
               .fillColor('#1e293b')
               .text(`${item.label}: `, { continued: true, bold: true })
               .fillColor('#475569')
               .text(item.value);
            doc.moveDown(0.3);
        });

        doc.moveDown(0.5);

        // Description Section
        doc.fontSize(14)
           .fillColor('#1e293b')
           .text('Description:', { underline: true });
        doc.moveDown(0.3);
        doc.fontSize(11)
           .fillColor('#475569')
           .text(complaint.description || 'No description provided.', { 
               align: 'justify',
               lineGap: 2
           });
        doc.moveDown(1);

        // Location Information
        if (complaint.location || complaint.latitude) {
            doc.fontSize(14)
               .fillColor('#1e293b')
               .text('Location Information:', { underline: true });
            doc.moveDown(0.3);
            
            if (complaint.location) {
                doc.fontSize(11)
                   .fillColor('#1e293b')
                   .text('Address: ', { continued: true })
                   .fillColor('#475569')
                   .text(complaint.location);
                doc.moveDown(0.3);
            }
            
            if (complaint.latitude && complaint.longitude) {
                doc.fontSize(11)
                   .fillColor('#1e293b')
                   .text('Coordinates: ', { continued: true })
                   .fillColor('#475569')
                   .text(`${complaint.latitude}, ${complaint.longitude}`);
                doc.moveDown(0.3);
                
                doc.fontSize(10)
                   .fillColor('#4649de')
                   .text(`View on Map: https://www.openstreetmap.org/?mlat=${complaint.latitude}&mlon=${complaint.longitude}&zoom=15`, {
                       link: `https://www.openstreetmap.org/?mlat=${complaint.latitude}&mlon=${complaint.longitude}&zoom=15`,
                       underline: true
                   });
            }
            doc.moveDown(1);
        }

        // Evidence Photo Information
        if (complaint.image) {
            doc.fontSize(14)
               .fillColor('#1e293b')
               .text('Evidence Photo:', { underline: true });
            doc.moveDown(0.3);
            
            const imagePath = path.join(__dirname, '..', 'public', complaint.image);
            
            // Check if image exists
            if (fs.existsSync(imagePath)) {
                try {
                    // Add image to PDF (scaled to fit)
                    doc.image(imagePath, {
                        fit: [400, 300],
                        align: 'center'
                    });
                    doc.moveDown(0.5);
                    doc.fontSize(9)
                       .fillColor('#64748b')
                       .text('Evidence photo attached above', { align: 'center' });
                } catch (error) {
                    doc.fontSize(11)
                       .fillColor('#ef4444')
                       .text('⚠ Unable to load image in PDF');
                }
            } else {
                doc.fontSize(11)
                   .fillColor('#64748b')
                   .text('📷 Evidence photo available (filename: ' + path.basename(complaint.image) + ')');
            }
            doc.moveDown(1);
        }

        // Footer
        doc.moveDown(2);
        doc.strokeColor('#e2e8f0').lineWidth(1).moveTo(50, doc.y).lineTo(545, doc.y).stroke();
        doc.moveDown(0.5);
        
        doc.fontSize(9)
           .fillColor('#94a3b8')
           .text(`Generated on: ${new Date().toLocaleString('en-IN')}`, { align: 'center' });
        doc.text('Urban Governance Portal - Citizen Complaint Management System', { align: 'center' });
        
        // Finalize the PDF
        doc.end();

    } catch (error) {
        console.error('PDF generation error:', error);
        res.status(500).json({ message: 'Error generating PDF', error: error.message });
    }
});

// Generate summary report for all complaints
router.get('/summary', async (req, res) => {
    try {
        const complaints = await Complaint.find().sort({ date: -1 });

        const doc = new PDFDocument({ 
            size: 'A4',
            margins: { top: 50, bottom: 50, left: 50, right: 50 }
        });

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=complaints-summary-${Date.now()}.pdf`);

        doc.pipe(res);

        // Header
        doc.fontSize(24)
           .fillColor('#1e293b')
           .text('Urban Governance Portal', { align: 'center' });
        
        doc.fontSize(14)
           .fillColor('#64748b')
           .text('Complaints Summary Report', { align: 'center' });
        
        doc.fontSize(10)
           .fillColor('#94a3b8')
           .text(`Generated on: ${new Date().toLocaleString('en-IN')}`, { align: 'center' });
        
        doc.moveDown(1);
        doc.strokeColor('#f59e0b').lineWidth(2).moveTo(50, doc.y).lineTo(545, doc.y).stroke();
        doc.moveDown(1.5);

        // Statistics Section
        const stats = {
            total: complaints.length,
            pending: complaints.filter(c => c.status === 'Pending').length,
            inProgress: complaints.filter(c => c.status === 'In Progress').length,
            resolved: complaints.filter(c => c.status === 'Resolved').length,
            critical: complaints.filter(c => c.priority === 'Critical').length,
            high: complaints.filter(c => c.priority === 'High').length,
            medium: complaints.filter(c => c.priority === 'Medium').length,
            low: complaints.filter(c => c.priority === 'Low').length
        };

        doc.fontSize(16)
           .fillColor('#1e293b')
           .text('Overview Statistics', { underline: true });
        doc.moveDown(0.5);

        // Status boxes
        const statusY = doc.y;
        doc.fontSize(10).fillColor('#64748b').text('STATUS', 50, statusY);
        doc.fontSize(12).fillColor('#1e293b').text(`Total: ${stats.total}`, 50, statusY + 15);
        doc.fontSize(10).fillColor('#f59e0b').text(`Pending: ${stats.pending}`, 50, statusY + 35);
        doc.fontSize(10).fillColor('#4649de').text(`In Progress: ${stats.inProgress}`, 50, statusY + 50);
        doc.fontSize(10).fillColor('#10b981').text(`Resolved: ${stats.resolved}`, 50, statusY + 65);

        doc.fontSize(10).fillColor('#64748b').text('PRIORITY', 300, statusY);
        doc.fontSize(10).fillColor('#ef4444').text(`Critical: ${stats.critical}`, 300, statusY + 15);
        doc.fontSize(10).fillColor('#f97316').text(`High: ${stats.high}`, 300, statusY + 30);
        doc.fontSize(10).fillColor('#f59e0b').text(`Medium: ${stats.medium}`, 300, statusY + 45);
        doc.fontSize(10).fillColor('#10b981').text(`Low: ${stats.low}`, 300, statusY + 60);

        doc.moveDown(6);
        doc.strokeColor('#e2e8f0').lineWidth(1).moveTo(50, doc.y).lineTo(545, doc.y).stroke();
        doc.moveDown(1);

        // Complaints List
        doc.fontSize(16)
           .fillColor('#1e293b')
           .text('All Complaints', { underline: true });
        doc.moveDown(0.5);

        if (complaints.length === 0) {
            doc.fontSize(11)
               .fillColor('#64748b')
               .text('No complaints found in the system.');
        } else {
            complaints.forEach((complaint, index) => {
                // Check if we need a new page
                if (doc.y > 700) {
                    doc.addPage();
                }

                doc.fontSize(11)
                   .fillColor('#4649de')
                   .text(`${index + 1}. ${complaint.ticketId || 'No Ticket ID'}`, { continued: true })
                   .fillColor('#1e293b')
                   .text(` - ${complaint.name || 'Anonymous'}`);
                
                doc.fontSize(9)
                   .fillColor('#64748b')
                   .text(`   Department: ${complaint.department || 'General'} | Priority: ${complaint.priority || 'Medium'} | Status: ${complaint.status || 'Pending'}`, {
                       indent: 10
                   });
                
                if (complaint.description) {
                    doc.fontSize(9)
                       .fillColor('#475569')
                       .text(`   ${complaint.description.substring(0, 100)}${complaint.description.length > 100 ? '...' : ''}`, {
                           indent: 10
                       });
                }
                
                doc.moveDown(0.5);
            });
        }

        // Footer
        const pageCount = doc.bufferedPageRange().count;
        for (let i = 0; i < pageCount; i++) {
            doc.switchToPage(i);
            doc.fontSize(8)
               .fillColor('#94a3b8')
               .text(
                   `Page ${i + 1} of ${pageCount}`,
                   50,
                   doc.page.height - 50,
                   { align: 'center' }
               );
        }

        doc.end();

    } catch (error) {
        console.error('PDF generation error:', error);
        res.status(500).json({ message: 'Error generating PDF', error: error.message });
    }
});

// Generate filtered report (by status or department)
router.get('/filtered', async (req, res) => {
    try {
        const { status, department, priority } = req.query;
        
        let query = {};
        if (status) query.status = status;
        if (department) query.department = department;
        if (priority) query.priority = priority;

        const complaints = await Complaint.find(query).sort({ date: -1 });
        
        const doc = new PDFDocument({ 
            size: 'A4',
            margins: { top: 50, bottom: 50, left: 50, right: 50 }
        });

        const filterDesc = [];
        if (status) filterDesc.push(`Status: ${status}`);
        if (department) filterDesc.push(`Department: ${department}`);
        if (priority) filterDesc.push(`Priority: ${priority}`);
        const filterText = filterDesc.length > 0 ? ` (${filterDesc.join(', ')})` : '';

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=complaints-filtered-${Date.now()}.pdf`);

        doc.pipe(res);

        // Header
        doc.fontSize(22)
           .fillColor('#1e293b')
           .text('Urban Governance Portal', { align: 'center' });
        
        doc.fontSize(14)
           .fillColor('#64748b')
           .text(`Filtered Complaints Report${filterText}`, { align: 'center' });
        
        doc.moveDown(1);
        doc.strokeColor('#f59e0b').lineWidth(2).moveTo(50, doc.y).lineTo(545, doc.y).stroke();
        doc.moveDown(1.5);

        doc.fontSize(12)
           .fillColor('#1e293b')
           .text(`Total Complaints Found: ${complaints.length}`);
        doc.moveDown(1);

        if (complaints.length === 0) {
            doc.fontSize(11)
               .fillColor('#64748b')
               .text('No complaints match the specified filters.');
        } else {
            complaints.forEach((complaint, index) => {
                if (doc.y > 700) {
                    doc.addPage();
                }

                doc.fontSize(11)
                   .fillColor('#4649de')
                   .text(`${index + 1}. ${complaint.ticketId || 'No Ticket ID'}`, { underline: true });
                
                doc.fontSize(10)
                   .fillColor('#1e293b')
                   .text(`Name: ${complaint.name || 'Anonymous'}`);
                doc.text(`Department: ${complaint.department || 'General'}`);
                doc.text(`Priority: ${complaint.priority || 'Medium'} | Status: ${complaint.status || 'Pending'}`);
                doc.text(`Date: ${new Date(complaint.date).toLocaleString('en-IN', { dateStyle: 'medium' })}`);
                
                if (complaint.description) {
                    doc.fontSize(9)
                       .fillColor('#475569')
                       .text(`Description: ${complaint.description.substring(0, 150)}${complaint.description.length > 150 ? '...' : ''}`);
                }
                
                doc.moveDown(0.8);
            });
        }

        // Footer
        doc.fontSize(8)
           .fillColor('#94a3b8')
           .text(`Generated on: ${new Date().toLocaleString('en-IN')}`, 50, doc.page.height - 50, { align: 'center' });

        doc.end();

    } catch (error) {
        console.error('PDF generation error:', error);
        res.status(500).json({ message: 'Error generating PDF', error: error.message });
    }
});

module.exports = router;
