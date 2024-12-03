// script.js

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name && email) {
        alert("⁠Gracias por contactarnos, ${name}! Hemos recibido tu mensaje");
    } else {
        alert("Por favor, completa todos los campos.");
    }
});