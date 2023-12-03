//For the sign-up button

const signUpButton = document.getElementById("sign-up-button");

signUpButton.onclick = function () {
  document.getElementById("sign-up-message").style.display = "block";
  signUpButton.innerHTML = "Submit Email";
};

//For the contact form section
const submitButton = document.getElementById("submit");

submitButton.onclick = function() {
    document.getElementById('contact').innerHTML = 'Thank you for your message! We will be in touch shortly.'
}