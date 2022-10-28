// JavaScript source code





let answer = ('');
let points = document.getElementById("points");
let pointcounter = 0;
points.innerHTML = pointcounter;




function reset() {

    let random1 = Math.floor(Math.random() * 10) + 1;
    let random2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("number1").innerHTML = random1;
    document.getElementById("number2").innerHTML = random2;
    if (random1 === random2) answer = "=";
    else if (random1 < random2) answer = "<";
    else if (random1 > random2) answer = ">";
    console.log(reset);
}
function button1(answer1) {
    if (`${answer1}` === answer) {
        pointcounter++;
        points.innerHTML = pointcounter;
        reset();
    }
 else
        pointcounter--;
        points.innerHTML = pointcounter;
    console.log(button1)
}
function test() {
    pointcounter++;
    points.innerHTML = pointcounter;
}
reset()