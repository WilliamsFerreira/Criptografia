// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

var textoCriptografado;

function botaoCriptografia() {
    textoCriptografado = criptografar(document.getElementById("textoEntrada").value);
    //mensagem.value = textoCriptografado;
    //textArea.value = " ";
    document.getElementById("textoSaida").value = textoCriptografado;
}


function criptografar(stringCriptografia) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptografia = stringCriptografia.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringCriptografia.includes(matrizCodigo[i][0])) {
            stringCriptografia = stringCriptografia.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptografia;
}


function botaoDescriptografia() {
    var textoCript = descriptografar(document.getElementById("textoEntrada").value);
    document.getElementById("textoSaida").value = textoCript;
}


function descriptografar(stringDescriptografia) {

    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptografia = stringDescriptografia.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptografia.includes(matrizCodigo[i][1])) {
            stringDescriptografia = stringDescriptografia.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptografia;
}


function copiarTexto() {

    var textoCopiado = document.getElementById("textoSaida").value
    navigator.clipboard.writeText(textoCopiado);     
}
