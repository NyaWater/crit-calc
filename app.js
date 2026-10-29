const btn = document.getElementById('calc-btn');

btn.addEventListener('click', function() {
    const dmg = Number(document.getElementById('dmg').value);
    const rate = Number(document.getElementById('rate').value);
    const critRes = Number(document.getElementById('critRes').value);
    const crit = Number(document.getElementById('crit').value);
    const mode = document.getElementById('mode').value;

    // Calculate Expected Damage
    let critDmg = 0;
    let realRate = Math.max(0, Math.min(100, rate - critRes));
    if (mode === "add") {
        critDmg = dmg * (1 + crit/100);
    } else if (mode === "multiply") {
        critDmg = dmg * crit / 100;
    } else {
        critDmg = 0;
    }
    let finalResult = dmg * (1 - realRate/100) + critDmg * realRate/100;

    document.getElementById('result').innerText = "Expected Damage: " + finalResult;
});
