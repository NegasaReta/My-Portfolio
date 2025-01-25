document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_v1jqynv', 'template_x1i0b4n', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again.');
        });
});

function sendEmail() {
    var form = document.getElementById('contact-form');

    emailjs.sendForm('service_v1jqynv', 'template_x1i0b4n', form)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again.');
        });
}
