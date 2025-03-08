// Wait for the page to load
window.onload = () => {
    gsap.to(".fade-in", { opacity: 1, duration: 1 });
    gsap.to(".slide-up", { opacity: 1, y: 0, duration: 1, delay: 0.5 });

    // Parallax Effect
    gsap.to(".parallax-image", {
        y: -100,
        scale: 1.2,
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Fade-in effects on scroll
    gsap.utils.toArray(".column").forEach((col, index) => {
        gsap.from(col, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.3,
            scrollTrigger: {
                trigger: col,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
};
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        loop: true, // Infinite loop
        autoplay: {
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: "fade", // Smooth fade transition
    });
});
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Sections Zoom-In Effect
    gsap.utils.toArray("section").forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Navbar Background Change on Scroll
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

