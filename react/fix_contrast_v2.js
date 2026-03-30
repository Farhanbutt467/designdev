const fs = require('fs');
const cp = require('child_process');

const findFiles = (dir) => {
    try {
        const output = cp.execSync(`ls -R src`).toString();
        // This is tricky on windows. Let's just hardcode the ones I know or use a simple depth search.
    } catch(e) {}
};

// I'll just manual replace for now to be safe and avoid script complexity.
const files = [
    "src/components/about/DesignAbout.tsx",
    "src/components/pricing/video/VideoPricingCard.tsx",
    "src/components/service/seo/SeoServiceCard.tsx",
    "src/components/service/marketing/MarketingServiceCard.tsx",
    "src/components/work/marketing/MarketingWork.tsx",
    "src/components/hero/MarketingHero.tsx",
    "src/components/blog/marketing/MarketingBlog.tsx",
    "src/components/headers/MarketingHeader.tsx",
    "src/components/footer/Footer6.tsx"
];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        let newContent = content.replace(/bg-theme/g, 'bg-theme'); // placeholder
        
        // Replace textColor="text-text-fixed text-sm" when combined with bg-theme
        newContent = newContent.replace(/bgColor=\{"bg-theme"\}\s+textColor=\{"text-text-fixed/g, 'bgColor={"bg-theme"} textColor={"text-text-fixed-2');
        newContent = newContent.replace(/textColor=\{"text-text-fixed([^"]*)"\}\s+bgColor=\{"bg-theme"\}/g, 'textColor={"text-text-fixed-2$1"} bgColor={"bg-theme"}');
        
        // Single line replacements in classNames
        newContent = newContent.replace(/bg-theme text-text-fixed(?!-2)/g, 'bg-theme text-text-fixed-2');
        newContent = newContent.replace(/bg-primary text-text-fixed(?!-2)/g, 'bg-primary text-text-fixed-2');
        newContent = newContent.replace(/group-hover:bg-theme group-hover:text-text-fixed(?!-2)/g, 'group-hover:bg-theme group-hover:text-text-fixed-2');
        newContent = newContent.replace(/group-hover:bg-primary group-hover:text-text-fixed(?!-2)/g, 'group-hover:bg-primary group-hover:text-text-fixed-2');
        newContent = newContent.replace(/!bg-\[#d8544d\] text-text-fixed(?!-2)/g, '!bg-[#d8544d] text-text-fixed-2');

        if (content !== newContent) {
            fs.writeFileSync(file, newContent, 'utf8');
            console.log(`Updated ${file}`);
        }
    } catch(e) {
        console.error(`Error processing ${file}: ${e.message}`);
    }
});
