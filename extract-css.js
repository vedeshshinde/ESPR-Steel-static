const https = require('https');

https.get('https://battery-passport.emertech.io/_next/static/css/43b22e44278f7c99.css', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const hexColors = [...data.matchAll(/#([0-9a-fA-F]{3,6})/g)].map(m => m[0].toLowerCase());
    const counts = {};
    for (const c of hexColors) {
      counts[c] = (counts[c] || 0) + 1;
    }
    const sorted = Object.entries(counts).sort((a,b) => b[1] - a[1]);
    console.log("Hex Colors in CSS:");
    console.log(sorted.slice(0, 30));
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
