// Jeff Vercruyssen
// Global variables
var m1 = "";
var m2 = "";
var m3 = "";
var m4 = "";
var m5 = "";

function submit(){
    //Check that all inputs contain something / Assign to global variables and generate story in hidden section of website
    var input1 = document.getElementById("noun1").value;
    var input2 = document.getElementById("noun2").value;
    var input3 = document.getElementById("verb1").value;
    var input4 = document.getElementById("verb2").value;
    var input5 = document.getElementById("adj1").value;
    if(input1.length < 1 || input2.length < 1 || input3.length < 1 || input4.length < 1 || input5.length <1){
        document.getElementById("inputError").innerHTML="You must complete all fields first";
        document.getElementById("inputError").classList.remove("hidden-message");
        document.getElementById("inputError").classList.add("shown-message");
    }
    else{
        setCookie("m1", input1, 1);
        setCookie("m2", input2, 1);
        setCookie("m3", input3, 1);
        setCookie("m4", input4, 1);
        setCookie("m5", input5, 1);
        console.log(getCookie("m1"));
        console.log(getCookie("m2"));
        console.log(getCookie("m3"));
        console.log(getCookie("m4"));
        console.log(getCookie("m5"));
    }
}

function loadVariables(){
      m1 = getCookie("m1");
      m2 = getCookie("m2");
      m3 = getCookie("m3");
      m4 = getCookie("m4");
      m5 = getCookie("m5");
      document.getElementById("story").innerHTML="There once was a " +
      <span style="color:red">m1</span> +
      " named Jeremy. He was best friends with a " +
      <span style="color:green">m2</span> + " named Jessica. Jeremy loved " +
      <span style="color:blue">m3</span> + " while Jessica loved " +
      <span style="color:purple">m4</span> + ". One day Jeremy attempted " +
      <span style="color:purple">m4</span> +
      " with Jessica, but was unable to keep up due to his " +
      <span style="color:orange">m5</span> + " " +
      <span style="color:red">m1</span> +
      " legs. Jessica attempted to convice Jeremy that it was okay that he was not good at " +
      <span style="color:purple">m4</span> + " as she was not very good at " +
      <span style="color:blue">m3</span> + " herself.";
      document.getElementById("story2").innerHTML="You have a pet " +
      <span style="color:red">m1</span> + ". Your pet " +
      <span style="color:red">m1</span> + " likes " +
      <span style="color:blue">m3</span> + " " + <span style="color:green">m2</span> +
      "s. You try " + <span style="color:purple">m4</span> + " your " +
      <span style="color:red">m1</span> + " to stop it from " +
      <span style="color:blue">m3</span> + " " + <span style="color:green">m2</span> +
      "s. The " + <span style="color:green">m2</span> +
      " ends up saving itself from your " + <span style="color:red">m1</span> +
      "'s " + <span style="color:blue">m3</span> + " by using its " +
      <span style="color:orange">m5</span> + " legs to escape.";

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
