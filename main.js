
document.getElementById("btn").addEventListener("click", simulate);

function simulate() {
    let postNum = +document.getElementById("posNum").value;
    let randNum = Math.random();

    // if (postNum != 1 ) {
    //     document.getElementById("fix").innerHTML = "Not a number between 1 - 12!";
    // }

    if (postNum < 7 && postNum > 0) {
        if (randNum < .45) {
            document.getElementById("BAN").innerHTML++;
            document.getElementById("totC").innerHTML++;
        } else if (randNum > .45 && randNum < .8) {
            document.getElementById("GS").innerHTML++;
            document.getElementById("totC").innerHTML++;
        } else if (randNum > .8 && randNum < .95) {
            document.getElementById("ST").innerHTML++;
            document.getElementById("totC").innerHTML++;
        } else if (randNum > .95 && randNum < .99) {
            document.getElementById("GM").innerHTML++;
            document.getElementById("totC").innerHTML++;
        } else if (randNum > .99 && randNum < 1) {
            document.getElementById("BB").innerHTML++;
            document.getElementById("totC").innerHTML++;
        }
    }

    if (postNum < 13 && postNum > 6) {
        if (randNum < .05) {
            document.getElementById("BAN").innerHTML++;
            document.getElementById("totC").innerHTML++;
        } else if (randNum > .05 && randNum < .1) {
            document.getElementById("GS").innerHTML++;
            document.getElementById("totC").innerHTML++;
        } else if (randNum > .1 && randNum < .35) {
            document.getElementById("ST").innerHTML++;
            document.getElementById("totC").innerHTML++;
        } else if (randNum > .35 && randNum < .7) {
            document.getElementById("GM").innerHTML++;
            document.getElementById("totC").innerHTML++;
        } else if (randNum > .7 && randNum < 1) {
            document.getElementById("BB").innerHTML++;
            document.getElementById("totC").innerHTML++;
        }
    } 
}
