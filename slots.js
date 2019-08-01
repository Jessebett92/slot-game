const slotters = ["fas fa-poo", "fas fa-award", "fas fa-basketball-ball", "fas fa-robot", "fab fa-fort-awesome", "fab fa-apple", "fab fa-android"];
const names = ['poo', 'award', 'basketball', 'robot', 'castle', 'apple', 'android'];


let itemA = document.getElementById('itemA');
let itemB = document.getElementById('itemB');
let itemC = document.getElementById('itemC');

let nameA = '';
let nameB = '';
let nameC = '';


let playerBank = parseInt(document.getElementById('player-bank').textContent);
let betAmount = parseInt(document.getElementById('bet-amount').textContent);


let countOne = 0;
let countTen = 0;
let countTwentyFive = 0;
let countHundred = 0;



// event listeners

document.getElementById('spin').addEventListener('click', spin);
document.getElementById('stop-spin').addEventListener('click', stop);


document.getElementById('betOne').addEventListener('click', betOne);
document.getElementById('betTen').addEventListener('click', betTen);
document.getElementById('betTwentyFive').addEventListener('click', betTwentyFive);
document.getElementById('betHundred').addEventListener('click', betHundred);


// FUNCTIONS

function spin() {
    if (playerBank >= 0) {
        columnOne = setInterval(runItemA, 150);
        columnTwo = setInterval(runItemB, 150);
        columnThree = setInterval(runItemC, 150);    
    } else {
        document.querySelector('#heading-msg').textContent = ('Please reload the page to play again');
    }
}



function runItemA() {
    const randomNumberA = getRandomNumber();
    itemA.setAttribute('class', slotters[randomNumberA]);
    nameA = names[randomNumberA];
}

function runItemB() {
    const randomNumberB = getRandomNumber();
    itemB.setAttribute('class', slotters[randomNumberB]);
    nameB = names[randomNumberB];

}

function runItemC() {
    const randomNumberC = getRandomNumber();
    itemC.setAttribute('class', slotters[randomNumberC]);  
    nameC = names[randomNumberC];
}

function getRandomNumber() {
    return Math.floor(Math.random() * 7);
}

function stop() {
    clearInterval(columnOne);
    clearInterval(columnTwo);
    clearInterval(columnThree);
    const spinOff = new results(betAmount, playerBank);
    spinOff.result();
}

// BETTING

function betOne() {
    let countOne = 1.00;
    betAmount += countOne;
    playerBank -= countOne;
    document.querySelector('#bet-amount').textContent = (betAmount);
    document.querySelector('#player-bank').textContent = (playerBank);
}

function betTen() {
    let countTen = 10.00;
    betAmount += countTen;
    playerBank -= countTen;
    document.querySelector('#bet-amount').textContent = (betAmount);
    document.querySelector('#player-bank').textContent = (playerBank);

}

function betTwentyFive() {
    let countTwentyFive = 25.00;
    betAmount += countTwentyFive;
    playerBank -= countTwentyFive;
    document.querySelector('#bet-amount').textContent = (betAmount);
    document.querySelector('#player-bank').textContent = (playerBank);

}

function betHundred() {
    let countHundred = 100.00;
    betAmount += countHundred;
    playerBank -= countHundred;
    document.querySelector('#bet-amount').textContent = (betAmount);
    document.querySelector('#player-bank').textContent = (playerBank);
}

// RESULTS

class results {
    constructor( betAmount, playerBank) {
        this.betAmount = betAmount;
        this.playerBank = playerBank;
        this.nameA = nameA
        this.nameB = nameB
        this.nameC = nameC
    }

    result() {
        if ((this.nameA == this.nameB && this.nameA == this.nameC)) {
            document.querySelector('#heading-msg').textContent = ('You Win the Big Bucks!');
            playerBank = this.playerBank + (this.betAmount * 10);
            document.getElementById('player-bank').textContent = playerBank;
            this.betAmount = 0;
            betAmount = this.betAmount; 

        } else if ((this.nameA == this.nameB || this.nameA == this.nameC) || (this.nameB == this.nameC)) {
            document.querySelector('#heading-msg').textContent = ('You Won Some Money!');
            playerBank = this.playerBank + (this.betAmount * 2);
            document.getElementById('player-bank').textContent = playerBank;
            this.betAmount = 0;
            betAmount = this.betAmount;
            document.getElementById('bet-amount').textContent = (this.betAmount);
            
        } else {
            document.querySelector('#heading-msg').textContent = ('You Lost Your Bet');
            this.betAmount = 0;
            betAmount = this.betAmount;
            playerBank = this.playerBank;
            document.getElementById('bet-amount').textContent = (this.betAmount);

            if (playerBank <= 0) {
                document.querySelector('#heading-msg').textContent = ('YOU LOST ALL YOUR MONEY!');
        }
        }
    }
}


