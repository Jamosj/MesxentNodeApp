<!-- AGRIBUSINESS LIVESTOCK & VETERINARY HUB -->
<div class="card" style="margin-top: 30px; text-align: left;">
    <h3 style="color: #00ca62; text-align: center;">Book Veterinary & Livestock Services</h3>
    <p style="font-size: 14px; color: #8b949e; text-align: center;">In partnership with Leventis Foundation Trained Specialists</p>
    
    <form id="bookingForm" style="display: flex; flex-direction: column; gap: 10px;">
        <label style="font-size: 12px; color: #8b949e;">Farmer / Enterprise Name</label>
        <input type="text" id="farmerName" required style="padding: 10px; background: #2a2a2a; border: 1px solid #30363d; color: white; border-radius: 5px;">
        
        <label style="font-size: 12px; color: #8b949e;">Phone Number (WhatsApp Preferred)</label>
        <input type="tel" id="phoneNumber" required style="padding: 10px; background: #2a2a2a; border: 1px solid #30363d; color: white; border-radius: 5px;">
        
        <label style="font-size: 12px; color: #8b949e;">Select Required Service</label>
        <select id="serviceType" style="padding: 10px; background: #2a2a2a; border: 1px solid #30363d; color: white; border-radius: 5px;">
            <option value="Poultry Vaccination Batch">Poultry Vaccination & Health Management</option>
            <option value="Precision Debeaking">Precision Flocks Debeaking</option>
            <option value="Livestock Consulting">Livestock/Ruminants Veterinary Consulting</option>
            <option value="AgroForestry & Land Prep">Crop Production & Land Management Planning</option>
        </select>
        
        <label style="font-size: 12px; color: #8b949e;">Farm Location / State</label>
        <input type="text" id="location" placeholder="e.g., Ibadan, Oyo State" required style="padding: 10px; background: #2a2a2a; border: 1px solid #30363d; color: white; border-radius: 5px;">
        
        <button type="submit" class="btn" style="width: 100%; margin-top: 10px;">Submit Service Booking Request</button>
    </form>
    <p id="formStatus" style="text-align: center; font-size: 14px; margin-top: 10px; color: #58a6ff;"></p>
</div>

<!-- CONNECTING FRONTEND BOOKING DIRECTLY TO SUPABASE -->
<script>
document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    document.getElementById('formStatus').innerText = "Processing booking request...";
    
    const payload = {
        title: document.getElementById('serviceType').value,
        description: "Farmer: " + document.getElementById('farmerName').value + " | Contact: " + document.getElementById('phoneNumber').value,
        price: 0.00, // To be negotiated with Leventis Instructor
        status: "PENDING_LEAD",
        location: document.getElementById('location').value
    };

    try {
        // Direct AJAX post string routing data back into your Supabase database instance
        const response = await fetch('https://supabase.co', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'YOUR_SUPABASE_ANON_KEY', // This can be extracted from your settings tab
                'Authorization': 'Bearer YOUR_SUPABASE_ANON_KEY',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify([payload])
        });

        if(response.ok) {
            document.getElementById('formStatus').style.color = "#00ca62";
            document.getElementById('formStatus').innerText = "🎉 Booking Saved Successfully! A Mesxent Specialist will contact you shortly.";
            document.getElementById('bookingForm').reset();
        } else {
            document.getElementById('formStatus').style.color = "#ff7b72";
            document.getElementById('formStatus').innerText = "Network transmission error. Please retry.";
        }
    } catch (err) {
        document.getElementById('formStatus').innerText = "Error connecting to cloud storage.";
    }
});
</script>
