// Fetch and display complaints
fetch("/api/complaints/all")
    .then(res => res.json())
    .then(data => {
        displayComplaints(data);
        updateStatistics(data);
        updatePriorityCounts(data);
        createChart(data);
    })
    .catch(error => {
        console.error("Error fetching complaints:", error);
    });

// Display complaints in table
function displayComplaints(complaints) {
    let table = document.getElementById("complaintTable");
    table.innerHTML = "";

    if (complaints.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="7" class="text-center">No complaints found</td>
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
                <td>${complaint.name || 'Anonymous'}</td>
                <td>${complaint.department || 'General'}</td>
                <td>${complaint.description ? (complaint.description.substring(0, 50) + '...') : 'N/A'}</td>
                <td>${priorityBadge}</td>
                <td>${statusBadge}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="viewComplaint('${complaint._id}')">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn-sm btn-success" onclick="updateStatus('${complaint._id}', 'Resolved')">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteComplaint('${complaint._id}')">
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
    let deptCount = {};
    
    complaints.forEach(c => {
        const dept = c.department || 'General';
        if (!deptCount[dept]) {
            deptCount[dept] = 0;
        }
        deptCount[dept]++;
    });

    const ctx = document.getElementById("complaintChart");
    
    new Chart(ctx, {
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
    alert('Viewing complaint: ' + id + '\n\nFull complaint details would be shown in a modal.');
}

function updateStatus(id, status) {
    if (confirm('Update complaint status to ' + status + '?')) {
        fetch(`/api/complaints/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: status })
        })
        .then(res => res.json())
        .then(data => {
            alert('Status updated successfully!');
            location.reload();
        })
        .catch(error => {
            alert('Error updating status: ' + error.message);
        });
    }
}

function deleteComplaint(id) {
    if (confirm('Are you sure you want to delete this complaint?')) {
        fetch(`/api/complaints/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            alert('Complaint deleted successfully!');
            location.reload();
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