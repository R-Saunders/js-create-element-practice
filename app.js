'use strict'
// Create onclick function
function clicked() {
  // Create an element with js
  const creating = document.createElement('p');
  // Log created element in console
  console.log(creating);
  // Create content with js
  const createContent = document.createTextNode('We did it');
  // Console log content
  console.log(createContent);
  // Add created content to created element
  creating.appendChild(createContent);
  // Get element and save to variable
  const elementCaptured = document.getElementById('testing');
  // Console log new variable and captured element
  console.log(elementCaptured);
  // Add created content to created element within element on the DOM.
  elementCaptured.appendChild(creating)

}