import { tarefas, tarefasConcluidas } from "./listas"

export function adicionandoVerificacao(text) {
    return `${text} ✓`
}

export function converter() {
    tarefas.sort((objetoA, objetoB) => {

        let dataA = objetoA.vencimento.split('/')
        let dataB = objetoB.vencimento.split('/')

        let dateA = new Date(`${dataA[2]}-${dataA[1]}-${dataA[0]}`)
        let dateB = new Date(`${dataB[2]}-${dataB[1]}-${dataB[0]}`)

        return dateA - dateB


    })



    console.log(`
        -- Tarefas pendentes --`)
    for (let objeto of tarefas) {
        console.log(`
           Título: ${objeto.titulo}
           Descrição: ${objeto.descricao}
           Prioridade: ${objeto.prioridade}
           Vencimento: ${objeto.vencimento}
           `)
    }
}



export function exibirTarefas() {
    console.log(`
        -- Tarefas pendentes --`)
    for (let pendente of tarefas) {
        console.log(`
             Título: ${pendente.titulo}
             Descrição: ${pendente.descricao}
             Vencimento: ${pendente.vencimento}
             Prioridade: ${pendente.prioridade}
             
             `)
    }

    console.log(`
        -- Tarefas concluídas --`)
    for (let concluida of tarefasConcluidas) {
        console.log(`
             Título: ${concluida.titulo}
             Descrição: ${concluida.descricao}
             Vencimento: ${concluida.vencimento}
             Prioridade: ${concluida.prioridade}
             
             `)
    }
}



export function ordenar() {
    let ordenar = Number(prompt(`
        1 - Vencimento
        2 - Prioridade
        3 - Criação
        
        `))

    if (ordenar === 1) {
        converter()



    } else if (ordenar === 2) {

        let ordemPrioridade = {
            'alta': 1, 'media': 2, 'baixa': 3
        }

        tarefas.sort((a, b) => {
            let prioridadeA = a.prioridade.toLowerCase()
            let prioridadeB = b.prioridade.toLowerCase()

            return ordemPrioridade[prioridadeA] - ordemPrioridade[prioridadeB]
        })

        console.log(`
            -- Tarefas pendentes --
            `)

        for (let prioridades of tarefas) {
            console.log(`
             Título: ${prioridades.titulo}
             Descrição: ${prioridades.descricao}
             Vencimento: ${prioridades.vencimento}
             Prioridade: ${prioridades.prioridade}
                `)
        }
    } else {
        let escolhaCriacao = Number(prompt(`
            1 - Mais antigo 
            2 - Mais recente
            `))

        if (escolhaCriacao === 1) {
            let dataCriacao = new Date()


            tarefas.sort((a, b) => {
                return new Date(a.dataCriacao) - new Date(b.dataCriacao)
            })

            console.log(`
                -- Tarefas pendentes --
                `)

            for (let recente of tarefas) {
                console.log(`
                Título: ${recente.titulo}
                Descrição: ${recente.descricao}
                Vencimento: ${recente.vencimento}
                Prioridade: ${recente.prioridade}
                    `)
            }
        } else {
            tarefas.sort((a, b) => {
                return new Date(b.dataCriacao) - new Date(a.dataCriacao)
            })

            console.log(`
                -- Tarefas pendentes --
                `)

            for (let recente of tarefas) {
                console.log(`
                Título: ${recente.titulo}
                Descrição: ${recente.descricao}
                Vencimento: ${recente.vencimento}
                Prioridade: ${recente.prioridade}
                    `)
            }
        }

    }
}


