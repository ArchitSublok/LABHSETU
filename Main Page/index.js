AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });

        // Suble Mouse Parallax for Hero
        document.addEventListener("mousemove", function(e) {
            const moveX = (e.clientX * -0.01);
            const moveY = (e.clientY * -0.01);
            document.querySelector('.hero').style.backgroundPosition = `${moveX}px ${moveY}px`;
        });