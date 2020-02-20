
// validateRadio functions checks that radio button is checked or not 
function validateRadio(){
    var a = document.forms.rate
    var result = 0
    for(i=0;i<a.length; i++){
        if(a[i].checked == true){result = result +1;}
    }
    if(result>0){return false;}
    return true
}

// validateRadio functions checks that terms and condition checkbox is checked or not.
function validateCheckBox(){
    if (document.forms.tc.checked == false){
        return true;
    }
    else{
         return false;
    }
}

// validate methods check that username , email ,course name are entered or not.
function validate(){

    var username = document.getElementById("name");
    var email = document.getElementById("email");
    var course_name = document.getElementById("course");

    if (username.value == "" ){
        alert("Username can't be empty");
    }
    else if (email.value == "" ){
        alert("Email can't be empty");
    }
    else if (course_name.value == "" ){
        alert("Course Name can't be empty");
    }
    else if(validateRadio()){ // calling validateRadio function 
        alert("Rate the course");
    }
    else if(validateCheckBox()){// calling validateCheckBox function 
        alert ("Accept the terms and conditions");
    }
    else{
        alert("Form submitted successfully");
    }

}