export function filtrar() {
    let filtrar = Number(prompt(`
        1 - Pendentes
        2 - Concluídas
        3 - Prioridade
        4 - Vencimento 

        `
    ))

    if (filtrar === 1) {
        console.log(`
           -- Tarefas pendentes --
           `)
        for (let filtarPendente of tarefas) {
            console.log(`
               Titulo: ${filtarPendente.titulo}
               Descrição: ${filtarPendente.descricao}
               Vencimento: ${filtarPendente.vencimento}
               Prioridade: ${filtarPendente.prioridade}

               `)
        }
    } else if (filtrar === 2) {
        console.log(`
           -- Tarefas concluídas --
           `)
        for (let filtarConcluida of tarefasConcluidas) {
            console.log(`
               Titulo: ${filtarConcluida.titulo}
               Descrição: ${filtarConcluida.descricao}
               Vencimento: ${filtarConcluida.vencimento}
               Prioridade: ${filtarConcluida.prioridade}

               `
            )
        }

    } else if (filtrar === 3) {
        let descobrirPrioridade = prompt('Digite a prioridade: ').trim().toLowerCase()

        let procurarPrioridade = tarefas.filter((tarefa) => tarefa.prioridade.trim().toLowerCase() === descobrirPrioridade)


        if (procurarPrioridade.length > 0) {
            for (let filtarPrioridade of procurarPrioridade) {
                console.log(`
                        Titulo: ${filtarPrioridade.titulo}
                        Descrição: ${filtarPrioridade.descricao}
                        Vencimento: ${filtarPrioridade.vencimento}
                        Prioridade: ${filtarPrioridade.prioridade}

                        `
                )
            }
        }

    } else if (filtrar === 4) {

        let buscarVencimento = Number(prompt(`
            1 - Mais recente
            2 - Menos recente 
            `))

        if (buscarVencimento === 1) {
            converter()
        } else {

            tarefas.sort((objetoA, objetoB) => {

                let dataA = objetoA.vencimento.split('/')
                let dataB = objetoB.vencimento.split('/')

                let dateA = new Date(`${dataA[2]}-${dataA[1]}-${dataA[0]}`)
                let dateB = new Date(`${dataB[2]}-${dataB[1]}-${dataB[0]}`)

                return dateB - dateA
            })

            console.log(`
                -- Tarefas pendentes --`)
            for (let objeto of tarefas) {
                console.log(`
                   Título: ${objeto.titulo}
                   Descrição: ${objeto.descricao}
                   Prioridade: ${objeto.prioridade}
                   Vencimento: ${objeto.vencimento}
                   `)
            }

        }


    }
}



export function marcarConcluida() {
    let marcar = prompt('Qual tarefa deseja marcar como concluída? ')
    let procurarEmTarefas = tarefas.find((tarefa) => tarefa.titulo === marcar)

    if (procurarEmTarefas) {
        tarefasConcluidas.push(procurarEmTarefas)
        tarefas.splice(procurarEmTarefas, 1)
        console.log('Tarefa marcada como concluída!')

        console.log(`
            -- Tarefas concluídas --
            `)
        for (let concluirTarefa of tarefasConcluidas) {
            console.log(adicionandoVerificacao(concluirTarefa.titulo))
           
        }

    } else {
        console.log('Tarefa não encontrada!')
    }
}




export function pesquisar() {
    let pesquisarTarefa = prompt('Qual tarefa deseja procurar? ')

    let buscaParcial = tarefas.filter((tarefa =>
        tarefa.titulo.toLowerCase().includes(pesquisarTarefa.toLowerCase()) || 
        tarefa.descricao.toLowerCase().includes(pesquisarTarefa.toLowerCase())
    ))

    if (buscaParcial.length >= 1) {
        console.log('Essa tarefa está na sua lista!')
        for (let tarefaEncontrada of buscaParcial){
            console.log(`
            Título: ${tarefaEncontrada.titulo}
            Descrição: ${tarefaEncontrada.descricao}
            Vencimento: ${tarefaEncontrada.vencimento}
            Prioridade: ${tarefaEncontrada.prioridade}
            `)
        }
        

    } else {
        console.log('Essa tarefa não está na sua lista!')
    }
}

export function resumir() {
    
    console.log(`
        Total de tarefas: ${tarefas.length + tarefasConcluidas.length}
        Tarefas pendendes: ${tarefas.length}
        Tarefas concluídas: ${tarefasConcluidas.length}

        `)

    let dataAtual = new Date()

    console.log(`
        --- Próximas tarefas a vencer ---
        `)
    
    for (let proximoVencimento of tarefas) {
        let [dia, mes, ano] = proximoVencimento.vencimento.split('/');
        let proximaTarefa = new Date(`${ano}-${mes}-${dia}`)
        
        if (proximaTarefa >= dataAtual) {
            console.log(`
                    Titulo: ${proximoVencimento.titulo}
                    Descrição: ${proximoVencimento.descricao}
                    Vencimento: ${proximoVencimento.vencimento}
                    Prioridade: ${proximoVencimento.prioridade}

                        `
            )
        }
    }
}
        
    