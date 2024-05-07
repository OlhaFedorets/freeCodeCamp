function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name
}
function defeatMonster() {
    gold += Math.floor(6.7 * monsters[fighting].level);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
}
function lose() { } 