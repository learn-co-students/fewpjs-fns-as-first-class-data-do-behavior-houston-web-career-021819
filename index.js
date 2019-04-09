/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  if(time > `12:00` && time < `17:00`){
    return 'Good Afternoon'}
  else if(time > `17:00` && time < `24:00`){
    return 'Good Evening'
  }
  else if(time > `12:00`){
    return 'Good Morning'
  }
}

function displayMessage(method){
  const greeting = document.querySelector('#greeting')
  greeting.textContent = method
}
