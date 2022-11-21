let all_travel = [
    "¿Qué país extranjero te gustaría visitor? Por que?",
    "¿Tienes planes de viajar para tus vacaciones? ¿A dónde piensas ir?",
    "Menciona algunas cosas que llevas en la maleta cuando vas de viaje.",
    "¿Qué documentos necesitas para viajar a otro país?",
    "¿Piensas que es una buena idea viajar solo? Explica.",
    "¿Cuál país no te gustaría visitar? ¿Por qué?",
    "¿Con quien te gusta viajar? ¿Por qué?",
    "¿Cuál, en tu opinion es el sitio más atractivo de tu país? Describelo",
    "¿Es fácil viajar entre las islas del Caribe? Explica.",
    "¿Qué compran los turistas cuando visitan tu país?",
    "¿Qué lugares interesantes conoces en tu país o fuera de tu país?",
    "Describe unas vacaciones inolvidables.",
    "¿Cuál es el medio de transporte que usas más?",
    "¿Hay muchos accidentes de tráfico en tu país? Explica.",
    "¿Te gusta conducir? ¿Por qué?"
];

//daily routine
let all_dr = [
    "¿Tienes responsabilidades en casa? ¿Cuáles son?",
    "¿Qué haces normalmente cuando no estás en clase/escuela?",
    "¿Qué haces antes de acostarte?",
    "¿Cómo te prepares para ir a la escuela cada día?",
    "¿Piensas que tienes una vida aburrida o interesante?",
    "¿Qué cosas te gustaría cambiar de tu vida?",
    "Describe un día típico en tu vida.",
    "Describe un fin de semana típico en tu casa.",
    "¿Con qué te desayunas todos los días?",
    "¿Qué ingredients necesitas para preparar tu plato favorito?",
    "¿Qué platos comes los domingos a la hora el almuerzo?",
    "¿Cómo ayuda tu papa en la cocina?",
    "¿A qué hora sales de casa todos los días para ir a la escuela?",
    "¿Cuál sería para ti una rutina ideal?",
    "¿Usas tu teléfono celular cada día? ¿A quiénes llamas con frecuencia?",
    "¿Para qué usas la computadora diariamente?"
];

//home and family
let all_hf = [
    "¿Pasas mucho tiempo con tu famila? Explica",
    "¿Qué hacen ustedes en familia?",
    "¿Tienes una buena relación con tus padres/tus hermanos? Explica",
    "¿Quién es la persona a la que más admiras en tu familia y por qué?",
    "¿Cómo ayudas en casa?",
    "¿Todas las personas en tu familia tienen responsabilidades? Explica",
    "¿Hay reglas en tu casa que no te gusta? ¿Cuáles son?",
    "Describe un momento inolvidable que pasaste con tu familia",
    "¿Qué piensas/opinas de tu familia?",
    "¿Cuántos hermanos mayores/menores tienes?",
    "¿Cómo te llevas con tus hermanos?/Describe la relación que tienes con tus hermanos.",
    "¿Qué hacen tus hermanos y tú juntos?",
    "¿Quién en tu familia se parece más a tu papá? Explica",
    "¿Qué prefieres, una familia grande o una familia pequeña? ¿Por qué?",
    "¿Cómo celebra tu familia la Navidad?",
    "Describe tu dormitorio/una habitación de tu casa",
    "¿Cuántas personas hay en tu familia?",
    "¿En tu familia ¿cuál es tu persona favorita y por qué?",
    "¿Qué tienes en común con esta persona?",
    "¿Qué oficio doméstico no le gusta hacer a esta persona?",
    "Menciona una regla familiar que no te guste obedecer.",
    "¿Con qué frecuencia visitas a tus abuelas?",
    "¿Cual es la actividad favorita de tu famila?",
    "¿Crees que la division de trabajos domésticos en tu casa es justa? Explica",
    "¿Dónde vives?",
    "¿Cuál es la profesión de tu mama/papa?",
    "¿Con quién prefieres pasar tu tiempo libre? Por qué?",
    "¿Eres hijo único o tienes hermanos?",
    "¿Crees que tus padres tartan igual a todos los hijos? Explica",
    "¿Cuántos nenes hay en tu familia?",
    "¿Qué es lo que más/menos te gusta de tu barrio?",
    "¿Con quiénes prefieres pasar tu tiempo libre, con tus amigos o con tus abuelos? ¿Por qué?"
]

let all_sport = [
    "¿Crees que es necesario hacer ejercicios? ¿Por qué?",
    "¿Cuáles son los beneficios de participar en un deporte?",
    "¿Cuál es tu grupo musical favorito?",
    "¿Por qué te gusta escuchar este grupo?",
    "¿Qué programas no te gusta ver en la televisión?",
    "¿Qué haces los sábados por la noche?",
    "Dime algo sobre una película que has visto recientemente.",
    "¿Qué clase de novelas te gustan? ¿Por qué?",
    "¿Conoces a un deportista famoso?",
    "¿Qué música te gusta/no te gusta escuchar?",
    "¿Por qué es importante que los jóvenes participen en actividades recreacionales?"
];

let all_school = [
    "¿Dónde está tu escuela?",
    "¿Te gusta esta escuela? ¿Por qué sí/Por qué no?",
    "¿Qué es lo que te gusta más/menos de tu clase de español?",
    "Describe tu uniforme.",
    "¿Cuántas horas pasas estudiando los fines de semana?",
    "¿Por qué estudias español?",
    "¿Te gusta ir a la asamblea? ¿Por qué?",
    "¿Cuáles son los diferentes clubes en tu escuela? ¿Cuándo se reúnen?",
    "¿A qué hora es el recreo en tu escuela?",
    "Si fueras director/directora, ¿qué cambios harías en tu escuela?",
    "¿Traes almuerzo o lo compras en la escuela? ¿Por qué?",
    "Describe a tu profesor/a favorito/a.",
]

let questions = null;

function randomize() {
    console.log("randomizing");

    if(questions == null) {
        questions = document.getElementsByClassName("questions");
    }

    let random_questions = all_travel.sort(() => .5 - Math.random()).slice(0,3);
    random_questions = random_questions.concat(all_dr.sort(() => .5 - Math.random()).slice(0,3));
    random_questions = random_questions.concat(all_hf.sort(() => .5 - Math.random()).slice(0,3));
    random_questions = random_questions.concat(all_sport.sort(() => .5 - Math.random()).slice(0,3));
    random_questions = random_questions.concat(all_school.sort(() => .5 - Math.random()).slice(0,3));

    for (let i = 0; i < random_questions.length; i++) {
        const ques = random_questions[i];
        questions[i].innerHTML = ques;
    }
    
}


function getRndInteger(max) {
    return Math.floor(Math.random() * (max) );
}