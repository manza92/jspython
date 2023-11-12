// Get the element you want to add to
const parentElement = document.getElementById("parent-element");

// Create a new element
const newElement = document.createElement("div");

// Add some content to the new element
newElement.textContent = "This is a new element!";

// Add the new element to the parent element
parentElement.appendChild(newElement);
