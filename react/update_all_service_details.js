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
        
        // Replace imports
        // Some files might import ServiceDetails, others might import WebServiceDetails. Let's find exactly what they import for Details.
        // Wait, they all seem to import ServiceDetails exactly? Let's aggressively replace it.
        // Actually, some might not. Let's do a generic replace.
        content = content.replace(/import (ServiceDetails|WebDetails|DesignDetails).*from ".*ServiceDetails.*";/g, 'import AiHero from "@/components/hero/Ai/AiHero";');
        // Let's also do a fallback if they don't match the regex exactly
        if (content.indexOf('import ServiceDetails') !== -1) {
            content = content.replace(/import ServiceDetails.*/g, 'import AiHero from "@/components/hero/Ai/AiHero";');
        }

        // Add the heroine
        if (content.indexOf('/heros/ai-hero.mdx') === -1) {
            content = content.replace(/const { data: pricingData } = getMainPage/g, 'const { data: hero } = getMainPage("/heros/ai-hero.mdx");\n  const { data: pricingData } = getMainPage');
            // What if pricingData doesn't exist?
            if (content.indexOf('/heros/ai-hero.mdx') === -1) {
                 content = content.replace(/if \(!\(services && services\.length\)\) {/, 'const { data: hero } = getMainPage("/heros/ai-hero.mdx");\n\n  if (!(services && services.length)) {');
            }
        }

        // Replace the component tag
        content = content.replace(/<ServiceDetails \{\.\.\.service\} \/>/g, '<AiHero {...hero} title={title} />');
        
        // Add className to main
        content = content.replace(/<main[^>]*>/, '<main className="instrument-ai" theme-setting="style-4">');

        fs.writeFileSync(file, content, 'utf8');
        console.log("Updated", file);
    } catch(e) {
        console.error("Error updating", file, e);
    }
});
