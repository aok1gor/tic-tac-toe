const container = document.getElementById("container");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let round = 0;

const field1 = document.createElement("button");
const field2 = document.createElement("button");
const field3 = document.createElement("button");
const field4 = document.createElement("button");
const field5 = document.createElement("button");
const field6 = document.createElement("button");
const field7 = document.createElement("button");
const field8 = document.createElement("button");
const field9 = document.createElement("button");

let randomIndex;

function checkWinner() {
    if ((board[0] == "o" && board[1] == "o" && board[2] == "o")||
        (board[3] == "o" && board[4] == "o" && board[5] == "o")||
        (board[6] == "o" && board[7] == "o" && board[8] == "o")||
        (board[0] == "o" && board[3] == "o" && board[6] == "o")||
        (board[1] == "o" && board[4] == "o" && board[7] == "o")||
        (board[2] == "o" && board[5] == "o" && board[8] == "o")||
        (board[0] == "o" && board[4] == "o" && board[8] == "o")||
        (board[2] == "o" && board[4] == "o" && board[6] == "o")) {
        console.log("you win!");
    }
    if ((board[0] == "x" && board[1] == "x" && board[2] == "x")||
        (board[3] == "x" && board[4] == "x" && board[5] == "x")||
        (board[6] == "x" && board[7] == "x" && board[8] == "x")||
        (board[0] == "x" && board[3] == "x" && board[6] == "x")||
        (board[1] == "x" && board[4] == "x" && board[7] == "x")||
        (board[2] == "x" && board[5] == "x" && board[8] == "x")||
        (board[0] == "x" && board[4] == "x" && board[8] == "x")||
        (board[2] == "x" && board[4] == "x" && board[6] == "x")) {
        console.log("you lose!");
    }
}

field1.addEventListener("click", function () {
    board[0] = "o";
    field1.innerText = "o";
    checkWinner();
    do {
        randomIndex = Math.floor(Math.random() * 9);
    }while(board[randomIndex] !== " ");

    board[randomIndex] = "x";
    
    setText();

    checkWinner();
})

field2.addEventListener("click", function () {
    board[1] = "o";
    field2.innerText = "o";
    checkWinner();
    do {
        randomIndex = Math.floor(Math.random() * 9);
    }while(board[randomIndex] !== " ");

    board[randomIndex] = "x";
    
    setText();

    checkWinner();
})
field3.addEventListener("click", function () {
    board[2] = "o";
    field3.innerText = "o";
    
    checkWinner();

    do {
        randomIndex = Math.floor(Math.random() * 9);
    }while(board[randomIndex] !== " ");

    board[randomIndex] = "x";
    
    setText();

    checkWinner();
})
field4.addEventListener("click", function () {
    board[3] = "o";
    field4.innerText = "o";
    
    checkWinner();

    do {
        randomIndex = Math.floor(Math.random() * 9);
    }while(board[randomIndex] !== " ");

    board[randomIndex] = "x";
    
    setText();

    checkWinner();
})
field5.addEventListener("click", function () {
    board[4] = "o";
    field5.innerText = "o";
    

    checkWinner();
    do {
        randomIndex = Math.floor(Math.random() * 9);
    }while(board[randomIndex] !== " ");

    board[randomIndex] = "x";
    
    setText();
    checkWinner();
})
field6.addEventListener("click", function () {
    board[5] = "o";
    field6.innerText = "o";
    checkWinner();
    do {
        randomIndex = Math.floor(Math.random() * 9);
    }while(board[randomIndex] !== " ");

    board[randomIndex] = "x";
    
    setText();
    checkWinner();
})
field7.addEventListener("click", function () {
    board[6] = "o";
    field7.innerText = "o";
    checkWinner();
    do {
        randomIndex = Math.floor(Math.random() * 9);
    }while(board[randomIndex] !== " ");

    board[randomIndex] = "x";
    
    setText();
    checkWinner();
})
field8.addEventListener("click", function () {
    board[7] = "o";
    field8.innerText = "o";
    checkWinner();
    do {
        randomIndex = Math.floor(Math.random() * 9);
    }while(board[randomIndex] !== " ");

    board[randomIndex] = "x";
    
    setText();
    checkWinner();
})
field9.addEventListener("click", function () {
    board[8] = "o";
    field9.innerText = "o";
    checkWinner();
    do {
        randomIndex = Math.floor(Math.random() * 9);
    }while(board[randomIndex] !== " ");

    board[randomIndex] = "x";
    
    setText();
    checkWinner();
})


function setText() {
    if(randomIndex == 0) {
            field1.innerText = "x";
        }

        if(randomIndex == 1) {
            field2.innerText = "x";
        }

        if(randomIndex == 2) {
            field3.innerText = "x";
        }

        if(randomIndex == 3) {
            field4.innerText = "x";
        }

        if(randomIndex == 4) {
            field5.innerText = "x";
        }

        if(randomIndex == 5) {
            field6.innerText = "x";
        }

        if(randomIndex == 6) {
            field7.innerText = "x";
        }

        if(randomIndex == 7) {
            field8.innerText = "x";
        }

        if(randomIndex == 8) {
            field9.innerText = "x";
        }
}

field1.classList.add("field");
field2.classList.add("field");
field3.classList.add("field");
field4.classList.add("field");
field5.classList.add("field");
field6.classList.add("field");
field7.classList.add("field");
field8.classList.add("field");
field9.classList.add("field");

div1.appendChild(field1);
div1.appendChild(field2);
div1.appendChild(field3);
div2.appendChild(field4);
div2.appendChild(field5);
div2.appendChild(field6);
div3.appendChild(field7);
div3.appendChild(field8);
div3.appendChild(field9);

container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);

