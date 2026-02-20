document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll('.Genshin2-pop');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2
    });

    targets.forEach(target => observer.observe(target));
});

document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2
    });

    targets.forEach(target => observer.observe(target));
});