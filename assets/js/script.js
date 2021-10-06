var btn = document.getElementById("btn");
var appendSectionOne = document.querySelector(".something");
var problemTitle = document.querySelector(".problem-title");
var problemSubTitle = document.querySelector(".problem-subtitle");
$(".health-btn").click(handler)
//if you have to dynamically update, use onclick: on("click", handler)
function handler(){
var bookData = $(this).data("watermelon");
var dictionaryData = $(this).data("fruit");
getBookData(bookData);
// getDictionaryData(dictionaryData);
}

// console.log(testArray.Problem)
//api
var getBookData = function (bookData) {
    //finds list we make on google books
    var bookApi = "https://www.googleapis.com/books/v1/users/106161699745885220854/bookshelves" 
    fetch(bookApi).then(function (response) {
        response.json().then(function (data) {
      


            //since the first search doesn't give you the actual books, this cycles through them
           for( var i = 0; i < data.items.length; i++ ){
               if(data.items[i].title === bookData){
                //send out title and description
                 var refinedData = data.items[i];
                 displayTitle(refinedData);
              
                   
                   var butt = data.items[i].id;
                   
                   var bookVolume = "https://www.googleapis.com/books/v1/users/106161699745885220854/bookshelves/" + butt + "/volumes"
                   fetch(bookVolume).then(function (response) {
                    response.json().then(function (volume) {
                        console.log(volume)
                       //sends data display books for loop
                       displayBooks(volume);
                    });
                   });
               }
           };
        });
    });
};

var displayTitle = function(refinedData){
    console.log(refinedData);
    problemTitle.textContent = refinedData.title;
    problemSubTitle.textContent = refinedData.description;
  
}

//this needs major stylin
var displayBooks = function(volume){
    $("#something").empty();
    for( var i = 0; i < volume.items.length; i++ ){
        // console.log(volume.items[i])
        
        // var titles = volume.items[i].volumeInfo.title;
        var img = new Image();
    img.src = volume.items[i].volumeInfo.imageLinks.thumbnail;

        var bookEl = document.createElement("div");
    bookEl.classList = "col align-self-end"
//style this bookEl class

    // var image = volume.items[i].volumeInfo.imageLinks.thumbnail;

        var authors = volume.items[i].volumeInfo.authors;
        var bookName = document.createElement("span");
        bookName.textContent = " Author: "+ authors;

        var bookTitles = volume.items[i].volumeInfo.title;
        console.log(bookTitles)
        var bookTitlesSpan = document.createElement("span");
        bookTitlesSpan.textContent = bookTitles;
        
        bookEl.appendChild(img);
        bookEl.appendChild(bookTitlesSpan);
        bookEl.appendChild(bookName);
        
        console.log(authors);
        appendSectionOne.appendChild(bookEl);
       //bookEl needs big upgrade
    }


    }





//this will be for the search
$(document).ready(function(){
    var outputList =document.getElementById("oawuberaou");
})





getBookData("Anxiety");









// var bookName = document.createElement("span");

// bookName.textContent = volume;
// bookName.appendChild(bookName);










// var testArray = 
// [
   
//     {
//     Books: ["sad book 1", "sad book 2"],
//     Author: ["sad guy", "sad girl"],
//     Description: "Ahebvasefv. ",
//     Problem: "Anxiety"
//     },
    
//     {
//     Books: ["sad book 1", "sad book 2"],
//     Author: ["sad guy", "sad girl"],
//     Description: "Ah, depression; everyone's favorite mental disorder. ",
//     Problem: "Depression"
//     },
// ];
// problemArray = 
// [
//     {
//         problem: "anxiety",
//         tag: "hardcover fiction"

//     },
//     {
//         problem: "Depression",
//         tag: "something for the api",
//         tag2: "something for the other api"
        
//     }
    
// ];







    // var userInputEl = document.querySelector("#user-form");
// var weatherInput = document.getElementById("#city");
// var city = document.querySelector("#city");
// var weatherBlockEl = document.querySelector("#weather-block-title");
// var humidityEl = document.querySelector("#humid");
// var tempEl = document.querySelector("#temperature");
// var windEl = document.querySelector("#windd");
// var buttons = document.querySelector("#city-buttonn");
// btns = document.getElementsByClassName("city-button");
// var daily = document.querySelector(".daily");
// var tempTwo = document.querySelector(".tempOne");
// // var tempppEl = document.getElementsById("#dailyTwo");

// //button input
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         var text = this.textContent;

//         console.log(text);
//         getWeatherData(text);
        
//     });
// }

//text input
// function userInputHandler(event) {
//     event.preventDefault();
//     var cityData = city.value.trim();
//     if (cityData) {
//         city.value = "";
//         getWeatherData(cityData);


//         // console.log(cityData)
//         // console.log(city.value);

//     }
//     else {
// alert("wrong");
//     }

// }

// userInputEl.addEventListener("submit", userInputHandler);



//api

// daily.textContent = "";

//makes blocks + data
// var createFourDay = function(weatherr){
//    console.log(weatherr.list);
//    $("#daily").empty();
//    for(i = 0; i < weatherr.list.length; i++){
       
//        var title = weatherr.list[i].dt_txt;
    
//     var tempData = weatherr.list[i].main.temp;
//     var windData = weatherr.list[i].wind.speed;
//     var humidData = weatherr.list[i].main.humidity;
//     console.log(title)
      
//     var tempppEl = document.createElement("div");
//     tempppEl.classList = "col align-self-end dailyTwo"
  
       
//     var titleEl = document.createElement("h4");
// titleEl.textContent = title;

//        var tempText = document.createElement("span");
//        tempText.textContent = "temp: " + tempData + " F ";
//        var windText = document.createElement("span");
//        windText.textContent = "wind Speed: " + windData + " MPH "
       
//        var humidityText = document.createElement("span");
//        humidityText.textContent = "Humidity: " + humidData + "% "
// tempppEl.appendChild(titleEl);
//        tempppEl.appendChild(tempText);
//        tempppEl.appendChild(windText);
//        tempppEl.appendChild(humidityText);
//        daily.appendChild(tempppEl);


//    }
// }


// var displayWeather = function (weather, city) {
//     console.log(weather.list[0].main.humidity);
//     console.log(city);
//     console.log(weather.city.name);
    
//     weatherBlockEl.textContent = weather.city.name + " " + weather.list[0].dt_txt;

//     humidityEl.textContent = "";
//     var humidityy = weather.list[0].main.humidity;
//     var humidEl = document.createElement("span");
//     humidEl.textContent = humidityy + "%";
//     humidityEl.appendChild(humidEl);

//     tempEl.textContent = "";
//     var temperaturee = weather.list[0].main.temp;
//     var tempyyEl = document.createElement("span");
//     tempyyEl.textContent = temperaturee + " F";
//     tempEl.appendChild(tempyyEl);

//     windEl.textContent = "";
//     var windd = weather.list[0].wind.speed;
//     var windyEl = document.createElement("span");
//     windyEl.textContent = windd + " mph";
//     windEl.appendChild(windyEl);

