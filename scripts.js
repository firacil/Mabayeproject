document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll('.section');
    var currentSectionIndex = 0;

    function showSection(index) {
        sections[currentSectionIndex].classList.remove('active');
        currentSectionIndex = index;
        sections[currentSectionIndex].classList.add('active');
    }

    function showNextSection() {
        if (currentSectionIndex < sections.length - 1) {
            showSection(currentSectionIndex + 1);
        }
    }

    // Initial animation
    setTimeout(showNextSection, 500);

    // Subsequent animations
    sections.forEach(function(section, index) {
        section.addEventListener('transitionend', function() {
            setTimeout(showNextSection, 500);
        });
    });
});
