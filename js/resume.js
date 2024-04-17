document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.getElementById('contactLink');
    const resumeLink = document.getElementById('resumeLink');

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        toggleContactSection();
    });

    resumeLink.addEventListener('click', function(event) {
        event.preventDefault();
        downloadResume();
    });
});

function toggleContactSection() {
    const contactSection = document.getElementById('contactSection');
    if (contactSection.style.display === 'none') {
        contactSection.style.display = 'block';
    } else {
        contactSection.style.display = 'none';
    }
}

function downloadResume() {
    // Replace the placeholder URL with the actual URL of your resume PDF file
    const resumeUrl = './Abhishek V.pdf';
    window.open(resumeUrl, '_blank');
}
