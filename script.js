// ================================
// FORM VALIDATION
// ================================

const form = document.getElementById("signupForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page refresh

  let errors = [];

  // Validate username (must be at least 3 characters)
  if (usernameInput.value.trim().length < 3) {
    errors.push("Username must be at least 3 characters long.");
  }

  // Validate email (must contain @ and .)
  if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
    errors.push("Please enter a valid email.");
  }

  // Show errors or success
  if (errors.length > 0) {
    formMessage.style.color = "red";
    formMessage.innerText = errors.join(" ");
  } else {
    formMessage.style.color = "green";
    formMessage.innerText = "Form submitted successfully!";
  }
});

// ================================
// FEATURE 1: CHANGE BACKGROUND COLOR
// ================================
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", function() {
  // Pick a random color
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// ================================
// FEATURE 2: SIMPLE COUNTER
// ================================
let counter = 0;
const counterValue = document.getElementById("counterValue");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", function() {
  counter++;
  counterValue.innerText = counter;
});

decreaseBtn.addEventListener("click", function() {
  counter--;
  counterValue.innerText = counter;
});
