
class Tarefa {
    constructor(texto, id) {
        this.texto = texto;
        this.id = id;
        this.completa = false;
    }
}

let tarefas = [];

function adicaoTexto() {
    let valorTexto = document.getElementById('input-tarefa').value.trim();

    if (valorTexto === '') {
        return;
    }

    let novaTarefa = new Tarefa(valorTexto, tarefas.length);
    tarefas.push(novaTarefa);

    document.getElementById('input-tarefa').value = '';

    mostrarNaTela();
}

function mostrarNaTela() {
    document.getElementById('lista-tarefas').innerHTML = '';

    tarefas.forEach(function(tarefasForeach, indice) {
        let apareceNaTela = document.createElement('li');
        apareceNaTela.classList.add('tarefa-item');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox-tarefa');
        checkbox.id = `checkbox-${indice}`;
        checkbox.checked = tarefasForeach.completa;

        let areaMaior = document.createElement('label');
        areaMaior.htmlFor = checkbox.id;
        areaMaior.textContent = tarefasForeach.texto;

        apareceNaTela.appendChild(checkbox);
        apareceNaTela.appendChild(areaMaior);

        if (tarefasForeach.completa === true) {
            apareceNaTela.classList.add('tarefa-completa');
        }

        document.getElementById('lista-tarefas').appendChild(apareceNaTela);

        checkbox.addEventListener('change', function() {
            if (checkbox.checked === true) {
                tarefasForeach.completa = true;
                apareceNaTela.classList.add('tarefa-completa');
            } else {
                tarefasForeach.completa = false;
                apareceNaTela.classList.remove('tarefa-completa');
            }

            atualizarContadores();
        });

        let botaoDelete = document.createElement('button');
        botaoDelete.classList.add('btn-delete');
        botaoDelete.textContent = 'EXCLUIR';

        apareceNaTela.appendChild(botaoDelete);

        botaoDelete.addEventListener('click', function() {
            tarefas.splice(indice, 1);
            mostrarNaTela();
        });
    });

    atualizarContadores();
}

function atualizarContadores() {
    let completas = tarefas.filter(function(tarefa) {
        return tarefa.completa === true;
    }).length;

    document.getElementById('info-tarefas').textContent =
        `Total: ${tarefas.length} | Completas: ${completas}`;
}

document.getElementById('btn-add').addEventListener('click', adicaoTexto);

document.getElementById('input-tarefa').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicaoTexto();
    }
});
