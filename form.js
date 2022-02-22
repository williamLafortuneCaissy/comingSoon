const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = form.elements["email"]

    // @return {boolean}
    function validateEmail(input) {
        const emailValue = input.value.trim()

        if (!emailValue) return

        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(emailValue)) return

        return true
    }

    // @param {string || null} message
    function updateErrorMessage(message) {
        const messageDisplayer = document.getElementById("email__message")
        messageDisplayer.innerText = message || ""
    }

    // @param {boolean} error - true if we need to add the error class on the email  input
    function updateErrorClass(error) {
        emailWrapper = document.getElementById("email__wrapper")

        if (error && !emailWrapper.classList.contains("input__wrapper--error")) {
            emailWrapper.classList.add("input__wrapper--error")

        } else if (!error && emailWrapper.classList.contains("input__wrapper--error")) {
            emailWrapper.classList.remove("input__wrapper--error")
        }
    }



    if (validateEmail(email)) {
        updateErrorClass(false)
        updateErrorMessage()
        console.log("submit!")

    } else {
        updateErrorClass(true)
        updateErrorMessage("Please provide a valid email")
    }
})