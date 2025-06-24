function twoSort(s) {
    // Step 1: Sort the array alphabetically (case-sensitive)
    s.sort();
    
    // Step 2: Take the first element
    let first = s[0];
    
    // Step 3: Add "***" between each character
    return first.split('').join('***');
}

console.log(twoSort(["banana", "Apple", "cherry"]));
