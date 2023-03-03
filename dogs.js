/*
    Author: Karl Moody 
    Date: 03/03/2023
    This is the code for using a dog API
*/

//variables 
const breedListURL = "https://dog.ceo/api/breeds/list/all";
const breedList = document.getElementById("breed-list");

//when page loads
window.addEventListener("load", updateBreedList);

//GET list of all breeds
async function getBreedList(){
    return fetch(breedListURL).then(response => response.json());
};

//add breed to drop down list
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
};

function createOption(text) {
    let option = document.createElement("option");
    option.textContent = text;
    return option;
};

//get picture of dog by breed
function getDog() {
    var selectedDog = $(".dog-selector option:selected").val();
    dogURL = selectedDog.replace(/-/g, '/');
    $.getJSON("https://dog.ceo/api/breed/" + dogURL + "/images/random", function(result) {
        $(".demo-image").html("<img src='" + result.message + "'>");
    });
}

$(".dog-selector").change(function() {
    $(".dog-selector option:selected").each(function() {
        getDog();
    });
});



