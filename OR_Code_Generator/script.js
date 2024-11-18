
const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const GenerateBtn = document.getElementById('GenerateBtn');
const DownloadBtn = document.getElementById("DownloadBtn");
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

// After clicking on Generate button it will not refresh webpage & it wil first check input is empty or not
GenerateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput();
});

// throudh this function we can assume to change the height and width of the QR
sizes.addEventListener('change', (e)=>{
    size = e.target.value;
    isEmptyInput();
})

// It just checks that if input is empty or not 
function isEmptyInput(){
    if(qrText.value.length > 0){
        generateQRCode();
    }
    else{
        alert("Enter your Text or URL to generate OR.");
    }
}

// This is for downloading our QR
DownloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');
    if(img !== null){
        let imgsrc = img.getAttribute('src');
        DownloadBtn.setAttribute("href", imgsrc);
    }
})


// This funcntion generate QR code 
function generateQRCode(){
    qrContainer.innerHTML = "";  //This helps to remove older QR and generates new one
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
} 
   