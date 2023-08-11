// Your code goes here
/* Document*/

document.getElementById('text').innerHTML = "This is really cool!"

document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM has loaded");
    document.getElementById('text').innerHTML = "JavaScript is so cool. It lets me add text to my page programmatically."
});


console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);



