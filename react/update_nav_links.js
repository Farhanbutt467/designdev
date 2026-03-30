const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/config/navigation.json', 'utf8'));

// Remove Service from Company
const companyIndex = data.header.findIndex(item => item.id === 2 && item.name === "Company");
if (companyIndex !== -1) {
    data.header[companyIndex].children = data.header[companyIndex].children.filter(child => child.name !== "Service");
}

// Make Services point to /service
const servicesIndex = data.header.findIndex(item => item.id === 4 && item.name === "Services");
if (servicesIndex !== -1) {
    data.header[servicesIndex].path = "/service";
}

fs.writeFileSync('src/config/navigation.json', JSON.stringify(data, null, 2), 'utf8');
console.log("Updated navigation.json: Removed Service from Company, updated Services path");
