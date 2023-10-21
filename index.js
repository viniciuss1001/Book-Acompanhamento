
 //variáveis globais
var livros = []
var user = []
const containerName = document.getElementById("containerName")//div geral do acompanhamento
const userName = document.getElementById("userName") //coletar o nome do usuário
var writerUserName = document.getElementById("namedUser") //colocar o nome do usuário na página inicial
const bookContainer = document.getElementById("homeBook")//seçaõ geral do livro
//liberar o botão somente quando a caixa estiver preechida
var nextButton = document.getElementById("nextButton") //botão para prosseguir a navegação
//função de bem vindo

userName.addEventListener("change", function(){
    const divRes = document.getElementById("res");
    let useraNameLength = Number(userName)
    console.log(useraNameLength)
    //validação no nome do usuário
    if(useraNameLength < 1){
        divRes.innerHTML = `Ainda não foi possível validar seu nome`
        divRes.style.color = `red`
        $(".res").fadeIn()
    }else{
        divRes.innerHTML = `Olá ${userName.value} seja Bem-vindo!`
        divRes.style.color = "green"
        $(".red").fadeIn()
        nextButton.style.display = "block"
    }
})


//função para a criação dos livros
document.getElementById("createBook").addEventListener("click", function(){
    var titleBook = document.getElementById("bookTitle").value//título do livro
    var autorBook = document.getElementById("autorLivro").value//autor do livro
    var totalPages = document.getElementById("NunPaginasTot") // número total de páginas 
    var readPages = document.getElementById("NunPaginasLidas")//quantidade de páginas lidas
    const warningText = document.getElementById("bookWarning")
    //para ocultar o botão 
    const btnCreateBook = document.getElementById("createBook")
    //validação se há campos vazios
    if(titleBook.length == 0 || autorBook.length == 0 || totalPages.length == 0 || readPages.length ==0){
        warningText.innerHTML = `Nenhum campo pode ficar vazio`
        warningText.style.color = "red"
        btnCreateBook.style.display = "none"
    }else if(readPages.length > totalPages.length){
        warningText.innerHTML = `O número de páginas é menor que as páginas lidas!`
        warningText.style.color = 'royalblue'
        btnCreateBook.style.display = "none"
    }else{
        //para colocar o livro no array
        livros.push({
            nome: titleBook.value,
            autor: autorBook.value,
            pages: totalPages.value,
            readedPages: readPages.value
        })
        
        let listBooks = document.getElementById("userBooks")
    }
})
/*
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
*/

