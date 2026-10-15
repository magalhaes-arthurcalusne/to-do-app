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





function mostrarNaTela() {
    document.getElementById('lista-tarefas').innerHTML = '';

    tarefas.forEach(function(tarefasForeach, indice) {
        console.log(`${tarefasForeach.texto}`);

        let apareceNaTela = document.createElement("li");
        apareceNaTela.classList.add('tarefa-item');
      
        if (tarefasForeach.completa === true ) {
             apareceNaTela.classList.add('tarefa-completa');
        }

        apareceNaTela.textContent = tarefasForeach.texto;
        document.getElementById('lista-tarefas').appendChild(apareceNaTela);
        
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefasForeach.completa;
        apareceNaTela.appendChild(checkbox);
        checkbox.addEventListener('change', function () {
        
            if (checkbox.checked === true ) {
                tarefasForeach.completa = true;
                apareceNaTela.classList.add('tarefa-completa');
            } else {
                tarefasForeach.completa = false;
                apareceNaTela.classList.remove('tarefa-completa');
            }

        })


        let botaoDelete = document.createElement("button");
        botaoDelete.classList.add('btn-delete');
        apareceNaTela.appendChild(botaoDelete);
        botaoDelete.textContent = 'EXCLUIR';

        botaoDelete.addEventListener('click', function() {
            tarefas.splice(indice, 1);
            mostrarNaTela();
        });
    });

    atualizarContadores();
}

function atualizarContadores() {

    document.getElementById('info-tarefas').textContent = `Total: ${tarefas.length} | Completas: 0`;
}




document.getElementById('btn-add').addEventListener("click", adicaoTexto);

document.getElementById("input-tarefa").addEventListener('keydown', function(event) {
   
    if (event.key === 'Enter') {
        adicaoTexto()
    }
});