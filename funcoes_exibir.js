import { tarefas, tarefasConcluidas } from "./listas"


export function converter(){
    tarefas.sort((objetoA, objetoB) => {
            
        let dataA = objetoA.vencimento.split('/')
        let dataB = objetoB.vencimento.split('/')

        let dateA = new Date(`${dataA[2]}-${dataA[1]}-${dataA[0]}`)
        let dateB = new Date(`${dataB[2]}-${dataB[1]}-${dataB[0]}`)

        return dateA - dateB
    })
  
    console.log(`
        -- Tarefas pendentes --`)
    for (let objeto of tarefas){
        console.log(`
           Título: ${objeto.titulo}
           Descrição: ${objeto.descricao}
           Prioridade: ${objeto.prioridade}
           Vencimento: ${objeto.vencimento}
           `)
    }
}




export function exibirTarefas(){
     console.log(`
        -- Tarefas pendentes --`)
     for (let pendente of tarefas){
         console.log(`
             Título: ${pendente.titulo}
             Descrição: ${pendente.descricao}
             Vencimento: ${pendente.vencimento}
             Prioridade: ${pendente.prioridade}
             
             `)
     }

     console.log(`
        -- Tarefas concluídas --`)
     for (let concluida of tarefasConcluidas){
         console.log(`
             Título: ${concluida.titulo}
             Descrição: ${concluida.descricao}
             Vencimento: ${concluida.vencimento}
             Prioridade: ${concluida.prioridade}
             
             `)
     }
}



export function ordenar(){
    let ordenar = Number(prompt(`
        1 - Vencimento
        2 - Prioridade
        3 - Criação
        
        `))

    if (ordenar === 1){
        converter()

    } else if (ordenar === 2){

        tarefas.sort((a, b) => {a.prioridade - b.prioridade})
        // Alterar ordenação
        console.log(`
            -- Tarefas pendentes --
            `)

        for (let prioridades of tarefas){
            console.log(`
             Título: ${prioridades.titulo}
             Descrição: ${prioridades.descricao}
             Vencimento: ${prioridades.vencimento}
             Prioridade: ${prioridades.prioridade}
                `)
        }
    } else{
        for (let recente of tarefas){
            console.log(`
             Título: ${recente.titulo}
             Descrição: ${recente.descricao}
             Vencimento: ${recente.vencimento}
             Prioridade: ${recente.prioridade}
                `)
        }
    }
}



export function filtrar(){
    let filtrar = Number(prompt(`
        1 - Pendentes
        2 - Concluídas
        3 - Prioridade
        4 - Vencimento 

        `
   ))

   if (filtrar === 1){
       console.log(`
           -- Tarefas pendentes --
           `)
       for (let filtarPendente of tarefas){
           console.log(`
               Titulo: ${filtarPendente.titulo}
               Descrição: ${filtarPendente.descricao}
               Vencimento: ${filtarPendente.vencimento}
               Prioridade: ${filtarPendente.prioridade}

               `)
       }
   } else if (filtrar === 2){
       console.log(`
           -- Tarefas concluídas --
           `)
       for (let filtarConcluida of tarefasConcluidas){
           console.log(`
               Titulo: ${filtarConcluida.titulo}
               Descrição: ${filtarConcluida.descricao}
               Vencimento: ${filtarConcluida.vencimento}
               Prioridade: ${filtarConcluida.prioridade}

               `
           )
   }

}   else if(filtrar === 3){
    let descobrirPrioridade = prompt('Digite a prioridade: ').trim().toLowerCase()
            let procurarPrioridade = tarefas.filter((tarefa) => tarefa.prioridade.trim().toLowerCase() === descobrirPrioridade)

            if (procurarPrioridade.length > 0){
                for (let filtarPrioridade of procurarPrioridade){
                    console.log(`
                        Titulo: ${filtarPrioridade.titulo}
                        Descrição: ${filtarPrioridade.descricao}
                        Vencimento: ${filtarPrioridade.vencimento}
                        Prioridade: ${filtarPrioridade.prioridade}

                        `
                    )
                }
            }
}   else if(filtrar === 4){
    
    let buscarVencimento = Number(prompt(`
        1 - Mais recente
        2 - Menos recente 
        `))

    if (buscarVencimento === 1){
        converter()
    } else {
        tarefas.sort((objetoA, objetoB) => {
    
            let dataA = objetoA.vencimento.split('/')
            let dataB = objetoB.vencimento.split('/')
    
            let dateA = new Date(`${dataA[2]}-${dataA[1]}-${dataA[0]}`)
            let dateB = new Date(`${dataB[2]}-${dataB[1]}-${dataB[0]}`)
    
            return dateB - dateA
    })
}
}
}




export function marcarConcluida(){
    let marcar = prompt('Qual tarefa deseja marcar como concluída? ')
    let procurarEmTarefas = tarefas.find((tarefa) => tarefa.titulo === marcar)

    if(procurarEmTarefas != -1){
        tarefasConcluidas.push(procurarEmTarefas)
        tarefas.splice(procurarEmTarefas, 1)
        console.log('Tarefa marcada como concluída!')
        console.log(tarefasConcluidas)
        
    } else{
        console.log('Tarefa não encontrada!')
    }
}



 
export function pesquisar(){
    let pesquisarTarefa = prompt('Qual tarefa deseja procurar? ')

    let procurandoTarefa = tarefas.find((tarefa) => tarefa.titulo === pesquisarTarefa)

    if(procurandoTarefa){
        console.log('Essa tarefa está na sua lista!')
    } else{
        console.log('Essa tarefa não está na sua lista!')
    }
}

export function resumir(){
    console.log(`
        Total de tarefas: ${tarefas.length + tarefasConcluidas.length}
        Tarefas pendendes: ${tarefas.length}
        Tarefas concluídas: ${tarefasConcluidas.length}

        `)

    let dataAtual = new Date()
    let novaData = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate())
    let proximaTarefa = new Date(tarefas.vencimento)
    
    if (proximaTarefa <= novaData){
        console.log('oi')
    }
    
}