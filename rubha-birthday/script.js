// ==================== PAGE NAVIGATION ====================

function navigateTo(page) {
    const currentPage = document.querySelector('.page');
    currentPage.style.animation = 'pageExit 0.6s ease-in forwards';
    
    setTimeout(() => {
        window.location.href = page;
    }, 600);
}

// Add page exit animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pageExit {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(30px);
        }
    }
`;
document.head.appendChild(style);

// ==================== ENVELOPE INTERACTION ====================

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letterPaper = document.getElementById('letterPaper');
    
    if (!envelope.classList.contains('opened')) {
        envelope.classList.add('opened');
        setTimeout(() => {
            letterPaper.classList.add('revealed');
        }, 400);
    }
}

// ==================== GIFT BOX INTERACTION ====================

function openGift() {
    const giftBox = document.getElementById('giftBox');
    
    if (!giftBox.classList.contains('opened')) {
        giftBox.classList.add('opened');
        createConfetti();
    }
}

// ==================== CONFETTI GENERATION ====================

function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#ff006e', '#9d4edd', '#3a86ff', '#ffb703', '#ff97cc', '#a7d8ff'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s ease-in forwards`;
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        container.appendChild(confetti);
    }
    
    setTimeout(() => {
        const confettiElements = container.querySelectorAll('.confetti');
        confettiElements.forEach(el => el.remove());
    }, 4500);
}

// Add confetti animation to style
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// ==================== CELEBRATION TRIGGER ====================

function triggerCelebration() {
    // Trigger confetti
    const celebrationConfetti = document.getElementById('celebrationConfetti');
    if (celebrationConfetti) {
        createCelebrationConfetti(celebrationConfetti);
    }
    
    // Animate celebrating pandas
    const pandas = document.querySelectorAll('.celebrating-panda');
    pandas.forEach(panda => {
        panda.classList.add('celebrate');
    });
    
    // Create additional celebration effects
    createCelebrationHearts();
}

function createCelebrationConfetti(container) {
    const colors = ['#ff006e', '#9d4edd', '#3a86ff', '#ffb703', '#ff97cc', '#a7d8ff', '#FFD700'];
    
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (5 + Math.random() * 8) + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animation = `confettiFall ${3 + Math.random() * 3}s ease-in forwards`;
        confetti.style.animationDelay = Math.random() * 0.8 + 's';
        
        container.appendChild(confetti);
    }
    
    setTimeout(() => {
        const confettiElements = container.querySelectorAll('.confetti');
        confettiElements.forEach(el => el.remove());
    }, 5000);
}

function createCelebrationHearts() {
    const container = document.querySelector('.background-wrapper') || document.body;
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '0';
        heart.style.fontSize = '2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '100';
        heart.style.animation = `heartRise ${3 + Math.random() * 2}s ease-out forwards`;
        heart.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5500);
    }
}

// Add celebration animations
const celebrationStyle = document.createElement('style');
celebrationStyle.textContent = `
    @keyframes heartRise {
        to {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(celebrationStyle);

// ==================== PAGE INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize page-specific interactions
    const currentPage = document.querySelector('.page');
    
    if (currentPage.classList.contains('letter-page')) {
        const envelope = document.getElementById('envelope');
        if (envelope) {
            envelope.addEventListener('click', openEnvelope);
        }
    }
    
    if (currentPage.classList.contains('gift-page')) {
        const giftBox = document.getElementById('giftBox');
        if (giftBox) {
            giftBox.addEventListener('click', openGift);
        }
    }
    
    if (currentPage.classList.contains('final-page')) {
        // Add stars and sparkle effects
        addFinalPageEffects();
    }
    
    // Prevent accidental navigation on touch devices
    document.addEventListener('touchstart', {passive: true}, e => {
        // Allow normal touch interactions
    });
});

// ==================== FINAL PAGE EFFECTS ====================

function addFinalPageEffects() {
    // Extra sparkle effects for final page
    const sparklesContainer = document.querySelector('.sparkles-container');
    
    if (sparklesContainer) {
        setInterval(() => {
            const newSparkle = document.createElement('div');
            newSparkle.className = 'sparkle';
            newSparkle.style.top = Math.random() * 100 + '%';
            newSparkle.style.left = Math.random() * 100 + '%';
            newSparkle.style.animation = 'sparkleFloat 4s ease-in-out forwards';
            
            sparklesContainer.appendChild(newSparkle);
            
            setTimeout(() => newSparkle.remove(), 4000);
        }, 800);
    }
}

// ==================== MOBILE OPTIMIZATION ====================

// Prevent double-tap zoom on buttons
document.addEventListener('touchend', (e) => {
    if (e.target.closest('.magic-button, .envelope, #giftBox')) {
        e.preventDefault();
    }
}, false);

// ==================== ACCESSIBILITY ====================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    const envelope = document.getElementById('envelope');
    const giftBox = document.getElementById('giftBox');
    
    if (e.key === 'Enter' || e.key === ' ') {
        if (document.activeElement === envelope) {
            openEnvelope();
        } else if (document.activeElement === giftBox) {
            openGift();
        }
    }
});

// ==================== PERFORMANCE OPTIMIZATION ====================

// Lazy load non-critical styles
window.addEventListener('load', () => {
    // Add any post-load optimizations here
    console.log('Birthday website loaded successfully! 🎉');
});

// ==================== ERROR HANDLING ====================

window.addEventListener('error', (e) => {
    console.error('Error:', e.error);
    // Gracefully handle errors without breaking the experience
});

// ==================== ANIMATION PERFORMANCE ====================

// Reduce animations on low-performance devices
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (mediaQuery.matches) {
    // Add class to body for reduced animations
    document.body.classList.add('reduce-motion');
    
    const style = document.createElement('style');
    style.textContent = `
        .reduce-motion * {
            animation-duration: 0.1s !important;
            transition-duration: 0.1s !important;
        }
    `;
    document.head.appendChild(style);
}

// ==================== MEMORY LEAK PREVENTION ====================

// Clean up event listeners on page navigation
window.addEventListener('beforeunload', () => {
    const envelope = document.getElementById('envelope');
    const giftBox = document.getElementById('giftBox');
    
    if (envelope) {
        envelope.removeEventListener('click', openEnvelope);
    }
    if (giftBox) {
        giftBox.removeEventListener('click', openGift);
    }
});
