const fs = require('fs');
fs.writeFileSync('build3.log', fs.readFileSync('build2.log', 'utf16le'), 'utf8');
