function isSame(ar1, ar2) {
    if (!Array.isArray(ar1) || !Array.isArray(ar2)) return "Invalid";
    if (ar1.length !== ar2.length) return false;
    
    for (let i = 0; i < ar1.length; i++) {
        if (ar1[i] !== ar2[i]) return false;
    }
    return true;
}

// টেস্ট করার জন্য (সাবমিটের আগে মুছে ফেলবা)
console.log(isSame([1, 2, 3], [1, 2, 3]));            // true
console.log(isSame([34, 5, 7, 9], [34, 5, 7]));      // false
console.log(isSame([1, undefined, 3], [1, null, 3]));// false
console.log(isSame([1, 4, 5], [1, 4, 5]));           // true
console.log(isSame([1, "4", 4], [1, 4, 4]));         // false
console.log(isSame([2, 5, 6], 256));                 // Invalid
console.log(isSame({data: [2, 5, 6]}, [2, 5, 6]));   // Invalid
