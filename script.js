gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".driver-details").forEach((player, index) => {
    gsap.from(player, {
        opacity: 0,
        x: index % 2 === 0 ? -200 : 200, // Odd index (left: -200px), Even index (right: 200px)
        duration: 1,
        scrollTrigger: {
            trigger: player,
            start: "top 80%",
            toggleActions: "play none none reverse",
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let container = document.querySelector(".drivers-container");
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener("mouseleave", () => {
        isDown = false;
    });

    container.addEventListener("mouseup", () => {
        isDown = false;
    });

    container.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Speed up scrolling
        container.scrollLeft = scrollLeft - walk;
    });
});
