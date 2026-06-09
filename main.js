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

function probarAlertaManual() {

    const unidad = "CAMION-22";
    const geocerca = "Guadalajara";

    hablarAlerta(
        `Alerta. La unidad ${unidad} ingresó a la geocerca ${geocerca}`
    );

    document.getElementById("estado").innerText =
        "Última alerta: " + unidad + " ingresó a " + geocerca;
}

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("estado").innerText =
        "Estado: Add-In iniciado correctamente";

    console.log("Caska Voice Alerts iniciado");

});
