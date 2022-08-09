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
