const inputBox = document.getElementById("inputBox");
const SearchBtn = document.getElementById("SearchBtn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeCloseBtn = document.querySelector
(".recipe-close-btn");
const recipeDetailsContent = document.querySelector
(".recipe-details-content");

const FecthRecipes = async(inputText) =>{
    recipeContainer.innerHTML=`<h2>Fetching Recepies...</h2>`

    try{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`);

    const response = await data.json();

    recipeContainer.innerHTML = "";
    response.meals.forEach(meal => { 
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
          <img src="${meal.strMealThumb}">
          <h3>${meal.strMeal}</h3>
          <p><span>${meal.strArea}</span> Dish</p>
          <p>Belongs to <span>${meal.strCategory}</span> Category</p>
        `  
        const button = document.createElement('button');
        button.textContent = "Read More";
        recipeDiv.appendChild(button);

        button.addEventListener('click', () =>{
            openRecipePopup(meal);
        })


        recipeContainer.appendChild(recipeDiv);
    });
  } catch (error){
    recipeContainer.innerHTML=`<h2>Sorry, Error to fetch Recepies</h2>`
  }
  
}

const FetchIngrediants = (meal) =>{
    let IngredientList = "";
    for(let i=1; i<=20; i++){
        const Ingredient = meal[`strIngredient${i}`];
        if(Ingredient){
            const measures =  meal[`strMeasure${i}`];
            IngredientList += `<li>${measures} ${Ingredient}</li>`
        } else {
            break;
        }
    }
    return IngredientList;
}

const openRecipePopup = (meal) =>{
    recipeDetailsContent.innerHTML = `
        <h2 class="recipeName">${meal.strMeal}</h2>
        <h3>Ingrediant:</h3>
        <ul class="Ingredients">${FetchIngrediants(meal)}</ul>
        <div class="Instruction">
            <h3>Instructions</h3>
            <p >${meal.strInstructions}</p>
       </div>
    `;
 
    recipeDetailsContent.parentElement.style.display = "block";
}

recipeCloseBtn.addEventListener("click", ()=>{
    recipeDetailsContent.parentElement.style.display = "none";
})

SearchBtn.addEventListener('click' ,(e) => {
    e.preventDefault();
    const inputText = inputBox.value.trim();
    if(!inputText){
        recipeContainer.innerHTML=`<h2>Enter Meal into SearchBox</h2>`
        return;
    }
    FecthRecipes(inputText);
})