const fs = require('fs');

let content = fs.readFileSync('data_single.js', 'utf8');

let count = 0;
const getCategory = (idx) => {
    if (idx < 13) return "A. E-MAIL - LETTER";
    if (idx < 32) return "B. NOTICE - MEMO - ARTICLE";
    if (idx < 39) return "C. ADVERTISEMENT";
    if (idx < 41) return "D. WEB PAGE";
    if (idx < 47) return "E. MESSAGE CHAIN - CHAT DISCUSSION";
    return "F. OTHERS";
};

content = content.replace(/type:\s*"[^"]+"/g, (match) => {
    let category = getCategory(count);
    count++;
    return `category: "${category}",\n    type: "Single Passage"`; 
});

fs.writeFileSync('data_single.js', content);
console.log(`Updated ${count} records in data_single.js.`);
