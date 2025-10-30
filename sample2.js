const inputField = document.getElementById("inputField");
const lastKey = document.getElementById("lastKey");
const allKeys = document.getElementById("allKeys");

let pressedKeys = [];

inputField.addEventListener("keydown", (event) => {
  let key = event.key;

  // Update last key pressed
  lastKey.textContent = key;

  // Add character keys to the list (ignore control keys)
  if (key.length === 1) {
    pressedKeys.push(key);
    allKeys.textContent = pressedKeys.join(" ");
  }
});
