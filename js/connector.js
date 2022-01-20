const api_url = "https://api.trello.com/1"
const api_key = "?key=e291314a91810cdd779cf7dd61976fcf&token=39061041b6592bf89c41b773e0866234397a1ea5327ccdb3dd66cc43c022ee4a"

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

fetch(api_url+"/members/me/boards"+api_key, myInit)
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

    fetch(api_url+"/boards/"+boardTarefas.id+"/lists"+api_key, myInit)
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
        const cardsTemplate = listsTarefas.find(e => e.name == "Templates")

        fetch(api_url+"/lists/"+cardsTemplate.id+"/cards"+api_key, myInit)
        .then(function(response) {
            return response.json()
        })
        .then(function(cards) {
            cardsList = cards
        })
    })
})






