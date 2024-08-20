
    let tarefas = [
        {
            titulo: 'trabalhar',
            descricao: '...',
            vencimento: '16/08/2024',
            prioridade: 'alta'
        },

        {
            titulo: 'titulo',
            descricao: 'sem descrição',
            vencimento: '19/08/2024',
            prioridade: 'baixa'
        },

        {
            titulo: 'sem ',
            descricao: 'sem ',
            vencimento: '15/09/2024',
            prioridade: 'média'
        }
    ]
    let tarefasConcluidas = [
        {
            titulo: 'sem titulo',
            descricao: 'sem descrição',
            vencimento: '15/08',
            prioridade: 'baixa'
        }
    ]
    
function converter(){
    tarefas.sort((objetoaA, objetoB) => {
            
        let dataA = objetoaA.vencimento.split('/')
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


function adicionar(){
    let novoTitulo = prompt('Título: ')
    let novaDescricao = prompt('Descrição: ')
    let novoVencimento = prompt('Vencimento: ')
    let novaPrioridade = Number(prompt(`Prioridade:`))

    let novaTarefa = {
        titulo: novoTitulo,
        descricao: novaDescricao,
        vencimento: novoVencimento,
        prioridade: novaPrioridade
    }

    tarefas.push(novaTarefa)

    console.log(tarefas)
}

function listar(){
    let opcoes = Number(prompt(`
        1 - Exibir tarefas
        2 - Ordenar por 
        3 - Filtrar por status(pendente/concluída)
        4 - Filtrar por prioridade
        5 - Filtrar por vencimento

        `))

    switch(opcoes){
        case 1:
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
    
        case 2:
            let ordenar = Number(prompt(`
                1 - Vencimento
                2 - Prioridade
                3 - Criação
                
                `))

            if (ordenar === 1){
                converter()

            } else if (ordenar === 2){

                tarefas.sort((a, b) => {a.prioridade - b.prioridade})
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

        case 3:
            let filtrar = Number(prompt(`
                 1 - Pendentes
                 2 - Concluídas`
            ))

            if (filtrar === 1){
                
            }

    }
}


function editar(){
    let alterarTarefa = prompt('Qual tarefa deseja alterar? ')

    const index = tarefas.findIndex((tarefas) => tarefas === alterarTarefa)

    if (index){
        let editarTitulo = prompt('Novo título: ')
        let editarDescricao = prompt('Nova descrição: ')
        let editarVencimento = prompt('Novo vencimento: ')
        let editarPrioridade = prompt('Nova prioridade: ')

        let editarTarefa = {
            titulo: editarTitulo,
            descricao: editarDescricao,
            vencimento: editarVencimento,
            prioridade: editarPrioridade
        }
        tarefas[index].push(editarTarefa)
        console.log(tarefas)
    }
}
// adicionar()
// listar()
// editar()
// converter()
listar()