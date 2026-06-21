// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navbar effect
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,.75)";
        header.style.backdropFilter = "blur(20px)";

    }else{

        header.style.background = "rgba(0,0,0,.25)";
        header.style.backdropFilter = "blur(14px)";
    }

});

// Scroll reveal animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});
const video = document.getElementById("bgVideo");
const btn = document.getElementById("videoBtn");

btn.addEventListener("click", () => {

    if(video.paused){

        video.play();

        btn.innerHTML = "❚❚";

    }else{

        video.pause();

        btn.innerHTML = "▶";

    }

});

video.addEventListener("ended",()=>{

    btn.innerHTML="▶";

});