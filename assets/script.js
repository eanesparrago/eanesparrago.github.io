const myDate = new Date();
const hrs = myDate.getHours();

let greet = "Hi there!";

if (hrs < 12) greet = "Good morning!";
else if (hrs >= 12 && hrs <= 17) greet = "Good afternoon!";
else if (hrs >= 17 && hrs <= 24) greet = "Good evening!";

document.getElementById("greetingsText").innerHTML = greet;
