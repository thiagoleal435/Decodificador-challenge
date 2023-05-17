// Guardar input na variavel textoinput
// gerar texto do input no lugar do campo de texto
// verificar se o texto é válido e não contem acentos

function criptografar() {
    let texto = textarea.value;
    let result = "";

    for (let letra of texto) {
        switch (letra) {
            case 'a', 'A':
                result += "ai";
                break;

            case 'e', 'E':
                result += "enter";
                break;

            case 'i', 'I':
                result += "imes";
                break;

            case 'o', 'O':
                result += "ober";
                break;

            case 'u', 'U':
                result += "ufat";
                break;

            default:
                result += letra;
                break;
        }
    }
    // Adicionar div no paragrafo e estilizar 
    // div.innerHTML = `<div class="container-direita-escrito"><p>${result}</p>
    <div class="botao-copiar"><button id="copiar" onclick="copiarTexto()">Copiar</button></div></div > `;
}

function descriptografar(texto) {

    texto = textarea.value;

    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");

    div.innerHTML = `< div class="container-direita-escrito" ><p>${texto}</p>
    <div class="botao-copiar"><button id="copiar" onclick="copiarTexto()">Copiar</button></div></div > `;
}

function copiarTexto() {
    let textoP = div.querySelector("p");
    let inputTemp = document.createElement("input");

    inputTemp.value = textoP.textContent;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemp);

    alert("Texto copiado para a área de transferência!");
}


let div = document.querySelector('.container-direita');
let textarea = document.getElementById('textarea');
let btnCrip = document.getElementById('criptografar');
let btnDescrip = document.getElementById('descriptografar');

btnCrip.onclick = criptografar;
btnDescrip.onclick = descriptografar;