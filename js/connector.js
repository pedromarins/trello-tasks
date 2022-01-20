const api_url = "https://api.trello.com/1"
const api_key = "key=e291314a91810cdd779cf7dd61976fcf&token=39061041b6592bf89c41b773e0866234397a1ea5327ccdb3dd66cc43c022ee4a"

const myCards = [
    {
        name: "Tarefa de exemplo do LiveCode",
        board: "Tarefas",
        template: "https://trello.com/c/j90P9nCw/3-teste-2",
        dueDate: "01/21/2022",
        list: "To Do"
    },
    { 
        name: "Mais uma tarefa pro LiveCode",
        board: "Tarefas",
        template: "https://trello.com/c/abvqIRgA/1-template-de-exemplo",
        dueDate: "01/23/2022",
        list: "To Do"
    }
]

const myHeaders = new Headers()

let boardsList = []
let listsTarefas = []
let cardsList = []

const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default',
               contentType: 'application/json' 
            }

const postHeader = { method: 'POST',
    headers: myHeaders,
    contentType: 'application/json' 
}



fetch(api_url+"/members/me/boards?"+api_key, myInit)
.then(function(response) {
    return response.json()
})
.then(function(boards) {
    boards.forEach(function (item) {
        boardsList.push({
            name: item.name,
            id: item.id
        })
      })
})
.then(() => {
    const boardTarefas = boardsList.find(e => e.name == "Tarefas")

    fetch(api_url+"/boards/"+boardTarefas.id+"/lists?"+api_key, myInit)
    .then(function(response) {
        return response.json()
    })
    .then(function(lists) {
        lists.forEach(function (item) {
            listsTarefas.push({
                name: item.name,
                id: item.id
            })
          })
    })
    .then(() => {
        const listsTemplate = listsTarefas.find(e => e.name == "Templates")

        fetch(api_url+"/lists/"+listsTemplate.id+"/cards?"+api_key, myInit)
        .then(function(response) {
            return response.json()
        })
        .then(function(cards) {
            cardsList = cards
        })
    })
    .then( () => {
        myCards.forEach( (item, indice) => {
            // criamos uma váriável que encontra a lista do board que tem o mesmo nome da lista do item dos cards a serem criados
            let assignedList = listsTarefas.find(e => e.name = item.list)

            fetch(api_url+"/cards?idList="+assignedList.id+"&name="+item.name+"&due="+item.dueDate+"&"+api_key, postHeader)
            .then(function(response) {
                return response.json()
            })
            .then(function(oquevira) {
                console.log(oquevira)
            })
        })
            
    })            
})






