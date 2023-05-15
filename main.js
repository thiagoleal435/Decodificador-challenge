// Guardar input na variavel textoinput
// gerar texto do input no lugar do campo de texto
// verificar se o texto é válido e não contem acentos

function criptografar(textoinput) {
    let result = "";
    for (let letra of textoinput) {
        switch (letra) {
            case 'a':
                result += "ai";
                break;

            case 'e':
                result += "enter";
                break;

            case 'i':
                result += "imes";
                break;

            case 'o':
                result += "ober";
                break;

            case 'u':
                result += "ufat";
                break;

            default:
                result += letra;
                break;
        }
    }
    return result;
}

function descriptografar(textoCriptografado) {
    textoCriptografado = textoCriptografado.replaceAll("ai", "a");
    textoCriptografado = textoCriptografado.replaceAll("enter", "e");
    textoCriptografado = textoCriptografado.replaceAll("imes", "i");
    textoCriptografado = textoCriptografado.replaceAll("ober", "o");
    textoCriptografado = textoCriptografado.replaceAll("ufat", "u");
    return textoCriptografado;
}

function copyToClipboard() {
    let msgResult = document.getElementById("msgResult").innerText;
    navigator.clipboard.writeText(msgResult);

    let resultSection = document.getElementById("result");
    let height = resultSection.getElementsByClassName("msg-result")[0].clientHeight;

    resultSection.innerHTML = `
    <div class="msg-copied fade-in" style="min-height: ${height}px">
        <h3>Mensagem copiada</h2>
    </div>
    `
    showResultTimeout = setTimeout(function () {
        showResult(msgResult);
    }, 1500);
}