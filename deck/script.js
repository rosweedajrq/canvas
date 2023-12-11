const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

const canvas = document.getElementById('cardCanvas');
const ctx = canvas.getContext('2d');

function drawCard(x, y, suit, rank) {
    ctx.beginPath();
    ctx.rect(x, y, 100, 160);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();

    ctx.font = '14px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`${rank} of ${suit}`, x + 10, y + 40);
}

function drawDeck() {
    let x = 10;
    let y = 10;

    for (const suit of suits) {
        for (const rank of ranks) {
            drawCard(x, y, suit, rank);
            x += 60;
        }
        x = 10;
        y += 100;
    }
}

drawDeck();
