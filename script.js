const points = [
    "It is certain",
    "Without a doubt",
    "Most likely",
    "As I see it, yes",
    "Yes",
    "Signs point to yes",
    "Better not tell you now",
    "Ask again later",
    "Cannot predict now",
    "My sources say no",
    "Very Doubtful",
    "My answer is now",
    "Nope",
    "No"
];

document.getElementById("response").innerHTML=points;

function myFunction() {
    points.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("response").innerHTML=points[0];
    document.getElementById("response").style.fontSize="18px";
}