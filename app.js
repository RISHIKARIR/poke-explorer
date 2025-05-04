let url = "https://pokeapi.co/api/v2/pokemon?limit=200";
let type = document.querySelector("#types");
let container = document.querySelector("#container");
let search = document.querySelector("#searchbar");
let search_btn = document.querySelector("#search-btn");
let pokelist=[];

async function poke(){

//Pokemons fetching
let pokemons = await axios.get(url);
console.log(pokemons.data.results);



//Each pokemon data fetching
for(let pokemon of pokemons.data.results){
    let pokedetails = await axios.get(pokemon.url);
    pokelist.push({
Name :  pokedetails.data.name,
Image : pokedetails.data.sprites.front_default,
Type : pokedetails.data.types[0].type.name,
ID : pokedetails.data.id
});
}
 displaypokemons();
} 


//Each type pokemon filtering
type.addEventListener("change",function(){
    container.innerHTML ="";
    let filtered = [];
    if (type.value.toLowerCase() === "all" ) {
        displaypokemons();
    return;
    }
    for(let pokem of pokelist){
    if(pokem.Type == type.value.toLowerCase()){
        filtered.push(pokem);
    }
    

    
    }
    //Filtered pokemons card displaying
    for(filter of filtered){
        
    let card = document.createElement("div");
    card.classList.add("cards");
    
    let name1 = document.createElement("h3");
    name1.textContent = filter.Name;
    card.appendChild(name1);
    
    let img1 = document.createElement("img");
    img1.src = filter.Image;
    card.appendChild(img1);
    
    let type1 = document.createElement("p");
    type1.textContent = filter.Type;
    card.appendChild(type1);
    
    let id1 = document.createElement("p");
    id1.textContent = filter.ID;
    card.appendChild(id1);
    container.appendChild(card);

    }

    
    });
poke();



//Cards Displaying
function displaypokemons(){
for (let pokemon of pokelist){

    let card = document.createElement("div");
    card.classList.add("cards");
    
    let name1 = document.createElement("h3");
    name1.textContent = pokemon.Name;
    card.appendChild(name1);
    
    let img1 = document.createElement("img");
    img1.src = pokemon.Image;
    card.appendChild(img1);
    
    let type1 = document.createElement("p");
    type1.textContent = pokemon.Type;
    card.appendChild(type1);
    
    let id1 = document.createElement("p");
    id1.textContent = pokemon.ID;
    card.appendChild(id1);   
    container.appendChild(card);
}}




//Search filter

search_btn.addEventListener("click",function(){



let lower = search.value.toLowerCase();
container.innerHTML = "";

let filtered = pokelist.filter(function(pokee){
return pokee.Name.toLowerCase().includes(lower);

})






for (let pokemon of filtered){

    let card = document.createElement("div");
    card.classList.add("cards");
    
    let name1 = document.createElement("h3");
    name1.textContent = pokemon.Name;
    card.appendChild(name1);
    
    let img1 = document.createElement("img");
    img1.src = pokemon.Image;
    card.appendChild(img1);
    
    let type1 = document.createElement("p");
    type1.textContent = pokemon.Type;
    card.appendChild(type1);
    
    let id1 = document.createElement("p");
    id1.textContent = pokemon.ID;
    card.appendChild(id1);   
    container.appendChild(card);
}




})  




