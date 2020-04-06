import cipher from './cipher.js';


let mensagem = document.getElementById("msg");
let offset = document.getElementById("offset");
let btnCifrar = document.getElementById("cifrar");
let btnDecifrar = document.getElementById("decifrar");


btnCifrar.onclick = function () {
    if (mensagem.value == "" || offset.value == "") {
        alert("Verifique se inseriu a mensagem e o valor de deslocamento");

    } else {
        document.getElementById("resultado").innerHTML = cipher.encode(offset.valueAsNumber, mensagem.value);
    }

}

btnDecifrar.onclick = function () {
    if (mensagem.value == "" || offset.value == "") {
        alert("Verifique se inseriu a mensagem e o valor de deslocamento");
    } else {
        document.getElementById("resultado").innerHTML = cipher.decode(offset.valueAsNumber, mensagem.value);
    }

}


console.log(cipher);
