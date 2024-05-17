let email_form_active = false;
let crquiz_active = true;


let root = document.querySelector(":root");
let shareButtons = null;
let email_getter, email_state;



var pop_up_holder, pop_up_amount, seen_for_session;

//changing to window on load an dmoving to script tag in html.
//thisensures that it is only called when the html loads

//document.onload = init;

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log("init")
    setTimeout(theme_on_load, 10)
    setTimeout(record_new_user, 2000)
    //setTimeout(show_pop_up, 2000)   
}

function theme_on_load() {
    let theme = window.localStorage.getItem("next-theme");
    if (theme == "dark") {
        window.localStorage.setItem("next-theme", "light")
        change_theme()
    }
    else {
        window.localStorage.setItem("next-theme", "dark")
        change_theme()
    }
}

function change_theme() {
    let theme = window.localStorage.getItem("next-theme");
    if (theme == "dark") {
        console.log("a")
        document.documentElement.style.backgroundColor = "black"
        document.getElementById("theme").children[0].style.filter = "invert()"
        document.getElementById("theme").children[0].src = "/media/moon.svg"
        
        change_main_color("h1, h2, h3, span, p, a, strong, li, footer", true)
        change_box_style(".light_theme", true)
        
        window.localStorage.setItem("next-theme", "light")
    }
    else {
        console.log("b")
        document.documentElement.style.backgroundColor = "white"
        document.getElementById("theme").children[0].style.filter = "none"
        document.getElementById("theme").children[0].src = "/media/sun.svg"



        change_main_color("h1, h2, h3, span, p, a, strong, li, footer", false)

        
        change_box_style(".dark_theme", false)
        window.localStorage.setItem("next-theme", "dark")
    }
}

function change_main_color(query, white) {
    if (white) {
        for (element of document.querySelectorAll(query)) {
            element.style.color = "white"
        }
    }
    else {
        for (element of document.querySelectorAll(query)) {
            element.style.color = "black"
        }
    }
}

function change_box_style(query, border) {
    if (border) {
        for (element of document.querySelectorAll(query)) {
            element.classList.add("dark_theme")
            element.classList.remove("light_theme")

        }
    }
    else {
        for (element of document.querySelectorAll(query)) {
            element.classList.add("light_theme")
            element.classList.remove("dark_theme")

        }
    }
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
        pop_up_amount = parseInt(window.localStorage.getItem("pop_up_amount"))
        seen_for_session =  parseInt(window.sessionStorage.getItem("seen_for_session"))

        if(isNaN(pop_up_amount)) {
            pop_up_amount = 0
        }
        if(isNaN(seen_for_session)) {
            seen_for_session = 0
        }
        

        if(seen_for_session == 0 && pop_up_amount < 1) {
            console.log("first daily visit -> pop_up")
            pop_up_holder.setAttribute("style", "width: 100%; height: 100%; display: block;")
            
            window.sessionStorage.setItem("seen_for_session", 1)
            window.localStorage.setItem("pop_up_amount", pop_up_amount + 1)
        }
        else if (seen_for_session != 0) {
            console.log("not first daily visit")
        }
        else {
            console.log("too much pop ups")
            window.localStorage.setItem("pop_up_amount", pop_up_amount + 1)
        }
    }
    else {
        console.log("no pop ups")

    }

}

function hide_pop_up() {
    pop_up_holder.setAttribute("style", "width: 0vw; height: 0vh; display: none;")
}

function follow_pop_up(url) {
    hide_pop_up()
    window.localStorage.setItem("pop_up_amount", 10)
    console.log(url)
    window.open(url, '_blank').focus();
}