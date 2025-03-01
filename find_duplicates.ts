import { wordLists } from './src/types';

function findDuplicates(obj: any) {
  const duplicates: any = {};
  const allWords = new Set<string>();
  const globalDuplicates = new Set<string>();

  // First pass - find duplicates within each category and number
  for (const [type, numbers] of Object.entries(obj)) {
    duplicates[type] = {};
    for (const [num, words] of Object.entries(numbers)) {
      const seen = new Set<string>();
      const dups = (words as string[]).filter(word => {
        if (seen.has(word)) return true;
        seen.add(word);
        return false;
      });
      if (dups.length > 0) {
        duplicates[type][num] = dups;
      }

      // Track all words for cross-category duplicates
      (words as string[]).forEach(word => {
        if (allWords.has(word)) {
          globalDuplicates.add(word);
        }
        allWords.add(word);
      });
    }
  }

  // Second pass - find where each global duplicate appears
  const globalDuplicateLocations: { [key: string]: string[] } = {};
  globalDuplicates.forEach(word => {
    globalDuplicateLocations[word] = [];
    for (const [type, numbers] of Object.entries(obj)) {
      for (const [num, words] of Object.entries(numbers)) {
        if ((words as string[]).includes(word)) {
          globalDuplicateLocations[word].push(`${type}[${num}]`);
        }
      }
    }
  });

  return {
    withinCategories: duplicates,
    crossCategories: globalDuplicateLocations
  };
}

const results = findDuplicates(wordLists);
console.log("\nDuplicates within categories:");
console.log(JSON.stringify(results.withinCategories, null, 2));
console.log("\nCross-category duplicates and their locations:");
console.log(JSON.stringify(results.crossCategories, null, 2)); 