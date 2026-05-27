const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Mesxent Core Ecosystem</title>
    <style>body{font-family:'Segoe UI',sans-serif;background:#06080c;color:#fff;margin:0;padding:0;text-align:center}.app-container{max-width:480px;margin:0 auto;padding:15px;box-sizing:border-box}.card{background:#0d1117;padding:20px;border-radius:14px;border:1px solid #21262d;margin-bottom:15px;text-align:left;box-shadow:0 4px 12px rgba(0,0,0,0.3)}h2,h3,h4{text-align:center;margin:5px 0;color:#58a6ff}.btn{background:#238636;color:#fff;border:none;padding:12px;font-size:15px;border-radius:6px;cursor:pointer;font-weight:bold;width:100%;box-sizing:border-box;margin-top:10px;text-align:center;text-decoration:none;display:block}input,select{width:100%;padding:11px;background:#161b22;border:1px solid #30363d;color:#fff;border-radius:6px;box-sizing:border-box;margin-bottom:12px}.stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:15px 0}.stat-box{background:#161b22;padding:12px;border-radius:8px;border:1px solid #30363d;text-align:center}.stat-val{font-size:18px;font-weight:bold;color:#00ca62;margin-top:5px}.hidden{display:none!important}.campaign-banner{background:linear-gradient(135deg,#1f2937,#111827);border-left:4px solid #00ca62;padding:15px;border-radius:8px;margin:15px 0}.ad-frame{margin-top:20px;padding:10px;background:#0d1117;border-radius:10px;border:1px dashed #8b949e;text-align:center}</style>
    <script type="text/javascript">var uid='498480',wid='750528';var pop_tag=document.createElement('script');pop_tag.src='//cdn.popcash.net/show.js';document.body.appendChild(pop_tag);</script>
    </head><body><div class="app-container">

    <!-- 1. COMPREHENSIVE BIODATA SIGN UP INTERFACE -->
    <div id="registerScreen" class="card">
        <h2>MESXENT LOGISTICS REGISTRATION</h2>
        <p style="color:#8b949e;font-size:13px;text-align:center;margin-top:-5px;">Create node profile to begin agribusiness support loops</p>
        <form id="regForm">
            <input type="text" id="regName" placeholder="Full Legal Name / Enterprise" required>
            <input type="email" id="regEmail" placeholder="Email Address" required>
            <input type="tel" id="regPhone" placeholder="WhatsApp Phone Number" required>
            <input type="text" id="regTrx" placeholder="TRX Crypto Wallet Address (TRC20)" required>
            <button type="submit" class="btn">Initialize Node Environment</button>
        </form>
    </div>

    <!-- 2. COMPREHENSIVE USER METRICS DASHBOARD -->
    <div id="dashboardScreen" class="hidden">
        <h2>MESXENT VAULT CONSOLE</h2>
        <div style="display:flex;justify-content:center;gap:10px;margin-bottom:15px;"><button class="btn" style="margin:0;padding:6px 12px;background:#21262d;border:1px solid #30363d;" onclick="switchAdmin()">Admin Login</button></div>
        
        <div class="card">
            <h3>Active Node Telemetry</h3>
            <div class="stat-grid">
                <div class="stat-box"><div>Device Support Power</div><div class="stat-val" id="nodePower" style="color:#58a6ff;">98.4%</div></div>
                <div class="stat-box"><div>Mesh Routes Mapped</div><div class="stat-val" id="nodeRoutes">142</div></div>
            </div>
            <div class="stat-grid" style="margin-top:0;">
                <div class="stat-box" style="grid-column: span 2;"><div>Your 1% Pool Yield Balance</div><div class="stat-val" id="nodeBalance" style="font-size:24px;">0.00 NGN</div></div>
            </div>
            
            <h4>Execute Vault Withdrawal</h4>
            <p style="font-size:11px;color:#8b949e;margin:0 0 10px 0;">Withdrawals open strictly between the 1st and 5th of every month.</p>
            <form id="withdrawForm">
                <input type="text" id="bank" placeholder="Bank Name" required>
                <input type="text" id="acct" placeholder="Account Number" maxlength="10" required>
                <button type="submit" class="btn">Request Cash Settlement</button>
            </form>
            <p id="withStatus" style="font-size:13px;text-align:center;font-weight:bold;margin-top:5px;"></p>
        </div>

        <!-- CORPORATE MARKETING CAMPAIGNS & UPDATES BLOCK -->
        <div class="card">
            <h3>Mesxent Production Logs</h3>
            <div class="campaign-banner">
                <strong style="color:#00ca62;display:block;">[UPDATED] Livestock Support Services Active</strong>
                <span style="font-size:13px;color:#e6edf3;">Book vaccination protocols, precision flock debeaking, and ruminant inspections handled by our Leventis Foundation specialist network.</span>
            </div>
            <div class="campaign-banner" style="margin-bottom:0;">
                <strong style="color:#58a6ff;display:block;">[INFRASTRUCTURE] Ibadan 9-Acres Layout</strong>
                <span style="font-size:13px;color:#e6edf3;">Our crop farm maps and soil routing metrics are actively processing in our database pipelines. Fresh harvest drops are heading to campus outlets shortly.</span>
            </div>
        </div>
    </div>

    <!-- 3. MASTER CONTROL ADMIN INTERFACE -->
    <div id="adminScreen" class="card hidden">
        <h2 style="color:#ff7b72;">ADMIN CONTROL DESK</h2>
        <div class="stat-grid">
            <div class="stat-box"><div>Total Network Cells</div><div class="stat-val">1,248 Nodes</div></div>
            <div class="stat-box"><div>Net System Yield</div><div class="stat-val" style="color:#00ca62;">$4,120.50</div></div>
        </div>
        <button class="btn" style="background:#b62323;" onclick="processAllPayouts()">Approve and Settle All Payout Orders</button>
        <button class="btn" style="background:#21262d;border:1px solid #30363d;" onclick="exitAdmin()">Exit Admin Console</button>
        <p id="adminStatus" style="font-size:13px;text-align:center;font-weight:bold;margin-top:5px;"></p>
    </div>

    <!-- NATIVE PROGRAMMATIC VISUAL DISPLAY BANNERS (Earns Payout Money) -->
    <div class="ad-frame">
        <p style="font-size:11px;color:#8b949e;margin:0 0 8px 0;">Live Network Monetization Lane</p>
        <iframe data-aa="2423081" src="//://a-ads.com" style="width:320px;height:50px;border:0;overflow:hidden;background:transparent;"></iframe>
    </div>
    <div style="display:none;"><script>(function(s,u,z,p){s.src=u;s.setAttribute('data-zone',z);p.appendChild(s);})(document.createElement('script'),'https://iclickcdn.com||document.documentElement);</script></div>

    </div><script>
    // Navigation Logic Flow
    document.getElementById('regForm').addEventListener('submit',(e)=>{e.preventDefault();document.getElementById('registerScreen').classList.add('hidden');document.getElementById('dashboardScreen').classList.remove('hidden');startTelemetry();});
    
    // Telemetry Simulations Engine
    let currentBalance=0.00,routesMapped=142,devicePower=98.4;
    function startTelemetry(){
        setInterval(()=>{
            currentBalance+=0.02;routesMapped+=1;devicePower=95+(Math.random()*4);
            document.getElementById('nodeBalance').innerText=currentBalance.toFixed(2)+" NGN";
            document.getElementById('nodeRoutes').innerText=routesMapped;
            document.getElementById('nodePower').innerText=devicePower.toFixed(1)+"%";
        },4000);
    }

    // 1st to 5th Day Calendar Checking Routine
    document.getElementById('withdrawForm').addEventListener('submit',(e)=>{
        e.preventDefault();const s=document.getElementById('withStatus');const day=new Date().getDate();
        if(day>=1&&day<=5){s.style.color="#00ca62";s.innerText="🎉 Settlement logged! Payout processing will complete shortly.";document.getElementById('withdrawForm').reset();}
        else{s.style.color="#ff7b72";s.innerText="⛔ Locked: Payout pool requests are closed outside the 1st-5th window.";}});

    // Admin Access Gateway Control
    function switchAdmin(){let p=prompt("Enter Secure Admin Access PIN:");if(p==="0000"){document.getElementById('dashboardScreen').classList.add('hidden');document.getElementById('adminScreen').classList.remove('hidden');}else{alert("Unauthorized access attempt flagged.");}}
    function exitAdmin(){document.getElementById('adminScreen').classList.add('hidden');document.getElementById('dashboardScreen').classList.remove('hidden');}
    function processAllPayouts(){const s=document.getElementById('adminStatus');s.style.color="#00ca62";s.innerText="🚀 Payout transaction signals pushed to settlement servers successfully!";}
    </script></body></html>`);
}).listen(process.env.PORT || 10000, '0.0.0.0', () => { console.log("System Operational"); });
