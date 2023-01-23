const body = document.getElementById("body");
const toggleModeButton = document.getElementById("toggleMode");
const cinnamonRollButton = document.getElementById("cinnamonRollButton");
const cinnamonRollContainer = document.getElementById("cinnamonRollContainer");

const addCinnamonRoll = () => {
  const newRoll = document.createElement("span");
  newRoll.innerHTML =
    '<img src="/assets/single-roll.webp" alt="a single cinnamon roll" />';
  cinnamonRollContainer.appendChild(newRoll);
};

const toggleStyles = () => {
  body.classList.toggle("dark-mode");
};

const registerEventHandlers = () => {
  cinnamonRollButton.addEventListener("click", addCinnamonRoll);
  toggleModeButton.addEventListener("click", toggleStyles);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
