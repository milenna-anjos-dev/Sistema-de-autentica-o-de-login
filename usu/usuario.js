const formulario = document.getElementById("usuario");

formulario.addEventListener("submit", function(event){

event.preventDefault();

const entrada = document.getElementById("entrada").Value;

if (entrada === "0679" ) {
        window.location.href = ""
    
} else {
    document.getElementById("mensagem").textContent = "Número de entrada não encontrado";
}

});