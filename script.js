//Search bar tweaks
    document.addEventListener("mousedown", function(tweak) { //adds an event listener that make a function called tweak, that triggers when click

    var searchbar = document.getElementById("searchbar"); //assign a variable to an id

    if (tweak.target !== searchbar) { //if the function target is different of the element assigned to the variable "searchbar"
        searchbar.value = ""; //then change the value assigned to a variable to nothing
    }
    })
//Time and date
    function timeAndDate() { //create a function to set a return interval later
    var tnd = new Date(); //assign a variable to the new date() to display it later

    var day = tnd.getDate();//assign variables to the "tnd" one
    var month = tnd.getMonth() + 1;
    var year = tnd.getFullYear();
    var hours = tnd.getHours();
    var minutes = tnd.getMinutes();

    var dnt = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + "<br>" //reunite all the variables with a padstart to add 0s when needed
     + month.toString().padEnd(2, "0") + "/" +  day.toString().padStart(2, "0") + "/" + year;

    document.getElementById("time&date").innerHTML = dnt;//assign an id to an variable, to be displayed in the document
    }
    setInterval(timeAndDate, 1000)//here's the function return interval mentioned at the start of this script