

function sendEmail (){
    let parameters = {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        message:document.getElementById('message').value,
        subject:document.getElementById('subject').value
    }
    emailjs.sendForm('service_v1jqynv', 'template_x1i0b4n', parameters)
    .then(function() {
        alert('Message sent successfully!');
    }, function(error) {
        alert('Failed to send message. Please try again.');
    });

}


