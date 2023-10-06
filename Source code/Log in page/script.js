function validateCredentials() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var validEmail = "sujal@gmail.com"; // Replace with your specific email
    var validPassword = "123"; // Replace with your specific password

    if (email === validEmail && password === validPassword) {
        // alert('Correct credentials. Redirecting to content...');
        return true;
    } else {
        alert('Sorry, incorrect credentials. Please try again.');
        return false;
    }
}