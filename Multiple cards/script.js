let x = document.querySelector("main");
let arr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDph5eF_cb_crvvK6P8TI1dT4EfNPCuux9A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAo7Npr4XWq0v48vNvLqV-2lJvVWo6qSgg-g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp4sOvioXcby94zImg0Cfm2CQt88kUajs9lQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhfW10uGiXQlh5VadLE1hW_6TGnpvaNwuVQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWDeUAsyeNOyAML6xwscTdV26vazZqmqFhQ&s"];
var s = "";
for(let i=0;i<=54;i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="card"><img src = ${arr[r]}></div>`
}
main.innerHTML = s;

