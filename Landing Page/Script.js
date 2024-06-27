function validation(){
    if(document.Formfill.FullName.value=="" ){
        document.getElementById("result").innerHTML="Enter Full Name*";
        return false;
    }
    else if(document.Formfill.FullName.value.length<=3){
        document.getElementById("result").innerHTML="Enter Correct  Name*";
        return false;
}

 else if(document.Formfill.Password.value=="" ){
    document.getElementById("result").innerHTML="Enter Your Password*";
    return false;

}

else if(document.Formfill.cPassword.value.length<8){
    document.getElementById("result").innerHTML="Password must be 8-digits*";
    return false;
}

else if(document.Formfill.cPassword.value==""){
    document.getElementById("result").innerHTML="Enter Confirm password*";
    return false;
}

else if(document.Formfill.cPassword.value!==document.Formfill.Password.value){
    document.getElementById("result").innerHTML="Password not match*";
    return false;

}
else if(document.Formfill.Password.value == document.Formfill.cPassword.value){
    popup.classList.add("open-slide")
    return false;

}

}
var popup=document.getElementById('popup');
function closeSlide(){
    popup.classList.remove("open-slide")
}