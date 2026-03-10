// Track complaint by Ticket ID
function trackComplaint() {
    const ticketId = document.getElementById('ticketId').value.trim();
    
    if (!ticketId) {
        alert('Please enter a Ticket ID');
        return;
    }
    
    // Hide previous results
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('errorSection').style.display = 'none';
    
    // Show loading state
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
    button.disabled = true;
    
    fetch(`/api/complaints/ticket/${ticketId}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Complaint not found');
            }
            return res.json();
        })
        .then(complaint => {
            displayComplaintDetails(complaint);
            button.innerHTML = originalText;
            button.disabled = false;
        })
        .catch(error => {
            document.getElementById('errorSection').style.display = 'block';
            button.innerHTML = originalText;
            button.disabled = false;
        });
}

// Display complaint details
function displayComplaintDetails(complaint) {
    const statusBadge = getStatusBadge(complaint.status);
    const priorityBadge = getPriorityBadge(complaint.priority);
    
    let locationHTML = '';
    if (complaint.location) {
        locationHTML = `
            <div class="detail-item">
                <strong><i class="fas fa-map-marker-alt text-danger"></i> Location:</strong>
                <span>${complaint.location}</span>
            </div>
        `;
    }
    
    if (complaint.latitude && complaint.longitude) {
        locationHTML += `
            <div class="detail-item">
                <strong><i class="fas fa-globe text-info"></i> Coordinates:</strong>
                <span>${complaint.latitude}, ${complaint.longitude}</span>
                <a href="https://www.openstreetmap.org/?mlat=${complaint.latitude}&mlon=${complaint.longitude}&zoom=15" 
                   target="_blank" class="btn btn-sm btn-outline-primary ms-2">
                    <i class="fas fa-external-link-alt"></i> View Map
                </a>
            </div>
        `;
    }
    
    const detailsHTML = `
        <div class="card-body">
            <h4 class="text-center mb-4">
                <i class="fas fa-check-circle text-success"></i> Complaint Found!
            </h4>
            
            <div class="detail-item">
                <strong><i class="fas fa-ticket-alt text-primary"></i> Ticket ID:</strong>
                <span class="ticket-id">${complaint.ticketId}</span>
            </div>
            
            <div class="detail-item">
                <strong><i class="fas fa-user text-secondary"></i> Name:</strong>
                <span>${complaint.name}</span>
            </div>
            
            <div class="detail-item">
                <strong><i class="fas fa-building text-dark"></i> Department:</strong>
                <span>${complaint.department}</span>
            </div>
            
            <div class="detail-item">
                <strong><i class="fas fa-file-alt text-info"></i> Description:</strong>
                <p class="mt-2 p-3 bg-light rounded">${complaint.description}</p>
            </div>
            
            ${locationHTML}
            
            <div class="detail-item">
                <strong><i class="fas fa-exclamation-circle"></i> Priority:</strong>
                ${priorityBadge}
            </div>
            
            <div class="detail-item">
                <strong><i class="fas fa-info-circle"></i> Status:</strong>
                ${statusBadge}
            </div>
            
            <div class="detail-item">
                <strong><i class="fas fa-calendar-alt text-warning"></i> Submitted Date:</strong>
                <span>${new Date(complaint.date).toLocaleString()}</span>
            </div>
        </div>
    `;
    
    document.getElementById('complaintDetails').innerHTML = detailsHTML;
    document.getElementById('resultSection').style.display = 'block';
    
    // Scroll to results
    document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Get status badge HTML
function getStatusBadge(status) {
    const badges = {
        'Pending': '<span class="badge bg-warning text-dark fs-6">⏳ Pending</span>',
        'In Progress': '<span class="badge bg-info fs-6">🔄 In Progress</span>',
        'Resolved': '<span class="badge bg-success fs-6">✅ Resolved</span>',
        'Rejected': '<span class="badge bg-danger fs-6">❌ Rejected</span>'
    };
    return badges[status] || '<span class="badge bg-secondary">Unknown</span>';
}

// Get priority badge HTML
function getPriorityBadge(priority) {
    const badges = {
        'Critical': '<span class="priority-badge critical">🔴 Critical</span>',
        'High': '<span class="priority-badge high">🟠 High</span>',
        'Medium': '<span class="priority-badge medium">🟡 Medium</span>',
        'Low': '<span class="priority-badge low">🟢 Low</span>'
    };
    return badges[priority] || '<span class="priority-badge medium">Medium</span>';
}

// Allow Enter key to search
document.getElementById('ticketId')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        trackComplaint();
    }
});
