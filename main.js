let names = [];
function addName() {
  const newName = document.getElementById("nameInput").value.trim();
  if (newName != "") names.push(newName);
  document.getElementById("nameInput").value = "";
}d
function selectRandomName() {
  if (names.length === 0) {
    document.getElementById("selectedName").innerHTML =
      "You did not add any names yet!!";
  } else {
    const randomindex = Math.floor(Math.random() * names.length);
    document.getElementById("selectedName").innerHTML = names[randomindex];
  }
}
