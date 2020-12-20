function verify() {
    nome = document.getElementById("inputName").value
    email = document.getElementById("inputEmail").value
    message = document.getElementById("inputMessage").value
    document.getElementById('submitContact').type = '';

    if (nome == "") {
        alert("Digite o nome")
    } else if (email == "") {
        alert("Digite o email")

    } else if (message == "") {
        alert("Insira a Mensagem")

    } else {
        document.getElementById('submitContact').type = 'submit';

    }
}
