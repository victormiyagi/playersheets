// Load saved data on page load
window.onload = () => {
  const data = JSON.parse(localStorage.getItem("dndCharacter"));
  if (data) {
    document.getElementById("charName").value = data.charName || "";
    document.getElementById("charClassLevel").value = data.charClassLevel || "";
    document.getElementById("charBackground").value = data.charBackground || "";
    document.getElementById("playerName").value = data.playerName || "";
    document.getElementById("charRace").value = data.charRace || "";
    document.getElementById("charAlignment").value = data.charAlignment || "";
    document.getElementById("charXP").value = data.charXP || "";
  }
};

function saveData() {
  const data = {
    charName: document.getElementById("charName").value,
    charClassLevel: document.getElementById("charClassLevel").value,
    charBackground: document.getElementById("charBackground").value,
    playerName: document.getElementById("playerName").value,
    charRace: document.getElementById("charRace").value,
    charAlignment: document.getElementById("charAlignment").value,
    charXP: document.getElementById("charXP").value
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
