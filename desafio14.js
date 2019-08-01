const Cima = 38, Baixo = 40, Direita = 39, Esquerda = 37;

var cursorIndices = { lista : 0, item : 0 };

function moveCursor( item, lista )
{
    cursorIndices.item += item;
    cursorIndices.lista += lista;
    
    arrUiListas = document.getElementsByTagName("ul");
    
    if(cursorIndices.lista < 0)
        cursorIndices.lista = (arrUiListas.length -1);
    
    if(cursorIndices.lista >= arrUiListas.length)
        cursorIndices.lista = 0;

    arrUiItens = arrUiListas[cursorIndices.lista].getElementsByTagName("li");

    if(cursorIndices.item < 0)
        cursorIndices.item = (arrUiItens.length -1);

    if(cursorIndices.item >= arrUiItens.length)
        cursorIndices.item = 0;

    atualizaUi();
}

function atualizaUi()
{
    var selecaoAntiga = document.getElementsByClassName("selected");
    if(selecaoAntiga.length > 0)
        selecaoAntiga[0].classList.remove("selected");

    var selecaoNova;
    arrUiListaSelecionada = document.getElementsByTagName("ul")[cursorIndices.lista];
    arrUiItemSelecionado = arrUiListaSelecionada.getElementsByTagName("li")[cursorIndices.item];
    arrUiItemSelecionado.classList.add("selected");

}

function teclaPressionadaEvent() {
    switch (event.keyCode) {
    case Cima:
        moveCursor(0,-1);
        break;
    case Baixo:
        moveCursor(0,1);
        break;
    case Direita:
        moveCursor(1,0);
        break;
    case Esquerda:
        moveCursor(-1,0);
        break;
    }
}

document.addEventListener("keydown", teclaPressionadaEvent);
