
    let userPoints = 0;
    let compPoints = 0;
    
    // Get the elements
    let elements = Array.from(document.getElementsByClassName("imgDiv"));
    let res = document.getElementById("result");
    let userScoreElem = document.querySelector('.user');
    let compScoreElem = document.querySelector('.comp');

    elements.forEach(element => {
        element.onclick = () => {
            let userChoice = element.getAttribute('id');
            checked(userChoice);
        };
    });

    function checked(userChoice) {
        let computerChoice = findComChoice();
        console.log("Computer choice:", computerChoice);

        if (userChoice === computerChoice) {
            res.innerText = `It's a draw! Both chose ${userChoice}.`;
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "scissors" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "rock")
        ) {
            userPoints++;
            res.innerText = `You win! ${userChoice} beats ${computerChoice}.`;
        } else {
            compPoints++;
            res.innerText = `You lose! ${computerChoice} beats ${userChoice}.`;
        }

        // Update the score display
        userScoreElem.innerText = userPoints;
        compScoreElem.innerText = compPoints;
    }

    function findComChoice() {
        const arr = ["rock", "scissors", "paper"];
        let randomNumber = Math.floor(Math.random() * 3);
        return arr[randomNumber];
    }
