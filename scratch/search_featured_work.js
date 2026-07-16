const fs = require('fs');
const path = require('path');

function search(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      search(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.css')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.toLowerCase().includes('featured-work') || content.toLowerCase().includes('featured work')) {
        console.log(`Found in: ${fullPath}`);
        // print matching lines
        const lines = content.split('\n');
        lines.forEach((line, idx) => {
          if (line.toLowerCase().includes('featured-work') || line.toLowerCase().includes('featured work')) {
            console.log(`  Line ${idx+1}: ${line.trim()}`);
          }
        });
      }
    }
  }
}

search(path.join(__dirname, '../src'));
