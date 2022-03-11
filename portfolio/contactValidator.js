function isValid() {
  if (userName() && email()){
    document.getElementById("SubmitSuccess").innerHTML = "<p><strong>Submitted Successfully!</strong></p>";
    return true;
  }
  else {
    document.getElementById("SubmitError").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
    event.preventDefault();
    return false;
  }
}

Name.addEventListener('blur', userName, false);
function userName() {
  // Create variable
  var validName = false;
  var errorMessages = "";
  
  // Read value from HTML
  var username = document.getElementById("name").value;
  
  // Validation
  if (username === "null" || username === "" || username.length > 50) {
    errorMessages += "<p>The name is required and cannot be greater than 50 characters</p>";
  } 
  
  else if (username.match("^[a-zA-Z ,.'-]+$") === null) {
    errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
  }
  
  else {
    validFirstname = true;
    console.log("First name valid")
  }
  
  // Send error messages to HTML
  document.getElementById("NameError").innerHTML = errorMessages;
  
  // Return status of each field
  return (validName);
}


Email.addEventListener('blur', email, false);
function email(){
  // Create variable
  var validEmail=false;
  var errorMessages = "";

  // Read value from HTML
  var userEmail = document.getElementById("email").value;
  
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  
  // Validation
  if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= userEmail.length) {
    errorMessages = "<p>Invalid email</p>";
  } 
  
  else {
    validEmail = true; 
  }
  
  // Send error message to HTML
  document.getElementById("EmailError").innerHTML = errorMessages;

  // Return status of each field
  return (validEmail);
}
