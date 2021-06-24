window.onclick = anyClick;
var gamestate = 0;
var playerShape = 0;

const allTiles = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9'];

var row1 = 0;
var row2 = 0;
var row3 = 0;
var col1 = 0;
var col2 = 0;
var col3 = 0;
var diag1 = 0;
var diag2 = 0;

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
    var blankSpaces = [];
    for (const tile of allTiles) {
        if (document.getElementById(tile).value == " ") {
            blankSpaces.push(tile);
        }
    }
    var random = Math.floor(Math.random() * blankSpaces.length)
    return blankSpaces[random]
}

function Ai(){
    if ((document.getElementById("b1").value == " ") && (row1 == -2 || col1 == -2 || diag1 == -2)){
        return "b1"
    }
    else if ((document.getElementById("b2").value == " ") && (row1 == -2 || col2 == -2)){
        return "b2"
    }
    else if ((document.getElementById("b3").value == " ") && (row1 == -2 || col3 == -2 || diag2 == -2)){
        return "b3"
    }
    else if ((document.getElementById("b4").value == " ") && ( row2 == -2 || col1 == -2 )){
        return "b4"
    }
    else if ((document.getElementById("b5").value == " ") && (row2 == -2 || col2 == -2 || diag1 == -2 || diag2 == -2)){
        return "b5"
    }
    else if ((document.getElementById("b6").value == " ") && (row2 == -2 || col3 == -2)){
        return "b6"
    }
    else if ((document.getElementById("b7").value == " ") && (row3 == -2 || col1 == -2 || diag2 == -2)){
        return "b7"
    }
    else if ((document.getElementById("b8").value == " ") && (row3 == -2 || col2 == -2)){
        return "b8"
    }
    else if ((document.getElementById("b9").value == " ") && (row3 == -2 || col3 == -2 || diag1 == -2)){
        return "b9"
    }
    else if ((document.getElementById("b1").value == " ") && (row1 == 2 || col1 == 2 || diag1 == 2)){
        return "b1"
    }
    else if ((document.getElementById("b2").value == " ") && (row1 == 2 || col2 == 2)){
        return "b2"
    }
    else if ((document.getElementById("b3").value == " ") && (row1 == 2 || col3 == 2 || diag2 == 2)){
        return "b3"
    }
    else if ((document.getElementById("b4").value == " ") && (row2 == 2 || col1 == 2)){
        return "b4"
    }
    else if ((document.getElementById("b5").value == " ") && (row2 == 2 || col2 == 2 || diag1 == 2 || diag2 == 2)){
        return "b5"
    }
    else if ((document.getElementById("b6").value == " ") && (row2 == 2 || col3 == 2)){
        return "b6"
    }
    else if ((document.getElementById("b7").value == " ") && (row3 == 2 || col1 == 2 || diag2 == 2)){
        return "b7"
    }
    else if ((document.getElementById("b8").value == " ") && (row3 == 2 || col2 == 2)){
        return "b8"
    }
    else if ((document.getElementById("b9").value == " ") && (row3 == 2 || col3 == 2 || diag1 == 2)){
        return "b9"
    }
    else{
        return(randomBlankSpace())
    }
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
            losePoint("b5")
        }
        else {
            var move =randomBlankSpace()
            document.getElementById(move).value = opponentTile()
            losePoint(move)
        }
    }
}

