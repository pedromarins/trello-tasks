// https://api.trello.com/1/members/me/boards?key={e291314a91810cdd779cf7dd61976fcf}&token={39061041b6592bf89c41b773e0866234397a1ea5327ccdb3dd66cc43c022ee4a}

console.log("teste")


var api = "https://api.trello.com/1/members/me/boards?key=e291314a91810cdd779cf7dd61976fcf&token=39061041b6592bf89c41b773e0866234397a1ea5327ccdb3dd66cc43c022ee4a"
var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default',
               contentType: 'application/json' 
            };

fetch(api, myInit)
.then(function(response) {
    return response.json();
})
.then(function(dados) {
    console.log(dados);
    console.log(dados[0].name);
});

