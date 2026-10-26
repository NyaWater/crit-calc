const btn = document.getElementById('calc-btn');

btn.addEventListener('click', function() {
    const dmg = Number(document.getElementById('dmg').value);
    const rate = Number(document.getElementById('rate').value);
    const crit = Number(document.getElementById('crit').value);
    const mode = document.getElementById('mode').value;

    // Calculate Expected Damage
    let critDmg = 0;
    if (mode === "add") {
        critDmg = dmg * (1 + crit/100);
    } else if (mode === "multiply") {
        critDmg = dmg * crit / 100;
    } else {
        critDmg = 0;
    }
    let finalResult = dmg * (1 - rate/100) + critDmg * rate/100;

    document.getElementById('result').innerText = "Expected Damage: " + finalResult;
});
