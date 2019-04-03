/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString) {
  let hour = parseInt(timeString.split(":"))

  if (hour < 12) {
    return `Good Morning`
  }

  else if (hour > 12 && hour < 17) {
    return `Good Afternoon`
  }

  else {
    return `Good Evening`
  }
}

function displayMessage(greet) {
  let message = document.querySelector('#greeting')
  message.innerHTML = greet
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
