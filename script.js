function calculate() {
    let total = Number(document.getElementById("total").value);
    let attended = Number(document.getElementById("attended").value);
    let required = Number(document.getElementById("required").value);

    if (attended > total || total == 0) {
        document.getElementById("result").innerHTML =
            "❌ Please enter valid numbers";
        return;
    }

    let attendance = (attended / total) * 100;
    attendance = attendance.toFixed(2);

    let maxTotal = (attended * 100) / required;
    let canLeave = Math.floor(maxTotal - total);

    let message = "📊 Your Attendance: " + attendance + "%<br>";

    if (attendance >= required) {
        message += "✅ You are SAFE<br>";
        message += "❌ You can leave " + canLeave + " more classes";
    } else {
        message += "⚠️ You are at RISK of detention<br>";
        message += "👉 Attend more classes";
    }

    document.getElementById("result").innerHTML = message;
}
