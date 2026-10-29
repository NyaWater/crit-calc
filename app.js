const btn = document.getElementById('calc-btn');

btn.addEventListener('click', function() {
    const baseDmg = Number(document.getElementById('baseDmg').value);
    const critRate = Number(document.getElementById('critRate').value);
    const critRes = Number(document.getElementById('critRes').value);
    const critDmgBonus = Number(document.getElementById('critDmgBonus').value);
    const mode = document.getElementById('mode').value;

    // Calculate Expected Damage
    let critDmg = 0;
    let realRate = Math.max(0, Math.min(100, critRate - critRes));
    if (mode === "add") {
        critDmg = baseDmg * (1 + critDmgBonus/100);
    } else if (mode === "multiply") {
        critDmg = baseDmg * critDmgBonus / 100;
    } else {
        critDmg = 0;
    }
    let finalResult = baseDmg * (1 - realRate/100) + critDmg * realRate/100;

    document.getElementById('result').innerText = "Expected Damage: " + finalResult;
});
