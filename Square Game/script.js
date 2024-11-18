let s1 = document.getElementById("first");
s1.addEventListener("mouseenter",function(){
    let x = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${x}</h1>`;
})
s1.addEventListener("mouseleave",function(){
    s1.innerHTML = "<h1>1</h1>";
})

s1.addEventListener("dblclick",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${a},${b},${c})`
})

let s2 = document.getElementById("second");
let clr = "red";
s2.addEventListener("mouseenter",function(){
    if(clr == "red"){
        s2.style.backgroundColor = "red";
        clr = "green"
    }
    else if(clr == "green"){
        s2.style.backgroundColor = "green";
        clr = "blue";
    }
    else{
        s2.style.backgroundColor = "blue";
        clr = "red";
    }
})

s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor = "white";
})

let s3 = document.getElementById("third");
s3.addEventListener("mouseenter",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${a},${b},${c})`
})
s3.addEventListener("mouseleave",function(){
   s3.style.backgroundColor = "white";
})

let s4 = document.getElementById("forth");
s4.addEventListener("click",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${a},255,255)`
    s2.style.backgroundColor = `rgb(255,${b},255)`
    s3.style.backgroundColor = `rgb(255,255,${c})`
})
s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";
})
let main = document.getElementById("main");
let crsr = document.getElementById("cursor");
main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";

})

