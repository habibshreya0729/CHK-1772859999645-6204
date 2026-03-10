// Initialize map and marker
let map;
let marker;

// Initialize map on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize map centered on India (can be changed to any default location)
    map = L.map('map').setView([28.6139, 77.2090], 5); // Delhi coordinates as default
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Add click event to map
    map.on('click', function(e) {
        const lat = e.latlng.lat.toFixed(6);
        const lng = e.latlng.lng.toFixed(6);
        
        // Update input fields
        document.getElementById('latitude').value = lat;
        document.getElementById('longitude').value = lng;
        
        // Add or update marker
        if (marker) {
            marker.setLatLng(e.latlng);
        } else {
            marker = L.marker(e.latlng).addTo(map);
        }
        
        // Reverse geocoding to get address
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
            .then(res => res.json())
            .then(data => {
                if (data.display_name) {
                    document.getElementById('location').value = data.display_name;
                }
            })
            .catch(error => console.log('Geocoding error:', error));
    });
    
    // Image preview functionality
    document.getElementById('image').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            // Validate file size (5MB max)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size must be less than 5MB');
                e.target.value = '';
                return;
            }
            
            // Validate file type
            if (!file.type.match('image.*')) {
                alert('Please select an image file');
                e.target.value = '';
                return;
            }
            
            // Show preview
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('previewImg').src = e.target.result;
                document.getElementById('imagePreview').style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
});

// Clear image preview
function clearImage() {
    document.getElementById('image').value = '';
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('previewImg').src = '';
}

// Get current location using Geolocation API
function getCurrentLocation() {
    if (navigator.geolocation) {
        // Show loading state
        const btn = event.target;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Getting location...';
        btn.disabled = true;
        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude.toFixed(6);
                const lng = position.coords.longitude.toFixed(6);
                
                // Update input fields
                document.getElementById('latitude').value = lat;
                document.getElementById('longitude').value = lng;
                
                // Center map on current location
                map.setView([lat, lng], 15);
                
                // Add or update marker
                if (marker) {
                    marker.setLatLng([lat, lng]);
                } else {
                    marker = L.marker([lat, lng]).addTo(map);
                }
                
                // Get address from coordinates
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.display_name) {
                            document.getElementById('location').value = data.display_name;
                        }
                        // Restore button
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                    })
                    .catch(error => {
                        console.log('Geocoding error:', error);
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                    });
            },
            function(error) {
                alert('Error getting location: ' + error.message);
                btn.innerHTML = originalText;
                btn.disabled = false;
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    } else {
        alert('Geolocation is not supported by your browser');
    }
}

// Submit complaint with location data
function submitComplaint() {
    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    const imageFile = document.getElementById("image").files[0];
    
    // Validate required fields
    if (!name || !department || !description) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Create FormData for file upload
    const formData = new FormData();
    formData.append('name', name);
    formData.append('department', department);
    formData.append('description', description);
    formData.append('location', location || 'Not specified');
    
    if (latitude && longitude) {
        formData.append('latitude', parseFloat(latitude));
        formData.append('longitude', parseFloat(longitude));
    }
    
    if (imageFile) {
        formData.append('image', imageFile);
    }
    
    fetch("/api/complaints/create", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        if (data.ticketId) {
            alert(`✅ Complaint Submitted Successfully!\n\n🎫 Your Ticket ID: ${data.ticketId}\n\n📊 Priority: ${data.priority || 'Medium'}\n\nPlease save your Ticket ID for future reference.`);
        } else {
            alert("Complaint Submitted Successfully!");
        }
        
        // Reset form
        document.querySelector('.complaint-form').reset();
        document.getElementById('latitude').value = '';
        document.getElementById('longitude').value = '';
        clearImage();
        
        // Remove marker from map
        if (marker) {
            map.removeLayer(marker);
            marker = null;
        }
        
        // Reset map view
        map.setView([28.6139, 77.2090], 5);
    })
    .catch(error => {
        alert('Error submitting complaint: ' + error.message);
    });
}