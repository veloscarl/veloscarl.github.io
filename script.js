document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section');

    function handleNavClick(event) {
        event.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId); 
        sections.forEach(section => section.classList.remove('visible'));
        targetSection.classList.add('visible');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    navLinks.forEach(link => link.addEventListener('click', handleNavClick));
});
