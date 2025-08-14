function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    let totalfine = fare + (fare * 20 / 100) + 30;
    return totalfine;
}

// টেস্ট (সাবমিটের আগে মুছে ফেলবে বা কমেন্ট করবে)
console.log(totalFine(200));    // 270
console.log(totalFine(0));      // Invalid
console.log(totalFine(50));     // 90
console.log(totalFine(552));    // 692.4
console.log(totalFine(-35));    // Invalid
console.log(totalFine("65"));   // Invalid

