function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name
}
function defeatMonster() { 
    gold += Math.floor(6.7 * monsters[fighting].level);
    xp += monsters[fighting].level;
 }
function lose() { } 