// This is a basic JavaScript template to get started

// Function to display a greeting message


// Call the function when the page loads
/*window.onload = function() {
    displayGreeting();
};*/
// Additional functionality can be added here
// For example, handling button clicks or form submissions
function handleButtonClick() {
    console.log("Button was clicked!");
    alert("You clicked the button!Now Jarvis knows your name (o≧▽≦)o.");
}
// Example of adding an event listener to a button
document.getElementById("mybuton").addEventListener("click", handleButtonClick);
//Varibles
let userName = prompt("Please enter your name(authentication purposes....):");
console.log(`User's name is: ${userName} write that down`);
if (userName == "a m0bile") {
    const dgm = document.getElementById("master")
    dgm.innerHTML = "<h2 style='color:blue;font-family:Fantasy;'><b>Error 1000:Welcome...Master....<b></h2>"
}

function displayGreeting() {
    if (userName == "a m0bile") {
        let greeting = "Welcome...Master!";
        console.log(greeting);
        alert(greeting);
    } else {
        let greeting = "Welcome to the Mobile Website!";
        console.log(greeting);
        alert(greeting);
    }
}
displayGreeting();


//Send varible to website


// End of JavaScript code

/* THE MOBILE WEBSITE VERSION 1.6:QUIZZICAL STYLIST:
Author: M0bile132022
Date of last test: 11/01/26 */

