
 //variáveis globais
var livros = []
var user = []
const containerName = document.getElementById("containerName")//div geral do acompanhamento
const userName = document.getElementById("userName") //coletar o nome do usuário
var writerUserName = document.getElementById("namedUser") //colocar o nome do usuário na página inicial
const bookContainer = document.getElementById("homeBook")//seçaõ geral do livro
//liberar o botão somente quando a caixa estiver preechida
var nextButton = document.getElementById("nextButton") //botão para prosseguir a navegação
//função para validação do nome do usuário

function nameValidation(){
    const divRes = document.getElementById("res");
    let useraNameLength = Number(userName)
    console.log(userName.value)
    console.log(useraNameLength)
    //validação no nome do usuário
    if(useraNameLength < 1){
        divRes.innerHTML = `Ainda não foi possível validar seu nome`
        divRes.style.color = `red`
        $(".res").fadeIn()
    }else{
        divRes.innerHTML = `Olá  seja Bem-vindo!`
        divRes.style.color = "green"
        $(".red").fadeIn()
        nextButton.style.display = "block"

    }
}


//função para a criação dos livros
document.getElementById("createBook").addEventListener("click", function(e){
    //window.alert("função disparou")
    var titleBook = document.getElementById("bookTitle").value//título do livro
    var autorBook = document.getElementById("autorLivro").value//autor do livro
    var totalPages = document.getElementById("NunPaginasTot").value // número total de páginas 
    var readPages = document.getElementById("NunPaginasLidas").value//quantidade de páginas lidas
    const warningText = document.getElementById("bookWarning")
    //para ocultar o botão 
    const btnCreateBook = document.getElementById("createBook")

    console.log(titleBook, autorBook, totalPages, readPages)
    //validação se há campos vazios
    
    if(titleBook == "" || autorBook == "" || totalPages == 0 || readPages == 0){
        warningText.innerHTML = `Nenhum campo pode ficar vazio`
        warningText.style.color = "red"
        //btnCreateBook.style.display = "none"
    }else if(readPages > totalPages){
        warningText.innerHTML = `O número de páginas é menor que as páginas lidas!`
        warningText.style.color = 'royalblue'
        //btnCreateBook.style.display = "none"
    }else{
        //validar a largura da barra de progresso de acordo com cada livro
        let progressBar = document.getElementById("progressBar")
        var widthBar = (readPages / totalPages) * 100;

        //para colocar o livro no array
        livros.push({
            nome: titleBook,
            autor: autorBook,
            pages: totalPages,
            readedPages: readPages,
            width: widthBar,

        })
        //variável para ver quantas páginas faltam
        let finalPages = Number(totalPages - readPages) 
        console.log(finalPages)
        //lista de livros
        let listBooks = document.getElementById("userBooks")
        
        //para resetar os inputs do formulário
        listBooks.innerHTML = ""


        livros.map(function(val){
            listBooks.innerHTML +=`
            <div class="booKCard" id="bookCard">
                <h4>`+val.nome+`</h4>
                <h6>Autor: `+val.autor+`</h6>
                <p>Páginas Lidas: `+val.readedPages+`</p>
                <p>Páginas Totais: `+val.pages+`</p>
                <p>Faltam: `+finalPages+` páginas</p>
                <div class="cardProgressBar" id="progressBar" style="width: `+val.width+`%;"></div>
            </div>
            `
            
        })
    }
    console.log(livros)
})

