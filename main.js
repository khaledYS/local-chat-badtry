var inpUT = document.getElementById("input").value;
var btn = document.getElementById("submit");
var dir = document.getElementById("dire");
function myFunc() {
    var crt = document.createElement("h5");
    crt.innerHTML = document.getElementById("input").value;
    document.getElementById("msgbox").appendChild(crt);
}
function myFunc2(){
    if(document.getElementById("dire").value == "Lang is : English"){
        document.body.style.direction = "ltr";
        document.getElementById("input").setAttribute("placeholder" , "Write here your msg");
        btn.innerHTML = "Send";
        dir.innerText = "Lang is : Arabic";
console.log("Arabic");
    }else if(document.getElementById("dire").value == "Lang is : Arabic"){
        document.body.style.direction = "rtl";
        document.getElementById("input").setAttribute("placeholder" , "أكتب هنا رسالتك");
        btn.innerHTML = "إرسال";
        dir.innerHTML = "Lang is : Englishs";
console.log("arabic");
    }
}