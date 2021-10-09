var btn = document.getElementById("btn");
var appendSectionOne = document.querySelector(".something");
var problemTitle = document.querySelector(".problem-title");
var problemSubTitle = document.querySelector(".problem-subtitle");
var userInputEl = document.querySelector("#user-form");
var problem = document.querySelector("#book-search");
var quoteAuthor = document.querySelector(".quote-author")
var btn = document.querySelector("#btn");

$(".health-btn").click(handler)
//if you have to dynamically update, use onclick: on("click", handler)
function handler() {
    var bookData = $(this).data("vegetable");
    var dictionaryData = $(this).data("fruit");

    getBookData(bookData);
    quotes(dictionaryData);
    // getDictionaryData(dictionaryData);
}


function inputHandler(event) {
    event.preventDefault();

    var problemData = problem.value.trim();
    console.log(problemData);
    if (problemData) {
        console.log(problemData);
        problem.value = "";
        getBookData(problemData);


        // console.log(cityData)
        // console.log(city.value);

    }
    else {
        alert("wrong");
    }

}

userInputEl.addEventListener("submit", inputHandler);
// console.log(testArray.Problem)
//api
var getBookData = function (bookData) {
    //finds list we make on google books
    var bookApi = "https://www.googleapis.com/books/v1/users/106161699745885220854/bookshelves"
    fetch(bookApi).then(function (response) {
        response.json().then(function (data) {



            //since the first search doesn't give you the actual books, this cycles through them
            for (var i = 0; i < data.items.length; i++) {
                if (data.items[i].title === bookData) {
                    //send out title and description
                    var refinedData = data.items[i];
                    displayTitle(refinedData);


                    var steve = data.items[i].id;

                    var bookVolume = "https://www.googleapis.com/books/v1/users/106161699745885220854/bookshelves/" + steve + "/volumes"
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
function quotes(quote){
    $.ajax({ 
        type : "GET", 
        url : "https://api.paperquotes.com/apiv1/quotes/?tags=" + quote  , 
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Token 8e4f20e7331a660b5c8db679d6be07b0797ef440');},
        success : function(result) { 
            console.log(result.results); 
            
            quotePrinter(result);
            
console.log(result);
        }, 
        error : function(result) { 
          //handle the error
        } 
      }); 
     
};



var quotePrinter = function(result){
    var random = result.results[Math.floor(Math.random() * result.results.length)];
    console.log(random.quote)
    console.log(random.author)
    
    problemSubTitle.textContent = '"' +random.quote + '"';
    problemSubTitle.classList = "center-align";
    quoteAuthor.classList = "center-align book-subtitle";
    quoteAuthor.textContent = "- " +random.author;

}

quotes("happy");

var displayTitle = function (refinedData) {
    // console.log(results)
    console.log(refinedData);
    problemTitle.textContent = refinedData.title;
    problemTitle.classList = "center-align book-title";
   

}

//this needs major stylin
var displayBooks = function (volume) {
    $("#something").empty();
    for (var i = 0; i < volume.items.length; i++) {
        // console.log(volume.items[i])

        // var titles = volume.items[i].volumeInfo.title;
        var img = new Image();
        img.classList = "right-align"
        img.src = volume.items[i].volumeInfo.imageLinks.thumbnail;

        var bookEl = document.createElement("div");

        //style this bookEl class

        // var image = volume.items[i].volumeInfo.imageLinks.thumbnail;

        var authors = volume.items[i].volumeInfo.authors;
        var bookName = document.createElement("span");
        bookName.textContent = " Author: " + authors;
        bookName.classList = "center-align book-div";

        var bookTitles = volume.items[i].volumeInfo.title;
        console.log(bookTitles)
        var bookTitlesSpan = document.createElement("span");
        bookTitlesSpan.textContent = bookTitles;
        bookTitlesSpan.classList = "center-align book-div";
        bookEl.classList = " center-align description";
        var description = volume.items[i].volumeInfo.description;
        var bookDescriptionSpan = document.createElement("span");
        bookDescriptionSpan.textContent = description;
        bookDescriptionSpan.classlist = "description";
        linebreak = document.createElement("br");
        linebreak2 = document.createElement("br");
        linebreak3 = document.createElement("br");
        linebreak4 = document.createElement("br");
        var saveButton = document.createElement("button");
        saveButton.textContent = "save";
        saveButton.classList = "save"


        bookEl.appendChild(img);
        bookEl.appendChild(linebreak);

        bookEl.appendChild(bookTitlesSpan);
        bookEl.appendChild(linebreak2);
        bookEl.appendChild(bookName);
        bookEl.appendChild(linebreak3);
        bookEl.appendChild(bookDescriptionSpan);
        bookEl.appendChild(linebreak4);
        bookEl.appendChild(saveButton);


        appendSectionOne.appendChild(bookEl);
        //bookEl needs big upgrade
    }


}





//this will be for the search
// $(document).ready(function () {
//     var outputList = document.getElementById("oawuberaou");
// })





getBookData("Anxiety");





// for (var i = 0; i < btn.length; i++){
//     btn[i].addEventListener("submit", function(){
//         console.log("asidbv");
//     })

//         }





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


// }
