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
        m1 = input1;
        m2 = input2;
        m3 = input3;
        m4 = input4;
        m5 = input5;
        document.getElementById("story").innerHTML="There once was a " + m1 + " named Jeremy. He was best friends with a " + m2 + " named Jessica. Jeremy loved " + m3 + " while Jessica loved " + m4 + ". One day Jeremy attempted " + m4 + " with Jessica, but was unable to keep up due to his " + m5 + " " + m1 + " legs. Jessica attempted to convice Jeremy that it was okay that he was not good at " + m4 + " as she was not very good at " + m3 + " herself.";
        document.getElementById("story").classList.remove("hidden-message");
        document.getElementById("story").classList.add("shown-message");
    }
}

function submit2(){
    //same as submit but contains story for second mad lib
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
        m1 = input1;
        m2 = input2;
        m3 = input3;
        m4 = input4;
        m5 = input5;
        document.getElementById("story").innerHTML="You have a pet " + m1 + ". Your pet " + m1 + " likes " + m3 + " " + m2 +"s. You try " + m4 + " your " + m1 + " to stop it from " + m3 + " " + m2 + "s. The " + m2 + " ends up saving itself from your " + m1 + "'s " + m3 + " by using its " + m5 + " legs to escape.";
        document.getElementById("story").classList.remove("hidden-message");
        document.getElementById("story").classList.add("shown-message");
    }
}
