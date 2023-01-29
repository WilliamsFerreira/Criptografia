const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function botaoCriptografia() {
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = " ";
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
    const textoDescriptografado = descriptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = " ";
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

    var textoCopiado = document.querySelector ("mensagem");
  
    /* Deixamos o texto selecionado (em azul) */
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); /* Para mobile */
  
    /* Copia o texto que está selecionado */
    document.execCommand("copy");     
}