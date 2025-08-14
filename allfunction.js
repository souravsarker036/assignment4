function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    let totalfine = fare + (fare * 20 / 100) + 30;
    return totalfine;
}

function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    return str.split(" ").join("").toUpperCase();
}

function bestTeam(player1, player2) {
    if (typeof player1 !== 'object' || typeof player2 !== 'object') {
        return "Invalid";
    }
    
    let team1 = player1.foul + player1.cardY + player1.cardR;
    let team2 = player2.foul + player2.cardY + player2.cardR;
    
    if (team1 < team2) {
        return player1.name;
    } 
    else if (team2 < team1) {
        return player2.name;
    } 
    else {
        return "Tie";
    }
}

function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return "Invalid";
    if (arr1.length !== arr2.length) return false;
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

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