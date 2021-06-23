window.onclick = anyClick;

var gamestate = 0;
var playerShape = 0;
var b1, b1, b3, b4, b5, b6, b7, b8, b9;
b1 = document.getElementById("b1").value;
b2 = document.getElementById("b2").value;
b3 = document.getElementById("b3").value;
b4 = document.getElementById("b4").value;
b5 = document.getElementById("b5").value;
b6 = document.getElementById("b6").value;
b7 = document.getElementById("b7").value;
b8 = document.getElementById("b8").value;
b9 = document.getElementById("b9").value;

const allTiles = [b1, b2, b3, b4, b5, b6, b7, b8, b9]

function anyClick() {
    if (gamestate == 0) {
        document.getElementById("speech").innerHTML = "Choose your shape:"
        document.getElementById("hideButtons").style.display = "block"
        gamestate++
    }
}

function chooseX() {
    playerShape = 1
    document.getElementById("hideButtons").style.display = "none"
}

function chooseO() {
    playerShape = 0
    document.getElementById("hideButtons").style.display = "none"
}

function playerTile() {
    if (playerShape == 0)
        return "O"
    else
        return "X"
}

function opponentTile() {
    if (playerShape == 0)
        return "X"
    else
        return "O"
}

function randomBlankSpace() {

    var blankSpaces = allTiles.filter(function(x) { return document.getElementById(x).value == ""; });
/*  alternate method:
    var blankSpaces = [];
    for (let i = 0; i < allTiles.length; i++){
        if (document.getElementById(i).value == ""){
            blankSpaces.push(i);
        }
    }
*/
    var random = Math.floor(Math.random() * blankSpaces.length)
    return blankSpaces[random]
}

function test(){
    return randomBlankSpace().value;
}

function printRandom(){
    document.getElementById("test").innerHTML = test()
}

function pickOrder() {
    if (Math.random() < 0.5) {
        document.getElementById("speech").innerHTML = "You go first."
        gamestate++
    }
    else {
        document.getElementById("speech").innerHTML = "I'll go first."
        gamestate++
        if (Math.random() < 0.5) {
            document.getElementById("b5").value = opponentTile()
        }
        else {
        document.getElementById(randomBlankSpace()).value = opponentTile()
        }
    }
    

    /*    else if (Math.random() < 0.5) {
            if (Math.random() < 0.5) {
                if (Math.random() < 0.5) {
                    document.getElementById("b1").value = opponentTile()
                }
                else {
                    document.getElementById("b2").value = opponentTile()
                }
            }
            else {
                if (Math.random() < 0.5) {
                    document.getElementById("b3").value = opponentTile()
                }
                else {
                    document.getElementById("b4").value = opponentTile()
                }
            }
        }
            else { if (Math.random() < 0.5) {
                if (Math.random() < 0.5) {
                    document.getElementById("b6").value = opponentTile()
                }
                else {
                    document.getElementById("b7").value = opponentTile()
                }
            }
            else {
                if (Math.random() < 0.5) {
                    document.getElementById("b8").value = opponentTile()
                }
                else {
                    document.getElementById("b9").value = opponentTile()
                }
            }
            
        }
    }*/
}

function markTile(){

}








/*
function myfunc() {
    var b1, b1, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
}
*/