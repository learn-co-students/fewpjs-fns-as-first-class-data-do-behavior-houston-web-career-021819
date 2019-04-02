/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
};

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  let hr = string.split(":")[0];
  if (hr < 12){
    return "Good Morning";
  } else if (hr > 12 && hr < 17){
    return "Good Afternoon";
  } else if (hr > 17){
    return "Good Evening";
  }
};
/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.querySelector("#greeting").innerHTML = string
};