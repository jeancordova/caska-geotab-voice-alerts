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

    actualizarEstado("Última alerta: " + unidad + " ingresó a " + geocerca);
}

function actualizarEstado(texto) {
    const estado = document.getElementById("estado");

    if (estado) {
        estado.innerText = texto;
    }

    console.log(texto);
}

function iniciarAddIn() {
    actualizarEstado("Estado: Add-In iniciado correctamente");

    console.log("===== INICIO PRUEBA API GEOTAB =====");
    console.log("typeof api:", typeof api);
    console.log("typeof geotab:", typeof geotab);

    if (typeof api !== "undefined") {
        console.log("API Geotab detectada");
    } else {
        console.log("API Geotab NO detectada");
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarAddIn);
} else {
    iniciarAddIn();
}
