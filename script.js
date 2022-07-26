var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){

    e.preventDefault() //Bloqueia refresh da pagina

    let urlForm = 'https://pokeapi.co/api/v2/pokemon/'; //URL da pesquisa 

    let nome = document.getElementById('name')//Valor do input name
   
    urlForm = urlForm + this.name.value//Concatena url com inputname

    urlForm = urlForm.toLocaleLowerCase()

    let resposta = document.getElementById('content')//ID content

    let imagem = document.getElementById('imgPokemon')//Id imagem

    let html = ''//resposta em HTML

    fetch(urlForm)
         .then(resposta => resposta.json())
         .then(function (data) {
            console.log(data)
            html = 'Nome: ' + maiuscula (data.name) + '<br>'
            html = html + 'Tipo: ' + maiuscula (data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default +"'>"
         })
         .catch(function(err){
            console.log(err)
         })

    
});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}

