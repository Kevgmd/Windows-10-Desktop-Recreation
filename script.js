document.body.addEventListener("mousedown", function(event) {

    var clickoff = document.getElementById("clear");

    if (event.target !== clickoff) {
        clickoff.value = "";
    }
    })
    function timeAndDate() {
    var tnd = new Date();

    var day = tnd.getDate();
    var month = tnd.getMonth() + 1;
    var year = tnd.getFullYear();
    var hours = tnd.getHours();
    var minutes = tnd.getMinutes();

    var dnt = hours.toString().padStart(2, "0") + ":" + minutes + "<br>"
     + day.toString().padStart(2, "0") + "/" + month.toString().padStart(2, "0") + "/" + year;

    document.getElementById("time&date").innerHTML = dnt;
    }
    setInterval(timeAndDate, 1000)

    timeAndDate();