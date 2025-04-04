const quotes= ["Do not watch the clock; do what it does. Keep going. -Sam Levenson",
               "Do not wait for the perfect moment, take the moment and make it perfect.",
               "Every day may not be good, but there is something good in every day.",
               "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
               "Believe you can, and you're halfway there. -Theodore Roosevelt"]

function generate(){
    document.getElementById("quote").innerHTML=quotes[Math.floor(Math.random()*quotes.length)];
}
