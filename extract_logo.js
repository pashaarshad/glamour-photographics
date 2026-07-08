const fs = require('fs');
const html = fs.readFileSync('documentation/final_design.html', 'utf8');
const match = html.match(/src="(data:image\/png;base64,[^"]+)"/);
if (match) {
  const base64Data = match[1].replace(/^data:image\/png;base64,/, "");
  fs.writeFileSync('public/images/Glamour_Logo.png', base64Data, 'base64');
  console.log('Extracted Glamour_Logo.png');
} else {
  console.log('Logo not found');
}
