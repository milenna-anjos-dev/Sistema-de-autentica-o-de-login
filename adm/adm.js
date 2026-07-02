const formulario = document.getElementById("adm");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const entrada = document.getElementById("entrada").value;

    if (entrada === "0023") {
        window.location.href = ""
    } else {
        document.getElementById("mensagem").textContent = "Número de entrada do adm não encontrado";
    }
 
});
