
function submit(){
    var input1 = document.getElementById("noun1").value;
    var input2 = document.getElementById("noun2").value;
    var input3 = document.getElementById("noun3").value;
    var input4 = document.getElementById("noun4").value;
    if(input1.length < 1 || input2.length < 1 || input3.length < 1 || input4.length < 1){
        document.getElementById("inputError").innerHTML="You must complete all fields first";
        document.getElementById("inputError").classList.remove("hidden-message");
        document.getElementById("inputError").classList.add("shown-message");
    }
    else{
      setCookie("n1", input1, 1);
      setCookie("n2", input2, 1);
      setCookie("n3", input3, 1);
      setCookie("n4", input4, 1);
      console.log(getCookie("n1"));
      console.log(getCookie("n2"));
      console.log(getCookie("n3"));
      console.log(getCookie("n4"));
    }
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
