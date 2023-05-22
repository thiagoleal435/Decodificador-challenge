function criptografar() {
    const texto = textArea.value;

    if (/[^a-z\s]/.test(texto)) {
        alert("A mensagem contém caracteres especiais ou letras maiúsculas. Por favor, remova-os antes de criptografar.");
        return;
    }

    let result = "";

    Array.from(texto).forEach(letra => {

        switch (letra) {
            case 'e':
                result += 'enter';
                break;
            case 'i':
                result += 'imes';
                break;
            case 'a':
                result += 'ai';
                break;
            case 'o':
                result += 'ober';
                break;
            case 'u':
                result += 'ufat';
                break;
            default:
                result += letra;
        }
    });

    document.querySelector('.container-direita').innerHTML = `<div class="container-direita-escrito"><div class="container-p"><p id="textResult">${result}</p></div>
    <div class="botao-copiar"><button id="copiar" onclick="copiarTexto()">Copiar</button></div></div > `;

}

function descriptografar() {

    let result = textArea.value;

    if (/[^a-z\s]/.test(result)) {
        alert("A mensagem contém caracteres especiais ou letras maiúsculas. Por favor, remova-os antes de descriptografar.");
        return;
    }

    result = result.replace(/ai/g, "a");
    result = result.replace(/enter/g, "e");
    result = result.replace(/imes/g, "i");
    result = result.replace(/ober/g, "o");
    result = result.replace(/ufat/g, "u");

    document.querySelector('.container-direita').innerHTML = `<div class="container-direita-escrito"><div class="container-p"><p id="textResult">${result}</p></div>
    <div class="botao-copiar"><button id="copiar" onclick="copiarTexto()">Copiar</button></div></div > `;
}

function copiarTexto() {

    let textoResult = document.getElementById("textResult");

    inputTemp = document.createElement('textarea');
    inputTemp.value = textoResult.textContent;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand("copy");

    alert("Texto copiado para a área de transferência!");
}

var textArea = document.getElementById('textarea');
var div = document.querySelector('.container-direita');
var btnCrip = document.getElementById('criptografar');
var btnDescrip = document.getElementById('descriptografar');

btnCrip.onclick = criptografar;
btnDescrip.onclick = descriptografar;