function pesquisar() {
  // 1. Imprime o conteúdo do array 'dados' no console para fins de depuração.
  console.log(dados);

  // 2. Seleciona o elemento HTML com o ID "resultados-pesquisa" e o armazena na variável 'section'.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa estiver vazio
  if(campoPesquisa == ""){
    section.innerHTML = "<p>Nada encontrado</P>"
    return
  }
  
  campoPesquisa = campoPesquisa.toLowerCase()

  // 3. Inicializa uma string vazia para armazenar o HTML que será gerado.
  let resultados = "";
  let titulo = "";
  let descrição = "";
  let tags = "";
  // 4. Itera sobre cada elemento (objeto) dentro do array 'dados'.
  for (let dado of dados) { 
    titulo = dado.titulo.toLowerCase()
    descrição = dado.descrição.toLocaleLowerCase()
    tags = dado.tags.toLocaleLowerCase()

    //se titulo includes campoPesquisa
  if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
    
    // 5. Constrói uma string de HTML para cada item, formatando-a usando template literals.
    //    * Cria um div com a classe 'item-resultado'.
    //    * Cria um título h2 com um link para o dado.titulo.
    //    * Cria um parágrafo com a classe 'descricao-meta' para exibir a descrição.
    //    * Cria outro link para mais informações.
    resultados += `
      <div class="item-resultado">
        <h2>
          <a href="${dado.link}" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descrição-meta">${dado.descrição}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>
    `;}
  }
  if(!resultados){
    resultados="nada encontrado"
  }

  // 6. Atribui o HTML gerado ao conteúdo do elemento 'section', substituindo o conteúdo anterior.
  section.innerHTML = resultados;
}
