// Fetch and display complaints
let complaintChart = null; // Store chart instance globally

function loadDashboard() {
    // Show loading state
    const table = document.getElementById("complaintTable");
    table.innerHTML = '<tr><td colspan="8" class="text-center"><i class="fas fa-spinner fa-spin"></i> Loading complaints...</td></tr>';
    
    fetch("/api/complaints/all")
        .then(res => {
            if (!res.ok) {
                throw new Error('Server error: ' + res.status);
            }
            return res.json();
        })
        .then(data => {
            if (!Array.isArray(data)) {
                throw new Error('Invalid data format');
            }
            displayComplaints(data);
            updateStatistics(data);
            updatePriorityCounts(data);
            createChart(data);
        })
        .catch(error => {
            console.error("Error fetching complaints:", error);
            table.innerHTML = `
                <tr>
                    <td colspan="8" class="text-center text-danger">
                        <i class="fas fa-exclamation-triangle"></i> 
                        <strong>Error loading complaints:</strong> ${error.message}<br>
                        <small>Make sure the server is running on port 5000 and MongoDB is connected.</small>
                        <br><button class="btn btn-primary btn-sm mt-2" onclick="loadDashboard()">Retry</button>
                    </td>
                </tr>
            `;
            // Set default values
            document.getElementById('totalComplaints').textContent = '0';
            document.getElementById('pendingComplaints').textContent = '0';
            document.getElementById('inProgressComplaints').textContent = '0';
            document.getElementById('resolvedComplaints').textContent = '0';
            document.getElementById('criticalCount').textContent = '0';
            document.getElementById('highCount').textContent = '0';
            document.getElementById('mediumCount').textContent = '0';
            document.getElementById('lowCount').textContent = '0';
        });
}

// Load dashboard on page load
loadDashboard();

// Display complaints in table
function displayComplaints(complaints) {
    let table = document.getElementById("complaintTable");
    table.innerHTML = "";

    if (complaints.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="8" class="text-center">No complaints found</td>
            </tr>
        `;
        return;
    }

    complaints.forEach((complaint, index) => {
        const priorityBadge = getPriorityBadge(complaint.priority);
        const statusBadge = getStatusBadge(complaint.status);
        
        table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td><strong class="text-primary">${complaint.ticketId || 'N/A'}</strong></td>
                <td>${complaint.name || 'Anonymous'}</td>
                <td>${complaint.department || 'General'}</td>
                <td>${complaint.description ? (complaint.description.substring(0, 50) + '...') : 'N/A'}</td>
                <td>${priorityBadge}</td>
                <td>${statusBadge}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="viewComplaint('${complaint._id}')" title="View Details">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn-sm btn-success" onclick="updateStatus('${complaint._id}')" title="Update Status">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteComplaint('${complaint._id}')" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });
}

// Get priority badge HTML
function getPriorityBadge(priority) {
    const badges = {
        'Critical': '<span class="priority-badge critical">Critical</span>',
        'High': '<span class="priority-badge high">High</span>',
        'Medium': '<span class="priority-badge medium">Medium</span>',
        'Low': '<span class="priority-badge low">Low</span>'
    };
    return badges[priority] || '<span class="priority-badge medium">Medium</span>';
}

// Get status badge HTML
function getStatusBadge(status) {
    const badges = {
        'Pending': '<span class="badge bg-warning text-dark">Pending</span>',
        'In Progress': '<span class="badge bg-info">In Progress</span>',
        'Resolved': '<span class="badge bg-success">Resolved</span>',
        'Rejected': '<span class="badge bg-danger">Rejected</span>'
    };
    return badges[status] || '<span class="badge bg-secondary">Unknown</span>';
}

// Update statistics cards
function updateStatistics(complaints) {
    const total = complaints.length;
    const pending = complaints.filter(c => c.status === 'Pending').length;
    const inProgress = complaints.filter(c => c.status === 'In Progress').length;
    const resolved = complaints.filter(c => c.status === 'Resolved').length;

    document.getElementById('totalComplaints').textContent = total;
    document.getElementById('pendingComplaints').textContent = pending;
    document.getElementById('inProgressComplaints').textContent = inProgress;
    document.getElementById('resolvedComplaints').textContent = resolved;
}

// Update priority counts
function updatePriorityCounts(complaints) {
    const critical = complaints.filter(c => c.priority === 'Critical').length;
    const high = complaints.filter(c => c.priority === 'High').length;
    const medium = complaints.filter(c => c.priority === 'Medium').length;
    const low = complaints.filter(c => c.priority === 'Low').length;

    document.getElementById('criticalCount').textContent = critical;
    document.getElementById('highCount').textContent = high;
    document.getElementById('mediumCount').textContent = medium;
    document.getElementById('lowCount').textContent = low;
}

// Create chart
function createChart(complaints) {
    // Destroy existing chart if it exists
    if (complaintChart) {
        complaintChart.destroy();
    }
    
    let deptCount = {};
    
    complaints.forEach(c => {
        const dept = c.department || 'General';
        if (!deptCount[dept]) {
            deptCount[dept] = 0;
        }
        deptCount[dept]++;
    });

    const ctx = document.getElementById("complaintChart");
    
    complaintChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: Object.keys(deptCount),
            datasets: [{
                label: "Complaints by Department",
                data: Object.values(deptCount),
                backgroundColor: [
                    'rgba(30, 41, 59, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(70, 73, 222, 0.8)',
                    'rgba(239, 68, 68, 0.8)'
                ],
                borderColor: [
                    'rgb(30, 41, 59)',
                    'rgb(245, 158, 11)',
                    'rgb(16, 185, 129)',
                    'rgb(139, 92, 246)',
                    'rgb(239, 68, 68)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Action functions
function viewComplaint(id) {
    fetch(`/api/complaints/all`)
        .then(res => res.json())
        .then(complaints => {
            const complaint = complaints.find(c => c._id === id);
            if (complaint) {
                let locationInfo = '';
                if (complaint.location) {
                    locationInfo = `Location: ${complaint.location}\n`;
                }
                if (complaint.latitude && complaint.longitude) {
                    locationInfo += `Coordinates: ${complaint.latitude}, ${complaint.longitude}\n`;
                    locationInfo += `Map: https://www.openstreetmap.org/?mlat=${complaint.latitude}&mlon=${complaint.longitude}&zoom=15\n`;
                }
                
                let imageInfo = '';
                if (complaint.image) {
                    imageInfo = `\n📷 Evidence Photo: Available (View in modal)\n`;
                }
                
                const details = `
                    Complaint Details:
                    
                    🎫 Ticket ID: ${complaint.ticketId || 'N/A'}
                    ID: ${complaint._id}
                    Name: ${complaint.name}
                    Department: ${complaint.department}
                    Description: ${complaint.description}
                    ${locationInfo || 'Location: Not specified\n'}Priority: ${complaint.priority}
                    Status: ${complaint.status}
                    Date: ${new Date(complaint.date).toLocaleString()}${imageInfo}
                `;
                alert(details);
                
                // If image exists, show it in a modal or new tab
                if (complaint.image) {
                    if (confirm('Would you like to view the evidence photo?')) {
                        window.open(complaint.image, '_blank');
                    }
                }
            }
        })
        .catch(error => {
            alert('Error loading complaint details');
        });
}

