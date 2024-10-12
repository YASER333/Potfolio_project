/************  js ************/

function sendMail(event) {
    event.preventDefault(); // Prevents page reload on form submission
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_tgg90jk", "template_hx0k04a", parms)
        .then(function (response) {
            alert("Email sent successfully!");
        })
        .catch(function (error) {
            alert("Failed to send email. Error: " + error);
       });
 }