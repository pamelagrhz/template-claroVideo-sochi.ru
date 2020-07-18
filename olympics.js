//fecha limite 
var countDownDate = new Date("Jul 24, 2020 00:00:00").getTime();

//funcion para aumentar cada 1 segundo 
var x = setInterval(function() {
    document.getElementById("title").innerHTML = "FALTAN";
    // Obtenemos la fecha de hoy 
    var today = new Date().getTime();

    // Guardamos en una variable la diferencia 
    var distance = countDownDate - today;

    // Hacemos el cálculo por minutos, segundos y horas 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // mostramos el elemento en demo 
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        days = 0;
        document.getElementById("title").innerHTML = "TERMINÓ EL TIEMPO!";
        document.getElementById("contador").innerHTML = "";
    }
}, 1000);

var src;

function clickMe(name) {
    switch (name) {
        case "uno":
            document.getElementById("video").src = "https://www.youtube-nocookie.com/embed/EfK-WX2pa8c";
            break;
        case "dos":
            document.getElementById("video").src = "https://www.youtube-nocookie.com/embed/bJ9r8LMU9bQ";
            break;
        case "tres":
            document.getElementById("video").src = "https://www.youtube-nocookie.com/embed/AL8chWFuM-s";
            break;
        case "cuatro":
            document.getElementById("video").src = "https://www.youtube-nocookie.com/embed/ttJBdr6eBuo";
            break;
        default:

    }


}