function markTile_1() {
    if (gamestate > 1 && gamestate % 2 == 0) {
        if (document.getElementById("b1").value == " ") {
            document.getElementById("b1").value = playerTile();
            document.getElementById("speech").innerHTML = "My turn";
            document.getElementById("okButton").style.display = "block";
            getPoint("b1");
            gamestate++
        }
    }
}
function markTile_2() {
    if (gamestate > 1 && gamestate % 2 == 0) {
        if (document.getElementById("b2").value == " ") {
            document.getElementById("b2").value = playerTile();
            document.getElementById("speech").innerHTML = "My turn";
            document.getElementById("okButton").style.display = "block";
            getPoint("b2");

            gamestate++
        }
    }
}
function markTile_3() {
    if (gamestate > 1 && gamestate % 2 == 0) {
        if (document.getElementById("b3").value == " ") {
            document.getElementById("b3").value = playerTile();
            document.getElementById("speech").innerHTML = "My turn";
            document.getElementById("okButton").style.display = "block";
            getPoint("b3");
            gamestate++
        }
    }
}
function markTile_4() {
    if (gamestate > 1 && gamestate % 2 == 0) {
        if (document.getElementById("b4").value == " ") {
            document.getElementById("b4").value = playerTile();
            document.getElementById("speech").innerHTML = "My turn";
            document.getElementById("okButton").style.display = "block";
            getPoint("b4");
            gamestate++
        }
    }
}
function markTile_5() {
    if (gamestate > 1 && gamestate % 2 == 0) {
        if (document.getElementById("b5").value == " ") {
            document.getElementById("b5").value = playerTile();
            document.getElementById("speech").innerHTML = "My turn";
            document.getElementById("okButton").style.display = "block";
            getPoint("b5");
            gamestate++
        }
    }
}
function markTile_6() {
    if (gamestate > 1 && gamestate % 2 == 0) {
        if (document.getElementById("b6").value == " ") {
            document.getElementById("b6").value = playerTile();
            document.getElementById("speech").innerHTML = "My turn";
            document.getElementById("okButton").style.display = "block";
            getPoint("b6");
            gamestate++
        }
    }
}
function markTile_7() {
    if (gamestate > 1 && gamestate % 2 == 0) {
        if (document.getElementById("b7").value == " ") {
            document.getElementById("b7").value = playerTile();
            document.getElementById("speech").innerHTML = "My turn";
            document.getElementById("okButton").style.display = "block";
            getPoint("b7");
            gamestate++
        }
    }
}
function markTile_8() {
    if (gamestate > 1 && gamestate % 2 == 0) {
        if (document.getElementById("b8").value == " ") {
            document.getElementById("b8").value = playerTile();
            document.getElementById("speech").innerHTML = "My turn";
            document.getElementById("okButton").style.display = "block";
            getPoint("b8");
            gamestate++
        }
    }
}
function markTile_9() {
    if (gamestate > 1 && gamestate % 2 == 0) {
        if (document.getElementById("b9").value == " ") {
            document.getElementById("b9").value = playerTile();
            document.getElementById("speech").innerHTML = "My turn";
            document.getElementById("okButton").style.display = "block";
            getPoint("b9");
            gamestate++
        }
    }
}

function getPoint(b) {
    if (b == "b1") {
        row1++, col1++, diag1++
    }
    else if (b == "b2") {
        row1++, col2++
    }
    else if (b == "b3") {
        row1++, col3++, diag2++
    }
    else if (b == "b4") {
        row2++, col1++
    }
    else if (b == "b5") {
        row2++, col2++, diag1++, diag2++
    }
    else if (b == "b6") {
        row2++, col3++
    }
    else if (b == "b7") {
        row3++, col1++, diag2++
    }
    else if (b == "b8") {
        row3++, col2++
    }
    else if (b == "b9") {
        row3++, col3++, diag1++
    }
}

function losePoint(b) {
    if (b == "b1") {
        row1--, col1--, diag1--
    }
    else if (b == "b2") {
        row1--, col2--
    }
    else if (b == "b3") {
        row1--, col3--, diag2--
    }
    else if (b == "b4") {
        row2--, col1--
    }
    else if (b == "b5") {
        row2--, col2--, diag1--, diag2--
    }
    else if (b == "b6") {
        row2--, col3--
    }
    else if (b == "b7") {
        row3--, col1--, diag2--
    }
    else if (b == "b8") {
        row3--, col2--
    }
    else if (b == "b9") {
        row3--, col3--, diag1--
    }
}

function opponentTurn() {
    var move = Ai()
    document.getElementById(move).value = opponentTile()
    document.getElementById("speech").innerHTML = "Your turn!";
    document.getElementById("okButton").style.display = "none";
    losePoint(move);
    checkWin();
    gamestate++
}

function reset() {
    gamestate = 0;
    document.getElementById("b1").value = " "
    document.getElementById("b2").value = " "
    document.getElementById("b3").value = " "
    document.getElementById("b4").value = " "
    document.getElementById("b5").value = " "
    document.getElementById("b6").value = " "
    document.getElementById("b7").value = " "
    document.getElementById("b8").value = " "
    document.getElementById("b9").value = " "
    row1 = 0;
    row2 = 0;
    row3 = 0;
    col1 = 0;
    col2 = 0;
    col3 = 0;
    diag1 = 0;
    diag2 = 0;
    document.getElementById("resetButton").style.display = "none"
}

function checkWin() {
    var i = 0;
    for (const tile of allTiles){
        if (document.getElementById(tile).value !== " "){
            i++
        }
    }  
    if (row1 == 3 || row2 == 3 || row3 == 3 || col1 == 3 || col2 == 3 || col3 == 3 || diag1 == 3 || diag2 == 3) {
        document.getElementById("speech").innerHTML = "You Win!\n Play Again?"
        document.getElementById("resetButton").style.display = "block"
        document.getElementById("okButton").style.display = "none";
    }
    else if (row1 == -3 || row2 == -3 || row3 == -3 || col1 == -3 || col2 == -3 || col3 == -3 || diag1 == -3 || diag2 == -3) {
        document.getElementById("speech").innerHTML = "I Win!\n Play Again?"
        gamestate--
        document.getElementById("resetButton").style.display = "block"
    }
    else if(i == 9)
        {
        document.getElementById("speech").innerHTML = "Stalemate!\n Play Again?"
        document.getElementById("resetButton").style.display = "block"
        document.getElementById("okButton").style.display = "none";
    }
}