// Load saved data on page load
window.onload = () => {
  const data = JSON.parse(localStorage.getItem("dndCharacter"));
  if (data) {
    document.getElementById("charName").value = data.charName || "";
    document.getElementById("charClass").value = data.charClass || "";
    document.getElementById("charLevel").value = data.charLevel || "";
    document.getElementById("charRace").value = data.charRace || "";
    document.getElementById("currentHP").value = data.currentHP || "";
    document.getElementById("maxHP").value = data.maxHP || "";
    document.getElementById("str").value = data.str || "";
    document.getElementById("dex").value = data.dex || "";
    document.getElementById("con").value = data.con || "";
    document.getElementById("int").value = data.int || "";
    document.getElementById("wis").value = data.wis || "";
    document.getElementById("cha").value = data.cha || "";
    document.getElementById("inventory").value = data.inventory || "";
    document.getElementById("spells").value = data.spells || "";
  }
};

function saveData() {
  const data = {
    charName: document.getElementById("charName").value,
    charClass: document.getElementById("charClass").value,
    charLevel: document.getElementById("charLevel").value,
    charRace: document.getElementById("charRace").value,
    currentHP: document.getElementById("currentHP").value,
    maxHP: document.getElementById("maxHP").value,
    str: document.getElementById("str").value,
    dex: document.getElementById("dex").value,
    con: document.getElementById("con").value,
    int: document.getElementById("int").value,
    wis: document.getElementById("wis").value,
    cha: document.getElementById("cha").value,
    inventory: document.getElementById("inventory").value,
    spells: document.getElementById("spells").value
  };
  localStorage.setItem("dndCharacter", JSON.stringify(data));
  alert("Character data saved!");
}

function clearData() {
  if (confirm("Are you sure you want to clear all saved data?")) {
    localStorage.removeItem("dndCharacter");
    location.reload();
  }
}
