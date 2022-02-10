const form = document.getElementById("myform");
const firstname = document.getElementById("FirstName");
const lastname = document.getElementById("LastName");
const email = document.getElementById("Email");
const phone = document.getElementById("Phone");
const username = document.getElementById("Username");
const password = document.getElementById("Password");
const address = document.getElementById("Address");
const city = document.getElementById("City");
const state = document.getElementById("StateId");
const country = document.getElementById("CountryId");
const zipcode = document.getElementById("Zipcode");


form.addEventListener("submit", event => {
  event.preventDefault();
  
  validateInputs();
});

const setError = (element, message); {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector("warning");
  
  errorDisplay.innerText = message;
  inputControl.classList.add("warning");
}

const validateInputs = (); {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();;
  const stateValue = state.value.trim();
  const countryValue = country.value.trim();
  const zipcodeValue = zipcode.value.trim();
  
  var atpos = emailValue.indexOf("@");
  var dotpos = emailValue.lastIndexOf(".");
  var numbers= /(^[0-9]+[-]*[0-9]+[-]*[0-9]+$)/;
  var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{1,7}$/;

  if (firstnameValue === "" || firstnameValue.length > 20) {
    setError(firstname, "First name is required and cannot be greater than 20 characters");
  }
  else if (firstnameValue.match("^[a-zA-Z ,.'-]+$")===null) {
    setError(firstname, "Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)");
  }
  
  
  if (lastnameValue === "" || lastnameValue.length > 50) {
    setError(lastname, "Last name is required and cannot be greater than 50 characters");
  }
  else if (lastnameValue.match("^[a-zA-Z ,.'-]+$")===null) {
    setError(lastname, "Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)");
  } 
  
  
  if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= emailValue.length) {
    setError(email, "Invalid email");
  }
  
  
  if (phoneValue === "" || phoneValue.length > 15 || 
      !phoneValue.match(numbers)) {
    setError(phone, "Invalid phone number");
  }
  
  
  if (usernameValue === null || usernameValue === "" || usernameValue.length > 12) {
    setError(username, "Username is required and cannot be greater than 12 characters");
  }
  
  
  if (passwordValue.length > 7 || !pattern.test(passwordValue)) {
    setError(password, "Password is required and cannot be greater than 7 characters. Password requires 1 upper-case, 1 lower-case, 1 numeric, 1 special character");                  
  }
  
  
  if (addressValue === null || addressValue === "") {
    setError(address, "Address is required!");
  }
  
  
  if (cityValue === null || cityValue === "") {
    setError(city, "City is required!");
  }
  
  
  if (stateValue === "0") {
    setError(state, "State is required!");
  }
  
  
  if (countryValue === "0") {
    setError(country, "Country is required!");
  }
  
  
  if (countryValue === "USA" && (zipcodeValue.length != 5 || isNaN(zipcodeValue))) {
    setError(zipcode, "Zip Code is required in USA and must have 5 digits");
  }
}
