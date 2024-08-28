import {adicionar, editar, remover} from './funcoes_CRUD.js'

import {adicionandoVerificacao, converter, exibirTarefas, ordenar, filtrar, marcarConcluida, pesquisar, resumir} from './funcoes_exibir.js'
import {tarefas, tarefasConcluidas } from './listas.js'

let loop = true

while (loop === true){
    let menu = Number(prompt(`
        -- Gerenciador de Tarefas --
    
        1 - Adicionar 
        2 - Remover 
        3 - Exibir
        4 - Editar
        5 - Ordenar
        6 - Pesquisar
        7 - Filtrar
        8 - Marcar como concluída 
        9 - Resumir 
        10 - Encerrar
    
        `))
    
    switch(menu){
        case 1: 
            adicionar()
    
        break;

        case 2: 
            remover()

        break;

        case 3: 
            exibirTarefas()

        break;

        case 4:
            editar()

        break;

        case 5:
            ordenar()

        break;

        case 6:
            pesquisar()

        break;

        case 7:
            filtrar()

        break;

        case 8:
            marcarConcluida()

        break;

        case 9:
            resumir()

        break;

        case 10: 
        console.log(`
            -- Tarefas pendentes --`)
        for (let imprimindo of tarefas){
            console.log(`
            Título: ${imprimindo.titulo}
            Descrição: ${imprimindo.descricao}
            Vencimento: ${imprimindo.vencimento}
            Prioridade: ${imprimindo.prioridade}`)
        }

        console.log(`
            -- Tarefas concluídas --`)
        for (let concluída of tarefasConcluidas){
            console.log(`
            Título: ${concluída.titulo}
            Descrição: ${concluída.descricao}
            Vencimento: ${concluída.vencimento}
            Prioridade: ${concluída.prioridade}
            `)
        }

        loop = false;
        break; 

        default:
            console.log('Opção inválida! ')

    }
    
}




