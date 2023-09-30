var li, no_questions, input, all, none;
var file_data;
var pdf_viewer;
var yia_ad_viewer;

document.onload = init()

function init () {
    setTimeout(show_ad, 3000)
}

function sort() {
    var topics, input, filter ;
    if (input == undefined) {
        no_questions = document.getElementById("no-questions");
        input = document.getElementsByClassName("topic");
        li = document.getElementById("questions").getElementsByTagName("li");
        all = document.getElementById("select-all");
        none = document.getElementById("select-none")
    }

    filter = [];

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (element.checked == true) {
            filter.push(element.value);
        } 
    }


    if (filter.len == 0) {
        for (let i = 0; i < li.length; i ++) {
            li[i].style.display = "";
        }
        no_questions.style.display = "inline"
        return
    }
    else {
        no_questions.style.display = "none"
    }

    if (none.checked == true && filter.length > 0) {
        none.checked = false;
    }

    let question_showing = false

    for (let i = 0; i < li.length; i++) {
        const element = li[i];
    
        topics = element.getAttribute("data-topic").split(", ");
        if (topics.find(x => filter.includes(x)) != undefined) {
            element.style.display = "";
            question_showing = true;
        }
        else {
            element.style.display = "none";
        }
    };

    if (question_showing) {
        no_questions.style.display = "none"
    }
    else {
        no_questions.style.display = "inline"

    }
}

function select_all() {
    if (input == undefined) {
        no_questions = document.getElementById("no-questions");
        input = document.getElementsByClassName("topic");
        li = document.getElementById("questions").getElementsByTagName("li");
        all = document.getElementById("select-all");
        none = document.getElementById("select-none")
    }
    
    if (all.checked) {
        for (let i = 0; i < input.length; i++) {
            input[i].checked = true;
        }
        none.checked = false;
        sort()
    }
}

function select_none() {
    if (input == undefined) {
        no_questions = document.getElementById("no-questions");
        input = document.getElementsByClassName("topic");
        li = document.getElementById("questions").getElementsByTagName("li");
        all = document.getElementById("select-all");
        none = document.getElementById("select-none")
    }

    if (none.checked) {
        for (let i = 0; i < input.length; i++) {
            input[i].checked = false;
        }
        all.checked = false;
        sort()
    }
}

function load_files () {
    
    fetch("../csec/database/data.json")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
          file_data = data;
        

    var file_list = document.getElementById("papers_list")

    console.log(2);

    for (let i = 0; i < file_data.length; i++) {
        var file = file_data[i]
        console.log(1);

        var item = document.createElement("li");
        item.innerHTML = file.name;
        item.setAttribute("value", file[1])

        file_list.appendChild(item)
        console.log(item)
        console.log(file)
    }
})
}

function load_pdf(id) {
    console.log("loading pdf: " + id)

    if (pdf_viewer == null) {
        pdf_viewer = document.getElementById("pdf_viewer")
    }

    var src = "https://drive.google.com/file/d/" + id + "/preview"
    pdf_viewer.setAttribute("src", src)
    //"height":"0", "width":"0", "border":"none"}
    pdf_viewer.parentElement.setAttribute("style", "width: 100vw; height:100vh; display: inline;")
}

function hide_pdf() {
    pdf_viewer.parentElement.setAttribute("style", "width: 0vw; height: 0vh; display: none;")
}

function show_ad() {
    console.log("loading ad: ")

    if (yia_ad_viewer == null) {
        yia_ad_viewer = document.getElementById("yia")
    }

    var ad_number = parseInt(window.localStorage.getItem("ad_number")) || 0
    console.log("S0 Ad number: ", ad_number)

    if(ad_number >= 8) {
        return
    }
    else if(ad_number % 3 == 0 && ad_number != 0) {
        ad_number += 1;
        return
    }
    else if (window.localStorage.getItem("ad_opened") != null) {
        ad_number += 1
        console.log("Ad number: ", ad_number)
    }
    
    ad_number += 1
    console.log("Ad number: ", ad_number)
    yia_ad_viewer.setAttribute("style", "display: block;")
    window.localStorage.setItem("ad_number", ad_number)
}

function hide_yia_ad() {
    yia_ad_viewer.setAttribute("style", "width: 0vw; height: 0vh; display: none;")
}

function go_to_yia(){
    window.localStorage.setItem("ad_opened", "true")
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfX4XI-iMAKuKVwOajw3WgzuE3sn12ezO6hCDgdLGjXge1b9g/viewform","_blank")
    hide_yia_ad()
}