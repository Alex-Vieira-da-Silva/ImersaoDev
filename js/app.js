function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p class='font-color-meta'>Nada foi encontrado. Você precisa digita o nome de um filme ou série.</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let genero = "";
    let tags = "";


    // Itera sobre cada elemento (dado) no array de dados
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        genero = dado.genero.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Retorna apenas itens que estão na lista
        if (titulo.includes(campoPesquisa) || genero.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para cada item do resultado da pesquisa
            resultados += `
            <div class="item-resultado">
                <h2> <a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="font-color-meta">Descrição: ${dado.descricao}</p>
                <p class ="font-color-meta">Gênero: ${dado.genero}</p>
                <p class ="font-color-meta">Ano: ${dado.ano}</p>
                <p class="font-color-meta">Classificação: ${dado.classificacao}</p>
                <p class="font-color-meta">Elenco: ${dado.elenco}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p class='font-color-meta'>Nada foi encontrado.</p>";
    }

    // Atribui a string com os resultados formatados ao conteúdo HTML da seção
    section.innerHTML = resultados;

}


