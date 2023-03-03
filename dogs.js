/*
    Author: Karl Moody 
    Date: 03/03/2023
    This is the code for using a dog API
*/

//variables 
const breedListURL = "https://dog.ceo/api/breeds/list/all";
const breedList = document.getElementById("breedList");

//when page loads
window.addEventListener("load", updateBreedList());

//GET list of all breeds
async function getBreedList(){
    return fetch(breedListURL).then(response => response.json());
}

//add function to drop down lists
function updateBreedList(){
    getBreedList().then(function(data){
        //get breed name
            for (element in data.message){
                //append the select list
                let option = createOption(element);
                breedList.appendChild(option);
            }       
        }
    );
}

function createOption(text) {
    let option = document.createElement("option");
    option.textContent = text;
    return option;
}