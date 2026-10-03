class Tarefa {
    constructor(texto, id) {
    this.texto = texto;
    this.id = id;
    this.completa = false;
    }
}

let tarefas = [];

function adicaoTexto () {

    let valorTexto = document.getElementById('input-tarefa').value;
  let novaTarefa =  new Tarefa(valorTexto,tarefas.length );
  tarefas.push(novaTarefa);
  mostrarNaTela();
}


function mostrarNaTela () {
    
    document.getElementById('lista-tarefas').innerHTML = ''

    tarefas.forEach(function(tarefasForeach) {
        console.log(`${tarefasForeach.texto}`);
        let apareceNaTela = document.createElement("li");
        apareceNaTela.classList.add('tarefa-item');
        apareceNaTela.textContent = tarefasForeach.texto; 
        document.getElementById('lista-tarefas').appendChild(apareceNaTela);
        let botaoDelete = document.createElement("button");
        botaoDelete.classList.add('btn-delete');
        apareceNaTela.appendChild(botaoDelete);
        botaoDelete.textContent = 'EXCLUIR'
    }
)};


document.getElementById('btn-add').addEventListener("click", adicaoTexto);