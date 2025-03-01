import fs from 'fs';

function findDuplicates() {
  const file = fs.readFileSync("src/types.ts", "utf8");
  const lines = file.split('\n');
  const duplicates = {
    person: {},
    action: {},
    object: {}
  };
  
  let currentType = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Detect which type we're in
    if (line.includes("person: {")) currentType = "person";
    else if (line.includes("action: {")) currentType = "action";
    else if (line.includes("object: {")) currentType = "object";
    else if (line === "},") currentType = null;
    
    // If we're in a type section and the line contains an array
    if (currentType && line.startsWith("'")) {
      const number = line.match(/'(\d+)'/)?.[1];
      if (number) {
        const words = line.match(/\[(.*?)\]/)?.[1]
          .split(',')
          .map(w => w.trim().replace(/['"]/g, ''))
          .filter(w => w);
        
        if (words) {
          const seen = new Set();
          const dups = words.filter(word => {
            if (seen.has(word)) return true;
            seen.add(word);
            return false;
          });
          if (dups.length > 0) {
            duplicates[currentType][number] = dups;
          }
        }
      }
    }
  }
  
  return duplicates;
}

const duplicates = findDuplicates();
console.log("\nFound duplicates:");
console.log(JSON.stringify(duplicates, null, 2)); 