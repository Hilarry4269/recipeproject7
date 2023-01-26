const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});

const baseURL = "https://api.spoonacular.com/";
 const search = "recipes/search";
 const query = "&number=1&query=";
 
 const requestURL = baseURL + search + query;
 
 const ACCESS_KEY = "1338dc42c490464081ce69c476990c97";
 const clientID = `?apiKey= ${ACCESS_KEY}`;
 

 const wholeRl = "https://api.spoonacular.com/recipes/search?apiKey=1338dc42c490464081ce69c476990c97&number=4&query="; 
 
 


 
 const baseUri = "https://spoonacular.com/recipeImages/"
 
 const output = document.querySelector('#output');
 
 const titleOutput = document.querySelector("#searchTitle")
 


 
 const searchInput = () => {

    const searchItem = document.querySelector('#recipesearch');

    const finalUrl = wholeRl + searchItem.value ;
 
 // fetch ( requestURL, requestOptions )
 fetch( finalUrl )
     .then(res => {
         return res.json();
     })
     .then(result => {
         console.log(result);
         searchItem.innerText="";
        //  titleOutput.innerText="" 
  
 
        for (let i = 0; i < result.results.length; i++) {
            const recipe = result.results[i];
            // Create a container for each recipe
            const recipeContainer = document.createElement('div');   
            // Create a title element and set its text content to the recipe title
            const title = document.createElement('h3');
            title.textContent = recipe.title;
            // Create an image element and set its source to the recipe image
            const image = document.createElement('img');
            image.src = baseUri + recipe.image;
            // image.style.gridRow='2' 
            // Create a link element and set its href to the recipe source URL
            const link = document.createElement('a');
            link.href = recipe.sourceUrl;
            link.textContent = "View Recipe"
            // link.style.gridRow = '4'
            // Append the title, image, and link to the recipe container
            recipeContainer.append(title);
            recipeContainer.append(image);
            recipeContainer.append(link);
            // Append the recipe container to the output element
            output.append(recipeContainer);
        }
        
        
     })
     .catch(err =>{
         console.log(err);
     })

    }
const searchBtn = document.querySelector('#searchBtn');

     searchBtn.addEventListener(
        'click', () => {
            searchInput();
 })
//contact form

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('[name="name"]').value;
  const email = form.querySelector('[name="email"]').value;
  const message = form.querySelector('[name="message"]').value;

});
