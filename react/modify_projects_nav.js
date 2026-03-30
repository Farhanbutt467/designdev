const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/config/navigation.json', 'utf8'));

// Find "Portfolio"
const portfolioIndex = data.header.findIndex(item => item.id === 3 && item.name === "Portfolio");

if (portfolioIndex !== -1) {
    // Replace Portfolio with Projects simple tab pointing to /work
    data.header[portfolioIndex] = {
        "id": 3,
        "name": "Projects",
        "path": "/work"
        // no children, no hasChildren
    };
    
    // Save back to file
    fs.writeFileSync('src/config/navigation.json', JSON.stringify(data, null, 2), 'utf8');
    console.log("Successfully updated Portfolio to Projects simple tab in navigation.json");
} else {
    console.error("Could not find Portfolio index!");
}
