// Memory Game

// Initialize classes annd ID's
const cards = document.querySelectorAll(".card-item")
const startButton = document.getElementById('start-button')
const resetButton = document.getElementById('reset-button')

startButton.addEventListener("click", shuffleCards);
resetButton.addEventListener("click", shuffleCards);

// Shuffle Cards
// Shuffling code function taken from the Marina Ferreira tutorial https://youtu.be/NGtx3EBlpNE?feature=shared and customized to make it work for 24 cards.
function shuffleCards() {
    cards.forEach(card => {
        let randomCardOrder = Math.floor(Math.random() * 24);
        card.style.order = randomCardOrder;
        card.classList.remove('flip-item', 'matched-cards');
    })
}

// Start Game
function startGame() {
    shuffleCards();
}

// Reset Game
function resetGame() {
    shuffledCards();
}

// Flip Card
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.add('flip-item');
    })
    // Check two matching cards
    card.addEventListener("click", () => {
        const flipItems = document.querySelectorAll('.flip-item');
        if (flipItems.length === 2) {
            const firstCard = flipItems[0];
            const secondCard = flipItems[1];
            // Matched card
            if (firstCard.dataset.name === secondCard.dataset.name) {
                firstCard.classList.add('matched-cards');
                secondCard.classList.add('matched-cards');
            }
            //Unflip not matching cards
            setTimeout(() => {
                flipItems.forEach(card => {
                    card.classList.remove('flip-item');
                });
            }, 500);
        }
    })
});

// Function to end game 
function endGame() {
    // Reset to original game state with the cards turned back over again
    setTimeout(() => {
        resetGame();
    }, 1000);
};

// Timer in the game function
// function startGameTimer() {}