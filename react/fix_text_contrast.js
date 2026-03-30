const fs = require('fs');
const glob = require('glob');

const processFiles = (pattern) => {
    const files = glob.sync(pattern);
    files.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;

        // Replace text-text-fixed with text-text-fixed-2 when combined with bg-theme or bg-primary
        // Case 1: text-text-fixed followed by bg-theme/primary
        content = content.replace(/(text-text-fixed(?!!-2))([\s\w-]*)(bg-theme|bg-primary|group-hover:bg-theme|group-hover:bg-primary)/g, (match, p1, p2, p3) => {
            changed = true;
            return 'text-text-fixed-2' + p2 + p3;
        });

        // Case 2: bg-theme/primary followed by text-text-fixed
        content = content.replace(/(bg-theme|bg-primary|group-hover:bg-theme|group-hover:bg-primary)([\s\w-]*)(text-text-fixed(?!!-2))/g, (match, p1, p2, p3) => {
            changed = true;
            return p1 + p2 + 'text-text-fixed-2';
        });

        // Case 3: textColor={"text-text-fixed"} when bgColor={"bg-theme"}
        content = content.replace(/(bgColor="|bgColor=\{")bg-theme("|\}")([\s\S]*?)(textColor="|textColor=\{")text-text-fixed([\s\w-]*?)("|\})/g, (match, b1, b2, b3, t1, t2, t3) => {
            changed = true;
            return b1 + 'bg-theme' + b2 + b3 + t1 + 'text-text-fixed-2' + t2 + t3;
        });
        
         // Case 4: Reverse order for Case 3
        content = content.replace(/(textColor="|textColor=\{")text-text-fixed([\s\w-]*?)("|\})([\s\S]*?)(bgColor="|bgColor=\{")bg-theme("|\})/g, (match, t1, t2, t3, s1, b1, b2) => {
            changed = true;
            return t1 + 'text-text-fixed-2' + t2 + t3 + s1 + b1 + 'bg-theme' + b2;
        });

        if (changed) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated ${file}`);
        }
    });
};

processFiles('src/**/*.{tsx,css}');
