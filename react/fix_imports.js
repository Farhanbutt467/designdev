const fs = require('fs');

const filesToUpdate = [
  "src/app/(inner-style-3)/service/web/[title]/page.tsx",
  "src/app/(inner-style-3)/service/video/[title]/page.tsx",
  "src/app/(inner-style-1)/service/seo/[title]/page.tsx",
  "src/app/(inner-style-1)/service/ai/[title]/page.tsx",
  "src/app/(inner-style-1)/service/design/[title]/page.tsx",
  "src/app/(inner-style-1)/service/marketing/[title]/page.tsx",
  "src/app/(inner-style-1)/service/branding/[title]/page.tsx"
];

filesToUpdate.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        let lines = content.split('\n');
        let heroImportCount = 0;
        for (let i = 0; i < lines.length; i++) {
             if (lines[i].includes('import AiHero')) {
                 heroImportCount++;
                 if (heroImportCount > 1) {
                     // Since we know the duplicate was ServiceDetailsFaq, let's restore it
                     lines[i] = 'import ServiceDetailsFaq from "@/components/service/ServiceDetailsFaq";';
                 }
             }
        }
        
        fs.writeFileSync(file, lines.join('\n'), 'utf8');
        console.log("Fixed imports in", file);
    } catch(e) {
        console.error("Error updating", file, e);
    }
});
