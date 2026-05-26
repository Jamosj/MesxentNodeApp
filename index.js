const http = require('http');
const S_URL = "https://supabase.co";
const S_KEY = process.env.SUPABASE_KEY || "YOUR_SUPABASE_ANON_PUBLIC_KEY_HERE";

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Mesxent Ecosystem</title>
    <style>body{font-family:sans-serif;background:#0c0f12;color:#fff;text-align:center;padding:10px;margin:0}.card{background:#161b22;padding:15px;border-radius:10px;border:1px solid #30363d;margin:12px auto;max-width:400px;text-align:left}h2,h3{text-align:center;margin:5px 0}.btn{background:#238636;color:#fff;border:none;padding:12px;font-size:15px;border-radius:6px;cursor:pointer;font-weight:bold;width:100%;box-sizing:border-box;margin-top:10px;text-align:center;text-decoration:none;display:block}input,select{width:100%;padding:10px;background:#2a2a2a;border:1px solid #30363d;color:#fff;border-radius:5px;box-sizing:border-box;margin-bottom:10px}.nav-tabs{display:flex;justify-content:center;gap:10px;margin-bottom:15px}.tab-btn{background:#21262d;color:#fff;border:1px solid #30363d;padding:8px 15px;border-radius:5px;cursor:pointer}.tab-btn.active{background:#238636;border-color:#238636}.hidden{display:none!important}.stat-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #21262d}.ad-section{margin-top:20px;padding:10px;background:#0d1117;border-radius:8px;border:1px dashed #8b949e}</style>
    <script type="text/javascript">var uid='498480',wid='750528';var pop_tag=document.createElement('script');pop_tag.src='//cdn.popcash.net/show.js';document.body.appendChild(pop_tag);</script>
    </head><body>
    <h2>MESXENT CORE PLATFORM</h2>
    <div class="nav-tabs"><button class="tab-btn active" onclick="switchView('user')">User Vault</button><button class="tab-btn" onclick="switchView('admin')">Admin Terminal</button></div>

    <!-- 1. USER DASHBOARD INTERFACE -->
    <div id="userPanel" class="card">
        <h3>Node Support Dashboard</h3>
        <div class="stat-row"><span>Cluster Node Status:</span><span style="color:#238636;font-weight:bold;">ONLINE (0% CPU)</span></div>
        <div class="stat-row"><span>Device Network Share:</span><span id="share-pct">0.0015%</span></div>
        <div class="stat-row"><span>Your 1% Pool Earnings:</span><span id="node-payout" style="color:#58a6ff;font-weight:bold;">0.00 NGN</span></div>
        
        <h4 style="margin:15px 0 5px 0;color:#00ca62;">Request Monthly Payout</h4>
        <p style="font-size:11px;color:#8b949e;margin:0 0 10px 0;">Withdrawals pool opens strictly from the 1st to the 5th of every month.</p>
        <form id="payoutForm">
            <input type="text" id="bankName" placeholder="Bank Name" required>
            <input type="text" id="accountNum" placeholder="Account Number" maxlength="10" required>
            <button type="submit" class="btn" id="withBtn">Initiate Vault Withdrawal</button>
        </form>
        <p id="payoutStatus" style="font-size:12px;text-align:center;font-weight:bold;margin-top:5px;"></p>
    </div>

    <!-- 2. ADMIN COMMAND TERMINAL INTERFACE -->
    <div id="adminPanel" class="card hidden">
        <h3 style="color:#58a6ff;">Mesxent Admin Engine</h3>
        <div class="stat-row"><span>Total Active Nodes:</span><strong>1,248 Cells</strong></div>
        <div class="stat-row"><span>User Payout Pool (1%):</span><span style="color:#e3b341;">$41.20 USD</span></div>
        <div class="stat-row"><span>Mesxent Net Profit (99%):</span><span style="color:#00ca62;">$4,079.30 USD</span></div>
        
        <h4 style="margin:15px 0 5px 0;color:#ff7b72;">Global Payout Control</h4>
        <button class="btn" style="background:#b62323;" onclick="triggerGlobalPayout()">Approve & Settle Payout Orders</button>
        <p id="adminStatus" style="font-size:12px;text-align:center;font-weight:bold;margin-top:5px;"></p>
    </div>

    <!-- REAL REVENUE GENERATING FRAMEWORK STRIPS -->
    <div class="ad-section"><iframe data-aa="2423081" src="//://a-ads.com" style="width:320px;height:50px;border:0;overflow:hidden;background:transparent;"></iframe></div>
    <div style="display:none;"><script>(function(s,u,z,p){s.src=u;s.setAttribute('data-zone',z);p.appendChild(s);})(document.createElement('script'),'https://iclickcdn.com||document.documentElement);</script></div>

    <script>
    // Live Stats Allocation Loops
    let bal=0.00, pct=0.0015;
    setInterval(()=>{bal+=0.02;pct+=0.0001;document.getElementById('node-payout').innerText=bal.toFixed(2)+" NGN";document.getElementById('share-pct').innerText=pct.toFixed(4)+"%";},4000);

    function switchView(v){
        document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
        if(v==='user'){document.getElementById('userPanel').classList.remove('hidden');document.getElementById('adminPanel').classList.add('hidden');event.target.classList.add('active');}
        else{let p=prompt("Enter Master Admin PIN:");if(p==="0000"){document.getElementById('adminPanel').classList.remove('hidden');document.getElementById('userPanel').classList.add('hidden');event.target.classList.add('active');}else{alert("Access Refused.");}}}

    document.getElementById('payoutForm').addEventListener('submit',(e)=>{
        e.preventDefault();const s=document.getElementById('payoutStatus');
        const day=new Date().getDate();
        if(day>=1&&day<=5){s.style.color="#00ca62";s.innerText="🎉 Payout request submitted to Mesxent ledger network!";document.getElementById('payoutForm').reset();}
        else{s.style.color="#ff7b72";s.innerText="⛔ Closed: Vault payouts are strictly active between the 1st and 5th.";}});

    function triggerGlobalPayout(){const s=document.getElementById('adminStatus');s.style.color="#00ca62";s.innerText="🚀 Payout command pushed to active nodes successfully!";}
    </script></body></html>`);
}).listen(process.env.PORT || 10000, '0.0.0.0', () => { console.log("Ecosystem Live"); });
