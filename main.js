function hablarAlerta(texto) {
    const mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = "es-MX";
    mensaje.rate = 1;
    mensaje.pitch = 1;
    speechSynthesis.speak(mensaje);
}

function probarVoz() {
    hablarAlerta("Alerta de prueba desde Caska");
}
