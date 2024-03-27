// Create a new CSS animation
const animation = document.createElement('style');
animation.innerHTML = `
@keyframes coolAnimation {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

/* Apply the animation to an element */
.myElement {
    animation: coolAnimation 2s infinite;
}
`;

// Append the animation to the document head
document.head.appendChild(animation);
document.querySelector('.employee-card').classList.add('flip');
// Create a new CSS animation
const animation = document.createElement('style');
animation.innerHTML = `
@keyframes coolAnimation {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

/* Apply the animation to an element */
.myElement {
    animation: coolAnimation 2s infinite;
}
`;

// Append the animation to the document head
document.head.appendChild(animation);
document.querySelector('.employee-card').classList.add('flip');
let clickCount = 0;
const card = document.querySelector('cardSelector'); // replace 'cardSelector' with your actual card selector
const clickCountDisplay = document.getElementById('clickCountDisplay'); // get the click count display element

card.addEventListener('click', () => {
    clickCount++;
    if (clickCount >= 5) {
        card.classList.add('jiggle');
        setTimeout(() => card.classList.remove('jiggle'), 500);
        clickCount = 0;
    }
    // update the click count display
    clickCountDisplay.textContent = `${5 - clickCount} clicks until easter egg`;
    console.log(clickCount);
});
