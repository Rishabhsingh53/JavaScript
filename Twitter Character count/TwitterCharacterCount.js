// displays the length of the message character count and how much character count is remaining 

var msg = prompt("Enter the message");
console.log("You have written " + msg.length + " characters, you have " + (140 - msg.length) + " character left");