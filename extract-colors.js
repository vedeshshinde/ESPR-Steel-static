const https = require('https');

https.get('https://battery-passport.emertech.io/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // extract css links
    const cssLinks = [...data.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g)].map(m => m[1]);
    console.log("CSS Links:", cssLinks);

    // match all hex colors in HTML
    const hexColors = [...data.matchAll(/#([0-9a-fA-F]{3,6})/g)].map(m => m[0].toLowerCase());
    const counts = {};
    for (const c of hexColors) {
      counts[c] = (counts[c] || 0) + 1;
    }
    const sorted = Object.entries(counts).sort((a,b) => b[1] - a[1]);
    console.log("Hex Colors in HTML:");
    console.log(sorted.slice(0, 15));

    // Also let's extract CSS variables directly from inline styles
    const styles = [...data.matchAll(/style="([^"]+)"/g)].map(m => m[1]);
    const inlineHex = [];
    for (const s of styles) {
        const matches = s.match(/#[0-9a-fA-F]{3,6}/g);
        if (matches) inlineHex.push(...matches);
    }
    const inlineCounts = {};
    for (const c of inlineHex.map(x=>x.toLowerCase())) {
        inlineCounts[c] = (inlineCounts[c] || 0) + 1;
    }
    console.log("Hex Colors in Inline Styles:");
    console.log(Object.entries(inlineCounts).sort((a,b) => b[1] - a[1]).slice(0, 15));
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
