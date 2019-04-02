/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let hours = parseInt(timeString.split(":")[0])
  let mins = parseInt(timeString.split(":")[1])
  let message = "hello, I haven't been set"
  if (hours < 12) {
    message = "Good Morning"
  } else if (hours > 12 && hours < 17) {
    message = "Good Afternoon"
  } else {
    message = "Good Evening"
  }
  return message
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let greeting = document.querySelector('#greeting')
  greeting.textContent = message
}