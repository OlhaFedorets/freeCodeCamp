function buyWeapon() {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      text.innerText = "You now have a new weapon."
    }
  }