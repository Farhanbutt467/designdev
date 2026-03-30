const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/config/navigation.json', 'utf8'));

// Find "Company"
const companyIndex = data.header.findIndex(item => item.id === 2 && item.name === "Company");

if (companyIndex !== -1) {
    data.header[companyIndex].children = [
        {
            "id": 1,
            "name": "About Us",
            "path": "/about"
        },
        {
            "id": 2,
            "name": "Service",
            "path": "/service"
        },
        {
            "id": 3,
            "name": "Team",
            "path": "/team"
        },
        {
            "id": 4,
            "name": "Career",
            "path": "/career"
        },
        {
            "id": 5,
            "name": "Faq",
            "path": "/faq"
        }
    ];
    
    // Save back to file
    fs.writeFileSync('src/config/navigation.json', JSON.stringify(data, null, 2), 'utf8');
    console.log("Successfully updated Company dropdown items in navigation.json");
} else {
    console.error("Could not find Company index!");
}
