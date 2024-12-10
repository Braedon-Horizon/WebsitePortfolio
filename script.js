// Custom Cursor Effect
document.addEventListener('mousemove', function(e) {
    let cursor = document.querySelector('.cursor');
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.classList.add('cursor');
        document.body.appendChild(cursor);
    }
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Particle Effect on Buttons
let buttons = document.querySelectorAll('.hero-button, .feature-button');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        createParticles(e.pageX, e.pageY);
    });
});

function createParticles(x, y) {
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        let particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        let angle = Math.random() * 2 * Math.PI;
        let speed = Math.random() * 5 + 2;
        particle.style.transform = `translate(${Math.cos(angle) * speed}px, ${Math.sin(angle) * speed}px)`;
        particle.style.opacity = '1';
        particle.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
        setTimeout(() => {
            particle.style.transform += ' scale(0)';
            particle.style.opacity = '0';
        }, 10);
        setTimeout(() => {
            particle.remove();
        }, 510);
    }
}

// Flip Animation for Employee Cards
const employeeCards = document.querySelectorAll('.employee-card');
employeeCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});