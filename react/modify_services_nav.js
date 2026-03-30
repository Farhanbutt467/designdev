const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/config/navigation.json', 'utf8'));

// Find "Company"
const companyIndex = data.header.findIndex(item => item.id === 2 && item.name === "Company");

if (companyIndex !== -1) {
    const servicesMenu = {
        "id": 4,
        "name": "Services",
        "path": "#",
        "hasChildren": true,
        "children": [
            { "id": 1, "name": "Web Development", "path": "/service/web-development" },
            { "id": 2, "name": "App Development", "path": "/service/app-development" },
            { "id": 3, "name": "UI/UX Design", "path": "/service/ui-ux-design" },
            { "id": 4, "name": "SEO Optimization", "path": "/service/seo-optimization" },
            { "id": 5, "name": "Digital Marketing", "path": "/service/digital-marketing" },
            { "id": 6, "name": "Content Creation", "path": "/service/content-creation" },
            { "id": 7, "name": "Video Editing", "path": "/service/video-editing" },
            { "id": 8, "name": "Branding Strategy", "path": "/service/branding" },
            { "id": 9, "name": "E-commerce Solutions", "path": "/service/ecommerce-solutions" },
            { "id": 10, "name": "Social Media Management", "path": "/service/social-media" },
            { "id": 11, "name": "Cloud Hosting", "path": "/service/cloud-hosting" },
            { "id": 12, "name": "Data Analytics", "path": "/service/data-analytics" },
            { "id": 13, "name": "IT Consulting", "path": "/service/it-consulting" },
            { "id": 14, "name": "Quality Assurance", "path": "/service/qa-testing" },
            { "id": 15, "name": "Cybersecurity", "path": "/service/cybersecurity" }
        ]
    };
    
    // Insert after "Company"
    data.header.splice(companyIndex + 1, 0, servicesMenu);
    
    // Save back to file
    fs.writeFileSync('src/config/navigation.json', JSON.stringify(data, null, 2), 'utf8');
    console.log("Successfully inserted Services mega menu in navigation.json");
} else {
    console.error("Could not find Company index!");
}
