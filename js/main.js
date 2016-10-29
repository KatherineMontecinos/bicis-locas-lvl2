function validateForm(){
    var inputname = document.getElementById("name").value;
    var inputlastname = document.getElementById("lastname").value;
    var inputemail = document.getElementById("input-email").value;
    var inputpassword = document.getElementById("input-password").value;
    var listabici = document.querySelector("select").value;
    if( inputname == null || inputname.length == 0 || /^\s+$/.test(inputname) || /^[a-zA-Z]*$/.test(inputname) == false || inputname.charAt(0).toUpperCase() !== inputname.charAt(0) ) {
        alert("Debe ingresar un nombre válido (debe comenzar con mayúscula y solo contenga letras)");
        return false;
    }
    else if( inputlastname == null || inputlastname.length == 0 || /^\s+$/.test(inputlastname) || /^[a-zA-Z]*$/.test(inputlastname) == false ||  inputlastname.charAt(0).toUpperCase() !== inputname.charAt(0)) {
        alert("Debe ingresar un apellido( debe comenzar con mayúscula y solo contenga letras)");
        return false;
    }
    else if( inputemail == null || inputemail.length == 0 || /^\s+$/.test(inputemail) || /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/.test(inputemail) == false ) {
        alert("Debe ingresar un email valido");
        return false;
    }
    else if( inputpassword == null || inputpassword  == 0 || /^\s+$/.test(inputpassword) || inputpassword.length < 6 || /123456/.test(inputpassword) == true || /098754/.test(inputpassword) || /password/.test(inputpassword)) {
        alert("Debe ingresar un password valido");
        return false;
    }
    else if( listabici == 0 ){
        alert("Debes seleccionar una opción");
        return false;
    }
    return true;
}
}