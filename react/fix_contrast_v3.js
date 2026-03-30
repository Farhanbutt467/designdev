const fs = require('fs');
const path = require('path');

const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

const files = getAllFiles('src').filter(f => f.endsWith('.tsx') || f.endsWith('.css'));

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        let newContent = content;
        
        // Flexible replacements for background and text contrast
        const patterns = [
            /(bg-theme|bg-primary|group-hover:bg-theme|group-hover:bg-primary)([\s\w-]*)text-text-fixed(?!-2)/g,
            /text-text-fixed(?!-2)([\s\w-]*) (bg-theme|bg-primary|group-hover:bg-theme|group-hover:bg-primary)/g,
             /!bg-\[#d8544d\]([\s\w-]*)text-text-fixed(?!-2)/g
        ];

        patterns.forEach(pattern => {
            newContent = newContent.replace(pattern, (match, p1, p2, p3) => {
                if (match.includes('text-text-fixed-2')) return match; 
                return match.replace('text-text-fixed', 'text-text-fixed-2');
            });
        });

        // Special case for props in JSX
        newContent = newContent.replace(/(bgColor="|bgColor=\{")bg-theme("|\})([\s\S]*?)(textColor="|textColor=\{")text-text-fixed([\s\w-]*?)("|\})/g, (match, b1, b2, b3, t1, t2, t3) => {
            return b1 + 'bg-theme' + b2 + b3 + t1 + 'text-text-fixed-2' + t2 + t3;
        });
        
        newContent = newContent.replace(/(textColor="|textColor=\{")text-text-fixed([\s\w-]*?)("|\})([\s\S]*?)(bgColor="|bgColor=\{")bg-theme("|\})/g, (match, t1, t2, t3, s1, b1, b2) => {
            return t1 + 'text-text-fixed-2' + t2 + t3 + s1 + b1 + 'bg-theme' + b2;
        });

        if (content !== newContent) {
            fs.writeFileSync(file, newContent, 'utf8');
            console.log(`Updated contrast in ${file}`);
        }
    } catch(e) {
        // Skip binary or problematic files
    }
});
