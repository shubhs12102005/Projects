let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let inputBtn = document.getElementById("inputBtn");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbol = document.getElementById("symbol");
let GenBtn = document.getElementById("GenBtn");
let copyIcon = document.getElementById("copyIcon");

// Password-width slider
slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input', ()=>{
    slidervalue.textContent = inputslider.value;
});

// Generating random password
GenBtn.addEventListener('click', ()=>{
    inputBtn.value = GenPassword();
})

let LowerLetters = "abcdefghijklmnopqrstuvwxyz";
let UpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "01234556789";
let allSymbols = "!@#$%^&*";

function GenPassword(){
    let genpass = "";
    let allChar = "";

    allChar += lowercase.checked ? LowerLetters : "";
    allChar += uppercase.checked ? UpperLetters : "";
    allChar += numbers.checked ? allNumbers : "";
    allChar += symbol.checked ? allSymbols : "";

    if(allChar == "" || allChar.length == 0){
        return genpass;
    }

    let i=1;
     while(i<=inputslider.value){
     genpass += allChar.charAt(Math.floor(Math.random() * allChar.length));
     i++;
    }
    return genpass;
}


// For copy icon 
copyIcon.addEventListener('click', ()=>{
    if(inputBtn.value != "" || inputBtn.value.length >= 1){
       navigator.clipboard.writeText(inputBtn.value);
       copyIcon.innerText = "check";
       copyIcon.title = "Copied";

    // icon will again come after 2sec
       setTimeout(()=>{
        copyIcon.innerHTML = "content_copy";
        copyIcon.title = "";
       }, 2000)
    }
})