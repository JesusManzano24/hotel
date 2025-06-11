document.addEventListener("DOMContentLoaded", function () {
    const imagenesHabitaciones = [
        "https://lh3.googleusercontent.com/pw/AP1GczPdf-O9eMFe1Wz0HjVvhhgzRuT9iP5nw4HDMwbK9r6-veRKrK8MaDPSkn1X7NqqXBbpgWOV_yM2hYlWgvE06SH2HoMQiVbfTQn_SUccq4qj1wOlzsd-OC0O_t3qYdiyDZeySBJes0Znw8VOQrjZbtk=w930-h620-s-no-gm?authuser=1",
        "https://lh3.googleusercontent.com/pw/AP1GczMjvFQzdiXxchZlBgwjJVunaIEqfEz6QA1T-a_gXJCORbNQX2YsWSRO6pi8UnQh11FQw15A1XlewIrkBJas-PVctMjdbSaEVPpnTKsNb69cDezFVon3ATurzeAvuDl061lrdqQgt1Fdm6UOQ_tZU4I=w851-h620-s-no-gm?authuser=1",
        "https://lh3.googleusercontent.com/pw/AP1GczP8B2lsArR68ZpU0MNWVKXNIlMv2fhExHJ1YMUa9Z2KkLTg0xraaagj_JWEGMy8kDJv4AA3OaUulj-VcdIusWdfxA8yCj-5uOTIUbiGZ3H1RG-gqyoi408-L1Ef_zJUzlhHdJPvT6SBG2dSt5kBAa8=w800-h600-s-no-gm?authuser=1",
        "https://lh3.googleusercontent.com/pw/AP1GczNYK7HCF39dW3b3Wh6x6_rE6GvDO7PAOs9CJgFHXSJ78zZL57DDe_WQ_hTOn446cpvNM43ZK_kPC0-eo_aZbPnOPN2zKNGRnql1-iXIkuwHn-Zbzv7hpwfFxgCy81yE7mG8sARFX1P2rPRiLYlAb1c=w930-h620-s-no-gm?authuser=1"
    ];

    let indiceActual = 0;
    const imagenElemento = document.getElementById("habitacionImagen");

    function cambiarImagen(direccion) {
        indiceActual += direccion;

        if (indiceActual >= imagenesHabitaciones.length) {
            indiceActual = 0;
        } else if (indiceActual < 0) {
            indiceActual = imagenesHabitaciones.length - 1;
        }

        imagenElemento.src = imagenesHabitaciones[indiceActual];
    }

    // Cargar primera imagen
    imagenElemento.src = imagenesHabitaciones[indiceActual];

    // Cambiar automáticamente cada 5 segundos
    setInterval(() => cambiarImagen(1), 5000);
});