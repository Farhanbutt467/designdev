const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/config/navigation.json', 'utf8'));

// Find "About" and "Pages"
const aboutIndex = data.header.findIndex(item => item.id === 2 && item.name === "About");
const pagesIndex = data.header.findIndex(item => item.id === 4 && item.name === "Pages");

if (aboutIndex !== -1 && pagesIndex !== -1) {
    const pagesChildren = data.header[pagesIndex].children;
    
    // Replace "About" with "Company"
    data.header[aboutIndex] = {
        id: 2,
        name: "Company",
        path: "#",
        hasChildren: true,
        children: pagesChildren
    };
    
    // Remove "Pages"
    data.header.splice(pagesIndex, 1);
    
    // Save back to file
    fs.writeFileSync('src/config/navigation.json', JSON.stringify(data, null, 2), 'utf8');
    console.log("Successfully updated navigation.json");
} else {
    console.error("Could not find About or Pages index!");
}
