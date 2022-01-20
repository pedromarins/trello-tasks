const api = "https://api.trello.com/1/members/me/boards?key=e291314a91810cdd779cf7dd61976fcf&token=39061041b6592bf89c41b773e0866234397a1ea5327ccdb3dd66cc43c022ee4a"
const myHeaders = new Headers()

let boardsList = []

const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default',
               contentType: 'application/json' 
            }

fetch(api, myInit)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    // percorrer o array data e salvar no boardsList

    data.forEach(function (item) {
        boardsList.push({
            name: item.name,
            id: item.id
        })
      })
    
    console.log(boardsList)
});

