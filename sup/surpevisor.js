const formulario = document.getElementById("supervisor");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const entrada = document.getElementById("entrada").value;
    const un = document.getElementById("UN").value;

    if (entrada === "0345" && un === "443") {
        window.location.href = ""
    } else if (entrada === "0345" && un === "567") {
        window.location.href = ""
    
    } else if (entrada === "0345" && un === "321") {
        window.location.href = ""
    
    } else {
        document.getElementById("mensagem").textContent = "Entrada ou UN não encontrado";
    }
 
});
