let form = document.querySelector('form');
let result = document.querySelector('.result');
let hide = document.querySelector('.hide');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWords(form.elements[0].value);
})

const getWords = async(word) => {
    hide.classList.remove("hide");
    result.innerHTML = "Fetching data...";
    try{
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    console.log(data);
    const definitions = data[0].meanings[0].definitions[0];

    // Fetching all necessary elements 
    result.innerHTML =
       `<h2 id="word"><strong>Word:</strong>${data[0].word}</h2>
        <p class="def"><strong>Definition:</strong> ${definitions.definition}<p>
        <p class="POS"><strong>Part Of Speech:</strong>${data[0].meanings[0].partOfSpeech}</p>
        <p class="POS"><strong>Example:</strong> ${definitions.example === undefined ? "Not Found" : definitions.example}</p>
        <p class="POS"><strong>Antonyms:</strong></p>
        `  
        if(definitions.antonyms.length === 0){
            result.innerHTML += `<span>Not found</span>`;
        } else{
        // Fetching Antonyms
        for(let i=0;i<definitions.antonyms.length;i++){
            result.innerHTML += ` <li>${definitions.antonyms[i]}</li>`
        } 
    }

     result.innerHTML += `<p class="POS"><strong>Synonyms:</strong></p>`
    if(definitions.synonyms.length === 0){
        result.innerHTML += `<span>Not found</span>`;
    } else{
    // Fetching Antonyms
    for(let i=0;i<definitions.synonyms.length;i++){
        result.innerHTML += ` <li>${definitions.synonyms[i]}</li>`
      }
    }
        result.innerHTML += `<a href = "${data[0].sourceUrls}" target = "_blank">Read More</a>`
  } 

  catch(error){
    result.innerHTML = `<p>Sorry, Word could not found</p>`
  }

}