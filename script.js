const modeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        modeBtn.innerHTML = "☀️ Light Mode";
    } else {
        modeBtn.innerHTML = "🌙 Dark Mode";
    }
});


const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const words = [
    "Front-End Web Developer",
    "HTML Developer",
    "CSS Enthusiast",
    "JavaScript Learner"
];

let wordIndex = 0;
let charIndex = 0;
const typing = document.getElementById("typing");

typing.textContent = "";

function typeWord() {
    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
        typing.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        setTimeout(typeWord, 120);
    } else {
        setTimeout(eraseWord, 1800);
    }
}

function eraseWord() {
    if (charIndex > 0) {
        typing.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;

        setTimeout(eraseWord, 70);
    } else {
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(typeWord, 400);
    }
}

typeWord();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const progressBars = document.querySelectorAll(".progress-bar");

function animateBars() {
    progressBars.forEach(bar => {
        const skillSection = document.getElementById("skills");
        const rect = skillSection.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            bar.style.width = bar.getAttribute("data-width") + "%";
        }
    });
}

window.addEventListener("scroll", animateBars);
window.addEventListener("load", animateBars);


const burger = document.getElementById("burger");
const navLinksList = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    navLinksList.classList.toggle("show");
});

navLinksList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinksList.classList.remove("show");
    });
});

function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you for your message! I'll get back to you soon.");

    e.target.reset();

    return false;
}