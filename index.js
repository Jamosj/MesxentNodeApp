const http = require('http');
const S_URL = "https://supabase.co";
const S_KEY = process.env.SUPABASE_KEY || "YOUR_SUPABASE_ANON_PUBLIC_KEY_HERE";

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Mesxent Vault</title>
    <style>body{font-family:sans-serif;background:#0c0f12;color:#fff;text-align:center;padding:15px;margin:0}.card{background:#161b22;padding:20px;border-radius:12px;border:1px solid #30363d;margin:15px auto;max-width:420px}.btn{background:#238636;color:#fff;border:none;padding:12px;font-size:16px;border-radius:6px;cursor:pointer;text-decoration:none;display:inline-block;font-weight:bold;width:100%;box-sizing:border-box}label{font-size:12px;color:#8b949e;display:block;text-align:left;margin-top:10px}input,select{width:100%;padding:10px;background:#2a2a2a;border:1px solid #30363d;color:#fff;border-radius:5px;box-sizing:border-box}.ad-section{margin-top:25px;padding:12px;background:#0d1117;border-radius:8px;border:1px dashed #8b949e}</style>
    <script type="text/javascript">var uid='498480',wid='750528';var pop_tag=document.createElement('script');pop_tag.src='//cdn.popcash.net/show.js';document.body.appendChild(pop_tag);</script>
    </head><body>
    <h2>MESXENT HOLDINGS PLC</h2><p style="color:#8b949e;font-size:14px;">FIRS Certified Agribusiness Logistics Node</p>
    <div class="card"><h3>Cluster Node: <span style="color:#238636;">ACTIVE OPERATIONAL</span></h3><p>Your Real-Time Yield Balance: <strong id="node-payout" style="color:#58a6ff;">0.00 NGN</strong></p>
    <a href="https://destream.net" target="_blank" class="btn" style="background:#21262d;border:1px solid #30363d;">Access Financial Vault</a></div>
    <div class="card"><h3 style="color:#00ca62;margin:0;">Book Veterinary Services</h3>
    <form id="bookingForm">
    <label>Farmer / Enterprise Name</label><input type="text" id="farmerName" required>
    <label>Phone Number (WhatsApp Active)</label><input type="tel" id="phoneNumber" required>
    <label>Select Veterinary Assignment</label>
    <select id="serviceType">
    <option value="Poultry Vaccination Batch">Poultry Vaccination & Health Protocols</option>
    <option value="Precision Debeaking">Precision Managed Flocks Debeaking</option>
    <option value="Livestock Consulting">Ruminants / Livestock Veterinary Inspection</option>
    <option value="AgroForestry Mapping">9-Acres Scale Land Crop Management</option>
    </select>
    <label>Farm Project Location / State</label><input type="text" id="location" placeholder="e.g., Ibadan, Oyo State" required>
    <button type="submit" class="btn" style="margin-top:15px;">Transmit Booking Request</button></form>
    <p id="formStatus" style="font-size:14px;margin-top:10px;color:#58a6ff;font-weight:bold;"></p></div>
    <div class="ad-section"><p style="font-size:11px;color:#8b949e;margin:0 0(8px)0;">Programmatic Flow Verification Display</p>
    <iframe data-aa="2423081" src="//://a-ads.com" style="width:320px;height:50px;border:0;padding:0;overflow:hidden;background:transparent;"></iframe></div>
    <div style="display:none;"><script>(function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://iclickcdn.com||document.documentElement);</script></div>
    <script>
    let currentBalance=0.00;setInterval(()=>{currentBalance+=0.25;document.getElementById('node-payout').innerText=currentBalance.toFixed(2)+" NGN";},4000);
    document.getElementById('bookingForm').addEventListener('submit',async(e)=>{e.preventDefault();const s=document.getElementById('formStatus');s.style.color="#58a6ff";s.innerText="Transmitting to Supabase...";
    const payload={title:document.getElementById('serviceType').value,description:"Farmer Name: "+document.getElementById('farmerName').value+" | WhatsApp: "+document.getElementById('phoneNumber').value,price:0.00,status:"PENDING_LEAD",location:document.getElementById('location').value};
    try{const r=await fetch("${S_URL}",{method:'POST',headers:{'Content-Type':'application/json','apikey':"${S_KEY}",'Authorization':"Bearer ${S_KEY}",'Prefer':'return=minimal'},body:JSON.stringify([payload])});
    if(r.ok){s.style.color="#238636";s.innerText="🎉 Transmission Confirmed! Mesxent Specialist Assigned.";document.getElementById('bookingForm').reset();}else{s.style.color="#ff7b72";s.innerText="Database handshake rejected. Check API keys.";}}catch(err){s.style.color="#ff7b72";s.innerText="Cloud routing timeout. Check connection.";}});
    </script></body></html>`);
}).listen(process.env.PORT || 10000, '0.0.0.0', () => { console.log("Mesxent Unified Server Operational."); });
