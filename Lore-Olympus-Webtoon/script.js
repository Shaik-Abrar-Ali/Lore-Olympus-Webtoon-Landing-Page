function handleScrollAnimation() {
    const elements = document.querySelectorAll('.anim');
    
    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

// Listen for the scroll event
window.addEventListener('scroll', handleScrollAnimation);

// Run the function once to reveal any already-visible elements
handleScrollAnimation();
