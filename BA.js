    //variáveis globais
const containerName = document.getElementById("containerName")//div geral do acompanhamento
var userName = document.getElementById("userName") //coletar o nome do usuário
var writerUserName = document.getElementById("namedUser") //colocar o nome do usuário na página inicial
var res = document.getElementById("res") //alerta caso a caixa esteja vazia

//liberar o botão somente quando a caixa estiver preechida
var buttonOk = document.getElementById("nextButton") //botão para prosseguir a navegação

writerUserName.innerText = `Olá, seja bem vindo ${userName.value}` 
function nameUser(){
    var userNameNumber = Number(userName.value);
    console.log(userNameNumber)

    if(userNameNumber < 1){
        res.innerText = "Nome do usuário não pode ficar vazio"
        res.style.color = "red"
        buttonOk.style.display = "none"
    }else{
        res.innerText = "Tudo ok, pode prosseguir"
        res.style.color = "green"
        buttonOk.style.display = "flex"
    }
}
nameUser()

/*função para mudar o nome do usuário */
function changeName(){
    writerUserName.innerHTML = userName.value;
    console.log(containerName)
}
changeName()

//função para a criação dos livros
function createbook(){
    var titleBook = document.getElementById("bookTitle")//título do livro
    var autorBook = document.getElementById("autorLivro")//autor do livro
    var totalPages = document.getElementById("NunPaginasTot") // número total de páginas 
    var readPages = document.getElementById("NunPaginasLidas")

    //validação se há componentes vazios
    const titleBookN = Number(titleBook.value);
    const autorBookN = Number(autorBook.value);
    const totalPagesN = Number(totalPages.value);
    const readPagesN = Number(readPages.value);

    var inputAlert = document.querySelectorAll(".bookInput") //inputs para aletração
    var alertText = document.querySelector(".alertText")
    
    if(titleBookN < 1||autorBookN < 1||totalPagesN<1||readPagesN<1){
        //alerta em forma de texto
        alertText.innerHTML = "Nenhum campo pode ficar vazio";
        alertText.style.color = "red";
        //mudança de borda dos inputs
        
    }else if(totalPagesN < readPagesN){
        //validação caso o usuário insira algum valor incorreto
        alertText.innerHTML = "O número de páginas é menor que a quantidade de páginas lidas!"
        alertText.style.color = "orange"
    }else{
        var cardTitleBook = document.getElementById("cardTitle"); //para escrever o título do livro
        var cardAutorBook = document.getElementById("cardAutor");
        var cardReadPages = document.getElementById("cardReadPages");
        var cardTotalPages = document.getElementById("cardTotalPages");
        var cardProgressBar = document.getElementById("progressBar");
        var toConcluseBook = document.getElementById("toConcluseBook")
        //mudanças de acordo com os dados do livro
        var cardToConcluseBook = totalPagesN - readPagesN;
        //alterar o tamanho da barra de acordo com o total de páginas lidas
        var widthBar = (readPagesN /totalPagesN ) *100;
        function writer(){
            cardTitleBook.innerHTML = titleBook.value
            cardAutorBook.innerText = autorBook.value
            cardReadPages.innerText = `Você leu um total de ${readPagesN} páginas`
            cardTotalPages.innerText = totalPagesN;
            toConcluseBook.innerText = `Faltam ${cardToConcluseBook} páginas para concluir o livro`

            //alterar o tamanho da barra
            if(widthBar < 10){
                cardProgressBar.style.backgroundColor = "yellow"
                cardProgressBar.style.width = "10%"
            }else if( 20 > widthBar >= 10){
                cardProgressBar.style.backgroundColor = "orange"
                cardProgressBar.style.width = "20%"
            }else if( 40 > widthBar >= 20){
                cardProgressBar.style.backgroundColor = "greenyellow"
                cardProgressBar.style.width = "40%"
            }else if( 60 > widthBar >= 40){
                cardProgressBar.style.backgroundColor = "#024d16"
                cardProgressBar.style.width = "60%"
            }else if( 80 > widthBar >= 60){
                cardProgressBar.style.backgroundColor = "#016d1e"
                cardProgressBar.style.width = "80%"
            }else{
                cardProgressBar.style.backgroundColor = "#00ff6a"
                cardProgressBar.style.width = "100%"
            }
        }
        writer()
    }
}