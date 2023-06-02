
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('Qli_SeLXTcrpI64tl');
})();

window.onload = function() {
    document.getElementById("contact-form").reset();
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // these IDs from the previous steps
        emailjs.sendForm('service_rwf6ign', 'template_iizwdpx', this)
            .then(function() {
                console.log('SUCCESS!');
                
                document.getElementById("frm-button").value = 'Successfully sent';
                
                setTimeout(function() {
                    document.getElementById("frm-button").value = 'Send';
                }, 2000);
                
            }, function(error) {
                console.log('FAILED...', error);
            });
    document.getElementById("contact-form").reset();
    });
}