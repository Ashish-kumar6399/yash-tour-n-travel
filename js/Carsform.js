document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Capture the form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        pickupLocation: document.getElementById("pickupLocation").value,
        dropLocation: document.getElementById("dropLocation").value,
        pickupTime: document.getElementById("pickupTime").value,
        date: document.getElementById("Date").value,
        carOption: document.getElementById("carOption").value
    };

    // Validate that the car selection is made
    if (formData.carOption === "") {
        alert("Please select a car option.");
        return;
    }

    // Use SMTP.js to send the email
    Email.send({
        Host: "smtp.elasticemail.com",
        Port: 2525,
        Username: "yashtourandtravels1@gmail.com", // Replace with your Elastic Email username
        Password: "A9DB6CC51DBD00D90DA6AE071BD408233444", // Replace with your Elastic Email SMTP password
        To: 'yashtourandtravels1@gmail.com', // Replace with the recipient's email
        From: "yashtourandtravels1@gmail.com", // Replace with your verified sender email
        Subject: `Booking Details for ${formData.name}`,
        Body: `
            <b>Name:</b> ${formData.name}<br/>
            <b>Email:</b> ${formData.email}<br/>
            <b>Mobile:</b> ${formData.mobile}<br/>
            <b>Pickup Location:</b> ${formData.pickupLocation}<br/>
            <b>Drop Location:</b> ${formData.dropLocation}<br/>
            <b>Pickup Time:</b> ${formData.pickupTime}<br/>
            <b>Date:</b> ${formData.date}<br/>
            <b>Car Option:</b> ${formData.carOption}
        `
    }).then(
        message => {
             alert(message);
        window.location.href = "/thankyou.html"; // Replace with your Thank You page URL
            // Reset the form fields after successful submission
            document.getElementById("myForm").reset();
        }
    ).catch(error => {
        console.error("Email sending error: ", error);
        alert("There was an error sending the email.");
    });
});
