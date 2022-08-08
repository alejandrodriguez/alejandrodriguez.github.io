const submitBtn = document.querySelector("button[type=submit]");

function handleSubmit(e) {
    e.preventDefault();
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    if (!name || !email || !message) {
        return;
    }
    const params = {
        name: name.value,
        email: email.value,
        message: message.value
    };
    // From EmailJS javascript file
    emailjs.send(
        "service_4rcpgv4",
        "template_14rhh8j",
        params,
        "M9tSCPzBP0Ke8cfCo"
    );
    e.target.parentElement.reset();
}

submitBtn.addEventListener("click", e => handleSubmit(e));
