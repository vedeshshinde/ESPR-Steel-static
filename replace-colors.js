const fs = require('fs');
const path = require('path');

const colorMap = {
  '#1a1f6e': '#241538',
  '#1A1F6E': '#241538',
  '#1a4f6e': '#1c1230',
  '#1A4F6E': '#1c1230',
  '#0d1052': '#170b24',
  '#0D1052': '#170b24',
  '#2d35a8': '#6f4698',
  '#2D35A8': '#6f4698',
  '#00b4a6': '#a83f96',
  '#00B4A6': '#a83f96',
  '#00877d': '#8d3f98',
  '#00877D': '#8d3f98',
  '#008f84': '#9b4fa8',
  '#008F84': '#9b4fa8',
  '#006b62': '#7a3182',
  '#006B62': '#7a3182',
  '#5ef0e8': '#d3b8f0',
  '#5EF0E8': '#d3b8f0',
  '#4a54d4': '#8d7cc3',
  '#4A54D4': '#8d7cc3',

  '45, 53, 168': '111, 70, 152',
  '45,53,168': '111,70,152',
  '0, 180, 166': '168, 63, 150',
  '0,180,166': '168,63,150',
  '26, 31, 110': '36, 21, 56',
  '26,31,110': '36,21,56',

  'tag-blue': 'tag-purple',
  'tag-teal': 'tag-magenta',

  '--blue-deep': '--purple-deep',
  '--blue-mid': '--purple-mid',
  '--blue-light': '--purple-light',
  '--teal': '--magenta',
  '--teal-light': '--magenta-light'
};

const directories = ['styles', 'components', 'pages'];

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const [oldVal, newVal] of Object.entries(colorMap)) {
    // Escape string for regex if it contains special characters
    const escapedOld = oldVal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedOld, 'g');
    content = content.replace(regex, newVal);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

for (const dir of directories) {
  const fullDirPath = path.join(__dirname, dir);
  if (fs.existsSync(fullDirPath)) {
    processDirectory(fullDirPath);
  }
}

console.log("Color replacement complete.");
