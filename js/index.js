const formulario = document.getElementById("furmulario-login");

formulario.addEventListener("submit", function(event) {

    event.preventDefault(); //para o evento do formulario

    const numero = document.getElementById("numero").value; //pega o input

    if (numero === "1344") {
        window.location.href = "/adm/adm.html"; //redireciona para pagina do adm
   
    } else if (numero === "1247") {
        window.location.href = "/sup/surpevisor.html"; //pagina do supervisor
    
    } else if (numero === "1542") {
        window.location.href = "/usu/usuario.html"; //pagina do usuario comum
    
    } else {
        document.getElementById("mensagem").textContent = "Número de entrada não encontrado";
    }
       //text.content trata tudo como texto muhehe
});
