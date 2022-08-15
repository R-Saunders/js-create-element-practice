'use strict'
function clicked() {
  // Console Log
  console.log('You\'re simply the best!');
  // Create a `p` element
  const creating = document.createElement('p');
  console.log(creating);
  // Get input value
  const data = document.getElementById('get-me').value;
  console.log(data);
  // Create a text node
  const createContent = document.createTextNode(data);
  console.log(createContent);
  // Add the text to the p element
  creating.appendChild(createContent);
  // Add Class Name to p tag
  creating.className = 'classx';
  // Get element by class
  const getByClass = document.getElementsByClassName('testing')[0];
  console.log(getByClass);
  // Append this with the p element
  getByClass.appendChild(creating);
}