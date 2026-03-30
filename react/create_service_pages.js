const fs = require('fs');

const services = [
    { name: "Web Development", slug: "web-development" },
    { name: "App Development", slug: "app-development" },
    { name: "UI/UX Design", slug: "ui-ux-design" },
    { name: "SEO Optimization", slug: "seo-optimization" },
    { name: "Digital Marketing", slug: "digital-marketing" },
    { name: "Content Creation", slug: "content-creation" },
    { name: "Video Editing", slug: "video-editing" },
    { name: "Branding Strategy", slug: "branding" },
    { name: "E-commerce Solutions", slug: "ecommerce-solutions" },
    { name: "Social Media Management", slug: "social-media" },
    { name: "Cloud Hosting", slug: "cloud-hosting" },
    { name: "Data Analytics", slug: "data-analytics" },
    { name: "IT Consulting", slug: "it-consulting" },
    { name: "Quality Assurance", slug: "qa-testing" },
    { name: "Cybersecurity", slug: "cybersecurity" }
];

const sourcePath = 'src/content/services/main/interaction-design.mdx';
let content = fs.readFileSync(sourcePath, 'utf8');

services.forEach((service, index) => {
    let newContent = content.replace(/title: "Interaction Design"/, `title: "${service.name}"`);
    newContent = newContent.replace(/meta_title: "Interaction Design"/, `meta_title: "${service.name}"`);
    newContent = newContent.replace(/id: 1/, `id: ${index + 1}`);

    const newPath = `src/content/services/main/${service.slug}.mdx`;
    fs.writeFileSync(newPath, newContent, 'utf8');
});

console.log("Created 15 service mdx files successfully!");
