var aboutMeChange = false;
var cvChange = false;
var firstLoad = true;

function loadInitialContent() {
    // reset flags
    aboutMeChange = false;
    cvChange = false;

     // Reset button classes if not first load
    if (!firstLoad) {
        var aboutmeButton = document.getElementById("aboutme");
        if (aboutmeButton.classList.contains("button-on")) {
            aboutmeButton.classList.remove("button-on");
        }
        aboutmeButton.classList.add("button-off");

        var cvButton = document.getElementById("cv");
        if (cvButton.classList.contains("button-on")) {
            cvButton.classList.remove("button-on");
        }
        cvButton.classList.add("button-off");

        // turn it false
        firstLoad = false;
    }

    // load initial content
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").innerHTML = this.responseText;
        } else if (this.readyState == 4 && this.status != 200) {
            console.error("Error loading initial.txt");
        }
    };
    xhttp.open("GET", "initial.txt", true);
    xhttp.send();
}

function loadAboutme() {
    // load initial content first
    if (aboutMeChange) {
        loadInitialContent();
        return;
    }

    // reset flags
    cvChange = false;

    // load aboutme content
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (!aboutMeChange) {
                document.getElementById("main").innerHTML = this.responseText;
                document.getElementById("aboutme").classList.remove("button-off");
                document.getElementById("aboutme").classList.add("button-on");
                aboutMeChange = true;
            } else {
                document.getElementById("aboutme").classList.add("button-on");
                document.getElementById("aboutme").classList.remove("button-off");
                loadInitialContent();
                aboutMeChange = false;
            }
        } else if (this.readyState == 4 && this.status != 200) {
            console.error("Error loading aboutme.txt");
        } 
    };
    xhttp.open("GET", "aboutme.txt", true);
    xhttp.send();
}

function loadCV() {
    // load initial content first
    if (cvChange) {
        loadInitialContent();
        return;
    }

    // reset flags
    aboutMeChange = false;

    // load cv content
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (!cvChange) {
                document.getElementById("main").innerHTML = this.responseText;
                document.getElementById("cv").classList.remove("button-off");
                document.getElementById("cv").classList.add("button-on");
                cvChange = true;
            } else {
                document.getElementById("cv").classList.add("button-on");
                document.getElementById("cv").classList.remove("button-off");
                loadInitialContent();
                cvChange = false;
            }
        } else if (this.readyState == 4 && this.status != 200) {
            console.error("Error loading cv.txt");
        } 
    };
    xhttp.open("GET", "cv.txt", true);
    xhttp.send();
}
