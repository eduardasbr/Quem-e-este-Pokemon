function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa){
        section.innerHTML = "<p>Parece que o campo de busca ficou vazio... Tente procurar por um Pokémon!.</p>"
       return
    }
    
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Parece que o campo de busca ficou vazio... Tente procurar por um Pokémon!</p>"
       return
    }

    if (campoPesquisa == " "){
        section.innerHTML = "<p>Parece que o campo de busca ficou vazio... Tente procurar por um Pokémon!</p>"
       return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    console.log(campoPesquisa)
    
    
    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += `
           <div class="item-resultado">
                    <h2 
                      class="titulo">${dado.titulo}
                    </h2>
                     <p class="descricao-meta">;${dado.descricao}</p>
                  <a href="${dado.link}" target="_blank">Mais informações</a>
                 </div>
    `
        }
        
    }
    
    if (!resultados){
        resultados = "<p>Nenhum Pokémon localizado! Tem certeza que isso é um Pokémon?</p>"
    }
    
    section.innerHTML = resultados
}



