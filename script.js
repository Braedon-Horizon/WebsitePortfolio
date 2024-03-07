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
