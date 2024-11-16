
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    const observerCallback = function (entries, observer) {
        entries.forEach(entry => {
            const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (entry.isIntersecting) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select all "View More" buttons
    const viewMoreButtons = document.querySelectorAll('.view-more-btn');
    
    // Loop through each button and add a click event listener
    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the parent .project div
            const project = this.closest('.project');
            
            // Find the .project-summary inside this project
            const summary = project.querySelector('.project-summary');
            
            // Toggle the visibility of the project summary
            summary.classList.toggle('active');
            
            // Change button text based on whether the summary is active or not
            if (summary.classList.contains('active')) {
                this.textContent = 'View Less'; // Change button to "View Less"
            } else {
                this.textContent = 'View More'; // Change button to "View More"
            }
        });
    });
});
