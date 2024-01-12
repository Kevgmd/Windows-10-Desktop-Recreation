//Search bar tweak1
document.addEventListener("click", function (tweak) { //adds an event listener that make a function called tweak, that triggers when click

    var searchbar = document.getElementById("searchbar"); //assign a variable to an id

    if (tweak.target !== searchbar) { //if the function target is different of the element assigned to the variable "searchbar"
        searchbar.value = ""; //then change the value assigned to a variable to nothing
    }

    if (tweak.target !== searchbar) {//if a click is made in any area of the dom but the search bar, it change its styles
        searchbar.style.backgroundImage = "";
        searchbar.style.backgroundColor = "";
        searchbar.style.borderColor = "";
        searchbar.style.color = "";
        searchbar.style.borderWidth = "";
        searchbar.style.height = "";
        searchbar.style.width = "";
    }
})
//Search bar tweak2
searchbar.addEventListener("mouseenter", function () {//event listener that checks if the mouse is entering the search bar area
    if (document.activeElement !== this) {//if the search bar is not being focused, it change its styles like its being hovered
        this.style.backgroundColor = "#3f3f3f";
        this.style.borderColor = "#777777";
        this.style.borderWidth = "2px";
        this.style.height = "33px";
        this.style.width = "242px";
    }
});
searchbar.addEventListener("mouseleave", function () {//event listener that checks if the mouse leaves the search bar area
    if (document.activeElement !== this) {//if the search bar is not being focused, it changes the search bar styles to default
        this.style.backgroundColor = "";
        this.style.borderColor = "";
        this.style.borderWidth = "";
        this.style.height = "";
        this.style.width = "";
    }
});

searchbar.addEventListener("click", function () {//event listener that checks if theres any click in the search bar area
    this.style.backgroundColor = "white";//when the search bar is focused, it change its styles to like it is focused
    this.style.backgroundImage = "url(./img/magnifierfocus.png)";
    this.style.borderColor = "#0078d7";
    this.style.color = "black";
    this.style.borderWidth = "2px";
    this.style.height = "33px"
    this.style.width = "242px"
});
//Time and date
function timeAndDate() { //create a function to set a return interval later
    var tnd = new Date(); //assign a variable to new date() to display it later

    var day = tnd.getDate();//assign variables to the "tnd" one
    var month = tnd.getMonth() + 1;//adds a plus one because the month count starts at 0 by default
    var year = tnd.getFullYear();
    var hours = tnd.getHours();
    var minutes = tnd.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (day < 10) {//if statement that checks if the day variable is lesser than 10
        day = "0" + day;//if it is lesser than 10, adds a 0 ahead of the day variable value
    }

    if (month < 10) {//if statement that checks if the month variable is lesser than 10
        month = "0" + month;//if it is lesser than 10, adds a 0 ahead of the month variable value
    }

    var dnt = hours + ":" + minutes + "<br>"//reunite all the variables with a padstart to add 0s when needed
        + month + "/" + day + "/" + year;

    document.getElementById("time&date").innerHTML = dnt;//assign an id to a variable, to be displayed in the document after
}
setInterval(timeAndDate, 1000)//here's the function return interval mentioned at the start of this segment
//Dom manipulation gen
var gen = document.getElementsByClassName("gen");//assign a variable with the name "gen" to a class name called gen

for (let i = 0; i < gen.length; i++) {//makes a loop that ends if the value of the variable "i" is longer than the gen lenght 
    gen[i].addEventListener("mouseover", function () {//if it is, adds an event listener that triggers when the gen is being hovered
        this.style.backgroundColor = "#35374b"//when the event is triggered, it changes its styles
    });
}
//and then repeating this entire same process on each loop
for (let i = 0; i < gen.length; i++) {
    gen[i].addEventListener("mouseout", function () {
        this.style.backgroundColor = ""
    });
}

for (let i = 0; i < gen.length; i++) {
    gen[i].addEventListener("mousedown", function () {
        this.style.backgroundColor = "#2A283A";
    });
}

for (let i = 0; i < gen.length; i++) {
    gen[i].addEventListener("mouseup", function () {
        this.style.backgroundColor = "#35374b";
    });
}
//Dom manipulation gen2
var gen2 = document.getElementsByClassName("gen2");

for (let i = 0; i < gen2.length; i++) {
    gen2[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = "#35374b"
    });
}

for (let i = 0; i < gen2.length; i++) {
    gen2[i].addEventListener("mouseout", function () {
        this.style.backgroundColor = ""
    });
}

for (let i = 0; i < gen2.length; i++) {
    gen2[i].addEventListener("mousedown", function () {
        this.style.backgroundColor = "#3F3D4D";
    });
}

for (let i = 0; i < gen2.length; i++) {
    gen2[i].addEventListener("mouseup", function () {
        this.style.backgroundColor = "#35374b";
    });
}
//Start menu logo
var windows = document.getElementsByClassName("windows")//variable assigned to the class called "windows"

for (let i = 0; i < windows.length; i++) {
    windows[i].addEventListener("mouseover", function () {
        this.style.backgroundImage = "url('./img/start menu hover.png')"
    });
}
for (let i = 0; i < windows.length; i++) {
    windows[i].addEventListener("mouseout", function () {
        this.style.backgroundImage = "";
    });
}