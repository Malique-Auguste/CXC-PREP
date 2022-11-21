var li, no_questions, input, all, none;

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