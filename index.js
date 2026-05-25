const http = require('http');

// CONFIGURATION: Replace with your actual publisher ad tags from your ad network accounts
const PROPELLER_ADS_TAG = `<!-- PropellerAds Native Tag -->
<script>(function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://iclickcdn.com||document.documentElement);</script>`;

const A_ADS_ZONE_ID = "123456"; // Replace with your actual A-Ads Zone ID slot

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // HTML Interface rendered safely inside the user's mobile browser app
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mesxent Vault - Decentralized Node Portal</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #121212; color: #ffffff; text-align: center; padding: 20px; }
            .card { background: #1e1e1e; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.5); margin: 20px auto; max-width: 400px; }
            .btn { background-color: #00ca62; color: white; border: none; padding: 12px 24px; font-size: 16px; border-radius: 5px; cursor: pointer; text-decoration: none; display: inline-block; }
            .ad-container { margin-top: 30px; padding: 10px; background: #2a2a2a; border-radius: 5px; min-height: 100px; }
        </style>
    </head>
    <body>
        <h1>MESXENT HOLDINGS</h1>
        <p>Decentralized Agri-Tech Network</p>
        
        <div class="card">
            <h3>Active Node Status: <span style="color: #00ca62;">ONLINE</span></h3>
            <p>Your device is safely supporting agribusiness logistics distribution loops.</p>
            <p>Accumulated Commission: <strong id="balance">0.00 NGN</strong></p>
            <a href="https://mesxentventureglobal.store" class="btn">Go to Agribusiness Hub</a>
        </div>

        <!-- REAL MONETIZATION LANE: Visual Ad Banner Frame (Guarantees Payouts) -->
        <div class="ad-container">
            <h4>Network Monetization Stream</h4>
            <iframe data-aa="${A_ADS_ZONE_ID}" src="//://a-ads.com{A_ADS_ZONE_ID}?size=320x50" style="width:320px; height:50px; border:0; padding:0; overflow:hidden; background-color:transparent;"></iframe>
        </div>

        <!-- Script tracking node activity and updating balance simulating rewards -->
        <script>
            let balance = 0.00;
            setInterval(() => {
                balance += 0.15;
                document.getElementById('balance').innerText = balance.toFixed(2) + " NGN";
            }, 5000);
        </script>

        ${PROPELLER_ADS_TAG}
    </body>
    </html>
    `);
});

server.listen(process.env.PORT || 8080, '0.0.0.0', () => {
    console.log("Mesxent Web Node UI is operational.");
});
