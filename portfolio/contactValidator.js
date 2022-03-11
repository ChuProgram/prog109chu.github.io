function isValid() {
  if (firstName() && lastName() && email()){
    document.getElementById("SubmitSuccess").innerHTML = "<p><strong>Submitted Successfully!</strong></p>";
    return true;
  }
  else {
    document.getElementById("SubmitError").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
    event.preventDefault();
    return false;
  }
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
  // Create variable
  var validFirstname=false;
  var errorMessages = "";

  // Read value from HTML
  var firstname = document.getElementById("FirstName").value;
  
  // Validation
  if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
      errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
      console.log("First name invalid — length")
    
  } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
      errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
      console.log("First name invalid — bad characters")
      
  } else {
      validFirstname = true;
      console.log("First name valid")
  }

  // Send error message to HTML
  document.getElementById("FirstNameError").innerHTML = errorMessages;

  // Return status of each field
  return (validFirstname);
}


LastName.addEventListener('blur', lastName, false);
function lastName(){
  // Create variable
  var validLastname=false;
  var errorMessages = "";

  // Read value from HTML
  var lastname = document.getElementById("LastName").value;

  // Validation
  if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
      errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
      console.log("Last name invalid — length")
    
  } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
      errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
      console.log("Last name invalid — bad characters")
            
  } else {
      validLastname = true;
      console.log("Last name valid")
  }

  // Send error message to HTML
  document.getElementById("LastNameError").innerHTML = errorMessages;

  // Return status of each field
  return (validLastname);
}


Email.addEventListener('blur', email, false);
function email(){
  // Create variable
  var validEmail=false;
  var errorMessages = "";

  // Read value from HTML
  var userEmail = document.getElementById("Email").value;
  
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

var d = new Date();
document.getElementById("time").innerHTML = d;
