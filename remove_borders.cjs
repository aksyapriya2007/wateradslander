const fs = require('fs');
const { execSync } = require('child_process');

// Simple script to remove hard borders from Tailwind classes
const files = execSync('find src -name "*.tsx"').toString().trim().split('\n');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace standard borders
  content = content.replace(/\bborder border-wa-border\b/g, '');
  content = content.replace(/\bborder-t border-wa-border\b/g, '');
  content = content.replace(/\bborder-b border-wa-border\b/g, '');
  content = content.replace(/\bborder border-wa-border-hover\b/g, '');
  
  // Clean up any double spaces left behind
  content = content.replace(/  +/g, ' ');
  
  fs.writeFileSync(file, content);
});
console.log('Borders removed.');
