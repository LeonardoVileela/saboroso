function verify() {
    nome = document.getElementById("inputName").value
    email = document.getElementById("inputEmail").value
    pessoas = document.getElementById("inputPeople").value
    data = document.getElementById("inputDate").value
    horas = document.getElementById("inputTime").value
    document.getElementById('submitReservation').type = '';

    if (nome == "") {
        alert("Digite o nome")
    } else if (email == "") {
        alert("Digite o email")

    } else if (pessoas == "") {
        alert("Insira a quantidade de pessoas")

    } else if (data == "") {
        alert("Insira uma data")

    } else if (horas == "") {
        alert("Insira a hora")

    } else {
        document.getElementById('submitReservation').type = 'submit';

    }
}
