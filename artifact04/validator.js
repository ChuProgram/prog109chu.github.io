function isValid() {
  if (firstName() && lastName() && email() && phone() && username() &&
     password() && address() && city() && state() && country() && zipcode()){
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
  //1) Create variable
  var validFirstname=false;
  var errorMessages = "";

  //2) read value from HTML
  var firstname = document.getElementById("FirstName").value;

  //3) Do validation
  if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
      errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
      console.log("First name invalid — length")
      document.getElementById("FirstName").focus();
      document.getElementById("FirstName").select();
        
  } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
    errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
    console.log("First name invalid — bad characters")
    document.getElementById("FirstName").focus();
    document.getElementById("FirstName").select();
            
  } else {
    validFirstname = true;
    console.log("First name valid")
  }

  //4) Send error message to HTML
  document.getElementById("FirstNameError").innerHTML = errorMessages;

  //5) return status of each field
  return (validFirstname);
}


LastName.addEventListener('blur', lastName, false);
function lastName(){
  //1) Create variable
  var validLastname=false;
  var errorMessages = "";

  //2) read value from HTML
  var lastname = document.getElementById("LastName").value;

  //3) Do validation
  if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
      errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
      console.log("Last name invalid — length")
      document.getElementById("LastName").focus();
      document.getElementById("LastName").select();
        
  } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
    errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
    console.log("Last name invalid — bad characters")
    document.getElementById("LastName").focus();
    document.getElementById("LastName").select();
            
  } else {
    validLastname = true;
    console.log("Last name valid")
  }

  //4) Send error message to HTML
  document.getElementById("LastNameError").innerHTML = errorMessages;

  //5) return status of each field
  return (validLastname);
}


Email.addEventListener('blur', email, false);
function email(){
  //1) Create variable
  var validEmail=false;
  var errorMessages = "";

  //2) read value from HTML
  var userEmail = document.getElementById("Email").value;
  
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  //3) Do validation
  
  if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= userEmail.length) {
    errorMessages = "<p>Invalid email</p>";
    console.log("Invalid Email")
    
      document.getElementById("LastName").select();
  } 
  
  else {
    validEmail = true; 
    console.log("Valid Email")
  }
  
  //4) Send error message to HTML
  document.getElementById("EmailError").innerHTML = errorMessages;

  //5) return status of each field
  return (validEmail);
}


Phone.addEventListener('blur', phone, false);
function phone(){
  //1) Create variable
  var validPhone=false;
  var errorMessages = "";
  
  var numbers= /(^[0-9]+[-]*[0-9]+[-]*[0-9]+$)/;

  //2) read value from HTML
  var userPhone = document.getElementById("Phone").value;

  //3) Do validation
  if (userPhone===null || userPhone ==="" || userPhone.length > 15 || 
      !userPhone.match(numbers)) {
    errorMessages = "<p>Invalid phone number </p>";
    console.log("Invalid Phone")
  }
  
  else {
    validPhone = true;
    console.log("Valid Phone")
  }
  
  //4) Send error message to HTML
  document.getElementById("PhoneError").innerHTML = errorMessages;

  //5) return status of each field
  return (validPhone);
}


Username.addEventListener('blur', username, false);
function username(){
  //1) Create variable
  var validUsername=false;
  var errorMessages = "";

  //2) read value from HTML
  var userID = document.getElementById("Username").value;

  //3) Do validation
  if (userID===null || userID ==="" || userID.length > 12) {
    errorMessages = "<p>Username is required and cannot be greater than 12 characters </p>";
    console.log("Invalid Username")
  }
  
  else {
    validUsername = true;
    console.log("Valid Username")
  }
  
  //4) Send error message to HTML
  document.getElementById("UsernameError").innerHTML = errorMessages;

  //5) return status of each field
  return (validUsername);
}


Password.addEventListener('blur', password, false);
function password(){
  //1) Create variable
  var validPassword=false;
  var errorMessages = "";
  
  var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{1,7}$/;

  //2) read value from HTML
  var userPassword = document.getElementById("Password").value;

  //3) Do validation
  if (userPassword.length > 7 || !pattern.test(userPassword)) {
    errorMessages = "<p>Password is required and cannot be greater than 7 characters. Password requires 1 upper-case, 1 lower-case, 1 numeric, 1 special character</p>";
    console.log("Invalid Password")
  }
  else {
    validPassword = true;
    console.log("Valid Password")
  }
  
  //4) Send error message to HTML
  document.getElementById("PasswordError").innerHTML = errorMessages;

  //5) return status of each field
  return (validPassword);
}


Address.addEventListener('blur', address, false);
function address(){
  //1) Create variable
  var validAddress=false;
  var errorMessages = "";

  //2) read value from HTML
  var userAddress = document.getElementById("Address").value;

  //3) Do validation
  if (userAddress===null || userAddress ==="") {
    errorMessages = "<p>Address is required!</p>";
    console.log("Invalid Address")
  }
  
  else {
    validAddress = true;
    console.log("Valid Address")
  }
  
  //4) Send error message to HTML
  document.getElementById("AddressError").innerHTML = errorMessages;

  //5) return status of each field
  return (validAddress);
}


City.addEventListener('blur', city, false);
function city(){
  //1) Create variable
  var validCity=false;
  var errorMessages = "";

  //2) read value from HTML
  var userCity = document.getElementById("City").value;

  //3) Do validation
  if (userCity===null || userCity ==="") {
    errorMessages = "<p>City is required!</p>";
    console.log("Invalid City")
  }
  
  else {
    validCity = true;
    console.log("Valid City")
  }
  
  //4) Send error message to HTML
  document.getElementById("CityError").innerHTML = errorMessages;

  //5) return status of each field
  return (validCity);
}


State.addEventListener('blur', state, false);
function state(){
  //1) Create variable
  var validState=false;
  var errorMessages = "";

  //2) read value from HTML
  var userState = document.getElementById("StateId").value;

  //3) Do validation
  if (userState == "0") {
    errorMessages = "<p>State is required!</p>";
    console.log("Invalid State")
  }
  
  else {
    validState = true;
    console.log("Valid State")
  }
  
  //4) Send error message to HTML
  document.getElementById("StateError").innerHTML = errorMessages;

  //5) return status of each field
  return (validState);
}


Country.addEventListener('blur', country, false);
function country(){
  //1) Create variable
  var validCountry=false;
  var errorMessages = "";

  //2) read value from HTML
  var userCountry = document.getElementById("CountryId").value;

  //3) Do validation
  if (userCountry == "0") {
    errorMessages = "<p>Country is required!</p>";
    console.log("Invalid Country")
  }
  
  else {
    validCountry = true;
    console.log("Valid Country")
  }
  
  //4) Send error message to HTML
  document.getElementById("CountryError").innerHTML = errorMessages;

  //5) return status of each field
  return (validCountry);
}


Zipcode.addEventListener('blur', zipcode, false);
function zipcode(){
  //1) Create variable
  var validZipcode=false;
  var errorMessages = "";
  var country = document.getElementById("CountryId").value;
  
  //2) read value from HTML
  var userZipcode = document.getElementById("Zipcode").value;

  //3) Do validation
  if (country === "USA" && (userZipcode.length != 5 || isNaN(userZipcode))) {
    errorMessages="<p>Zip Code is required in USA and must have 5 digits</p>"
    console.log("Invalid Zip Code")
  }
  else {
    validZipcode = true
    console.log("Valid Zipcode")
  }
  
  //4) Send error message to HTML
  document.getElementById("ZipcodeError").innerHTML = errorMessages;

  //5) return status of each field
  return (validZipcode);
}

