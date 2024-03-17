


document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('active');
        button.textContent = content.classList.contains('active') ? 'Hide Details' : 'View Details';
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const testimonialSection = document.querySelector('.testimonial-section');
    const testimonials = document.querySelectorAll('.testimonial');

    testimonialSection.addEventListener('mouseenter', () => {
        testimonials.forEach(testimonial => {
            testimonial.classList.add('animate');
        });
    });

    testimonialSection.addEventListener('mouseleave', () => {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('animate');
        });
    });
});


window.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about-section');
    const aboutText = document.querySelector('.about-text');

    aboutSection.addEventListener('mouseenter', () => {
        aboutText.classList.add('animate');
    });

    aboutSection.addEventListener('mouseleave', () => {
        aboutText.classList.remove('animate');
    });

    const detailsButtons = document.querySelectorAll('.details-btn');
    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.classList.toggle('active');
            button.textContent = content.classList.contains('active') ? 'Hide Details' : 'View Details';
        });
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const testimonialSection = document.querySelector('.testimonial-section');
    const testimonials = document.querySelectorAll('.testimonial');

    testimonialSection.addEventListener('mouseenter', () => {
        testimonials.forEach(testimonial => {
            testimonial.classList.add('animate');
        });
    });

    testimonialSection.addEventListener('mouseleave', () => {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('animate');
        });
    });
});
window.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.skill-slider');
    sliders.forEach(slider => {
        const valueDisplay = slider.nextElementSibling;
        valueDisplay.textContent = slider.value + '%';
        slider.addEventListener('input', () => {
            valueDisplay.textContent = slider.value + '%';
        });
    });
});
