const submitBtn = document.querySelector("button[type=submit]");

function handleSubmit(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    if (!name || !email || !message) {
        return;
    }
    try {
        const params = {
            name: name,
            email: email,
            message: message
        };
        // From EmailJS javascript file
        emailjs.send(
            "service_4rcpgv4",
            "template_14rhh8j",
            params,
            "M9tSCPzBP0Ke8cfCo"
        );
        const sentMsg = document.querySelector(".sent-message");
        sentMsg.style.opacity = "1";
        setTimeout(() => (sentMsg.style.opacity = 0), 5000);
        e.target.parentElement.reset();
    } catch (error) {
        alert("There was an error sending your message.");
    }
}

submitBtn.addEventListener("click", e => handleSubmit(e));

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slider");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px"
};
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

const projectLinks = document.querySelectorAll(".project-link");

window.addEventListener("resize", e => {
    if (
        window.innerWidth < 1200 &&
        document.querySelectorAll(".desktop").length > 0
    ) {
        const descriptions = document.querySelectorAll(".desktop");
        descriptions.forEach(description => {
            description.classList.remove("desktop");
            description.classList.add("mobile");
            description.parentElement.append(description);
        });
    } else if (
        window.innerWidth > 1200 &&
        document.querySelectorAll(".mobile").length > 0
    ) {
        const descriptions = document.querySelectorAll(".mobile");
        descriptions.forEach(description => {
            description.classList.remove("mobile");
            description.classList.add("desktop");
            description.parentElement.insertBefore(
                description,
                description.previousElementSibling
            );
        });
    }
});
