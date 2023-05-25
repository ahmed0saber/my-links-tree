const quickMessageForm = document.querySelector(".quick-message-form")
const quickMessageTextarea = document.querySelector(".quick-message-form textarea")
const quickMessageDate = document.querySelector(".quick-message-form input")

quickMessageForm.addEventListener("submit", (e) => {
    e.preventDefault()
    quickMessageDate.value = new Date()
    sendMessageToMyEmail()
});

(function() {
    emailjs.init('lh0KP7BcJIN6ZsGFY');
})();

const sendMessageToMyEmail = () => {
    emailjs.sendForm('service_268ugfd', 'template_jbt72ld', quickMessageForm)
    .then(function() {
        quickMessageTextarea.value = ""
        Swal.fire(
            'Your message has been sent successfully.',
            '',
            'success'
        )
    }, function() {
        Swal.fire(
            'Something went wrong, please try again later, or contact me on any platform of these ones mentioned below',
            '',
            'error'
        )
    });
}
