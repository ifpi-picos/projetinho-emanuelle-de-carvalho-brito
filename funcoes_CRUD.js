import {tarefas, tarefasConcluidas} from './listas'


export function adicionar(){
    let novoTitulo = prompt('Título: ')
    let novaDescricao = prompt('Descrição: ')
    let novoVencimento = prompt('Vencimento: ')
    let novaPrioridade = prompt(`Prioridade:`)

    let novaTarefa = {
        titulo: novoTitulo,
        descricao: novaDescricao,
        vencimento: novoVencimento,
        prioridade: novaPrioridade
    }

    tarefas.push(novaTarefa)

    console.log(tarefas)
}


export function editar(){
    let alterarTarefa = prompt('Qual tarefa deseja alterar? ')

    const index = tarefas.findIndex((tarefa) => tarefa.titulo === alterarTarefa)

    if (index !== -1){
        let editarTitulo = prompt('Novo título: ')
        let editarDescricao = prompt('Nova descrição: ')
        let editarVencimento = prompt('Novo vencimento: ')
        let editarPrioridade = prompt('Nova prioridade: ')

        
        tarefas[index] = {
            titulo: editarTitulo,
            descricao: editarDescricao,
            vencimento: editarVencimento,
            prioridade: editarPrioridade
        }
        console.log(tarefas)
    }
}



export function remover(){
    let escolha = Number(prompt(`
        1 - Pendentes
        2 - concluídas
        `))

    if (escolha === 1){
        let removerTarefa = prompt('Qual tarefa deseja remover? ')
        let procurarTarefa = tarefas.findIndex((tarefa) => tarefa.titulo === removerTarefa)

        if(procurarTarefa != -1){
            let pergunta = prompt('Tem certeza dessa ação? ').trim().toLowerCase()
            
            if (pergunta === 'sim'){
                tarefas.splice(procurarTarefa, 1)
                console.log(tarefas)
                console.log('Tarefa removida! ')
            }
        }
    } else{
        let removerTarefa = prompt('Qual tarefa deseja remover? ')
        let procurarTarefa = tarefasConcluidas.findIndex((tarefa) => tarefa.titulo === removerTarefa)

        if(procurarTarefa != -1){
            let pergunta = prompt('Tem certeza dessa ação? ').trim().toLowerCase()
            
            if (pergunta === 'sim'){
                tarefasConcluidas.splice(procurarTarefa, 1)
                console.log(tarefasConcluidas)
                console.log('Tarefa removida! ')
            }
        }
    }
    
}


