const fs = require('fs');
const path = require('path');

function getFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      getFiles(path.join(dir, file), fileList);
    } else {
      if (file.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
        fileList.push(path.join(dir, file).replace(/\\/g, '/').replace('public/', '/'));
      }
    }
  }
  return fileList;
}

const clients = ['cii', 'cgi', 'presidency', 'tata_elxsi', 'tcs', 'rtx', 'corporate_and_office', 'our_portfolio'];
const result = {};

for (const client of clients) {
  result[client] = getFiles(path.join('public/images', client));
}

fs.writeFileSync('images_map.json', JSON.stringify(result, null, 2));
console.log('Done');
