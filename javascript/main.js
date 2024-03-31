let email_form_active = false;
let crquiz_active = true;


let dark = true;
let root = document.querySelector(":root");
let shareButtons = null;
let email_getter, email_state;

var pop_up_holder, pop_up_frequency, visited_already;

document.onload = init;

function init() {
    setTimeout(record_new_user, 2000)
    setTimeout(show_pop_up, 3000)   
}

function record_new_user() {
    let returning = window.localStorage.getItem("returning")
    if (returning != "true") {
        console.log("New User Recorded")
        window.localStorage.setItem("returning", "true")
    }
    else {
        console.log("Returning user")
    }
}

function show_pop_up() {
    pop_up_holder = document.getElementById("pop_up_holder");
    
    if(pop_up_holder != null) {

        pop_up_frequency = parseInt(window.localStorage.getItem("pop_up_frequency"))
        visited_already =  parseInt(window.sessionStorage.getItem("visited_already"))

        if(isNaN(pop_up_frequency)) {
            pop_up_frequency = 0
        }
        if(isNaN(visited_already)) {
            visited_already = 0
        }
        

        if(visited_already == 0 && pop_up_frequency <= 6 && (pop_up_frequency % 2) == 0) {
            console.log("first daily visit -> pop_up")
            pop_up_holder.setAttribute("style", "width: 100%; height: 100%; display: block;")
            
            window.sessionStorage.setItem("visited_already", 1)
            window.localStorage.setItem("pop_up_frequency", pop_up_frequency + 1)
        }
        else if (visited_already != 0) {
            console.log("not first daily visit")
        }
        else {
            console.log("too much pop ups")
            window.localStorage.setItem("pop_up_frequency", pop_up_frequency + 1)

        }
    }
    else {
        console.log("no pop ups")

    }

}

function hide_pop_up() {
    pop_up_holder.setAttribute("style", "width: 0vw; height: 0vh; display: none;")
}