const countDisplay = document.getElementById("count");
const clickBtn = document.getElementById("clickBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

// Increase counter on click
clickBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// Reset counter
resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});