function updateStatus(id, newStatus) {
    // Create dropdown for status selection
    const statuses = ['Pending', 'In Progress', 'Resolved', 'Rejected'];
    const selectedStatus = newStatus || prompt(`Select status:\n\n${statuses.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\nEnter number (1-4):`);
    
    let status;
    if (selectedStatus === 'Resolved' || selectedStatus === 'In Progress' || selectedStatus === 'Pending' || selectedStatus === 'Rejected') {
        status = selectedStatus;
    } else {
        const statusMap = { '1': 'Pending', '2': 'In Progress', '3': 'Resolved', '4': 'Rejected' };
        status = statusMap[selectedStatus];
    }
    
    if (!status) {
        alert('Invalid selection');
        return;
    }
    
    if (confirm(`Update complaint status to "${status}"?`)) {
        fetch(`/api/complaints/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: status })
        })
        .then(res => res.json())
        .then(data => {
            alert('Status updated successfully to: ' + status);
            loadDashboard(); // Reload instead of full page refresh
        })
        .catch(error => {
            alert('Error updating status: ' + error.message);
        });
    }
}

function deleteComplaint(id) {
    if (confirm('Are you sure you want to delete this complaint? This action cannot be undone.')) {
        fetch(`/api/complaints/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            alert('Complaint deleted successfully!');
            loadDashboard(); // Reload dashboard instead of full page refresh
        })
        .catch(error => {
            alert('Error deleting complaint: ' + error.message);
        });
    }
}

// Search functionality
document.getElementById('searchInput')?.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#complaintTable tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

// Filter by status
document.getElementById('filterStatus')?.addEventListener('change', function(e) {
    const filterValue = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#complaintTable tr');
    
    rows.forEach(row => {
        if (filterValue === '') {
            row.style.display = '';
        } else {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(filterValue) ? '' : 'none';
        }
    });
});

// Search complaint by Ticket ID
function searchByTicketId() {
    const ticketId = prompt('Enter Ticket ID (e.g., CMP-20260310-0001):');
    
    if (!ticketId) {
        return;
    }
    
    fetch(`/api/complaints/ticket/${ticketId}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Complaint not found');
            }
            return res.json();
        })
        .then(complaint => {
            let locationInfo = '';
            if (complaint.location) {
                locationInfo = `Location: ${complaint.location}\n`;
            }
            if (complaint.latitude && complaint.longitude) {
                locationInfo += `Coordinates: ${complaint.latitude}, ${complaint.longitude}\n`;
                locationInfo += `Map: https://www.openstreetmap.org/?mlat=${complaint.latitude}&mlon=${complaint.longitude}&zoom=15\n`;
            }
            
            let imageInfo = '';
            if (complaint.image) {
                imageInfo = `\n📷 Evidence Photo: Available\n`;
            }
            
            const details = `
                🔍 Complaint Found!
                
                🎫 Ticket ID: ${complaint.ticketId}
                ID: ${complaint._id}
                Name: ${complaint.name}
                Department: ${complaint.department}
                Description: ${complaint.description}
                ${locationInfo || 'Location: Not specified\n'}Priority: ${complaint.priority}
                Status: ${complaint.status}
                Date: ${new Date(complaint.date).toLocaleString()}${imageInfo}
            `;
            alert(details);
            
            // If image exists, show it
            if (complaint.image) {
                if (confirm('Would you like to view the evidence photo?')) {
                    window.open(complaint.image, '_blank');
                }
            }
        })
        .catch(error => {
            alert('❌ Complaint not found with Ticket ID: ' + ticketId);
        });
}