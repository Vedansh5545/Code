// Toggle theme and background images
document.querySelector('.theme-toggle').addEventListener('click', () => {
    const heroSection = document.getElementById('hero-section');
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        heroSection.style.backgroundImage = "url('/image/HeroDarkbg.webp')";
    } else {
        heroSection.style.backgroundImage = "url('/image/herolightbg.webp')";
    }
});

// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
