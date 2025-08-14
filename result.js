function resultReport(marks) {
    if (marks == null || typeof marks !== 'object' || marks.length === undefined) return "Invalid";

    let total = 0, pass = 0, fail = 0;

    for (let i = 0; i < marks.length; i++) {
        let m = marks[i];
        total += m;
        if (m >= 40) pass++;
        else fail++;
    }

    let avg = total / marks.length;
    let finalScore = isNaN(avg) ? 0 : Math.round(avg);

    return { finalScore: finalScore, pass: pass, fail: fail };
}

// টেস্ট
console.log(resultReport([]));                        // { finalScore:0, pass:0, fail:0 }
console.log(resultReport([98, 87, 67, 91, 92, 33, 87])); // { finalScore:79, pass:6, fail:1 }
console.log(resultReport([100, 100, 100, 12 ,100]));         // { finalScore:70, pass:4, fail:1 }
console.log(resultReport([99]));                          // { finalScore:99, pass:1, fail:0 }
console.log(resultReport(100));                            // Invalid
