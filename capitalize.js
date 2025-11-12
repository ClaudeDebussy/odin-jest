export function capitalize(string) {
  if (isTitle(string)) {
    return String(string).charAt(0).toUpperCase() + String(string).slice(1) 
  } else {
    return String(string).charAt(0).toUpperCase() + String(string).slice(1).toLowerCase()
  }
}

export function isTitle(string) {
  const words = String(string).split(/\s+/).filter(Boolean);

  for (const w of words) {
    // find the first alphabetic letter in the word
    const m = w.match(/[A-Za-z]/);
    if (!m) continue; // skip words with no letters (e.g., "1001")

    const firstLetterIndex = w.indexOf(m[0]);
    const firstLetter = w[firstLetterIndex];

    // first alphabetic letter must be uppercase
    if (!isUpperCase(firstLetter)) return false;

    // remaining alphabetic letters must not be uppercase
    const rest = w.slice(firstLetterIndex + 1);
    if (/[A-Z]/.test(rest)) return false;
  }

  return true;
}

function isUpperCase(char) {
  return char.length === 1 && char === char.toUpperCase() && char !== char.toLowerCase();
}

function isLowerCase(char) {
  return char.length === 1 && char === char.toLowerCase() && char !== char.toLowerCase();
}