/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet (time) {
  const hour = time.split(":")[0];
  if (hour < 12) {
    return "Good Morning";
  } else if (hour > 16){
    return "Good Evening";
  } else {
    return "Good Afternoon";
  };
};

function displayMessage(message) {
  const greeting = document.querySelector('#greeting');
  greeting.textContent = message;
};
