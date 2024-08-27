function getComputerChoice() {
    getNumber = Math.floor(Math.random()* 3);
    console.log(getNumber)
    if (getNumber === 1) {
        return "Rock"
    }
    else if (getNumber === 2) {
        return "Paper"
    }
    else {
        return "Scissors"
    }


}

console.log(getComputerChoice())