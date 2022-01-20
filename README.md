# trello-tasks

## Qual problema queremos resolver?


 > Criar cards no Trello, clonando checklists pré-prontos em templates

O objetivo é usar a [API do Trello](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/) do Trello para criar automaticamente, a partir de uma lista de tarefas, os cards referentes à cada uma delas usando a estrutura de templates e checklists do Trello. Cards devem ser criados no board correto e na coluna correta.

-----

- [x] Criar repositório
- [x] Pegar chave da API - e291314a91810cdd779cf7dd61976fcf
- [x] Conectar com o Trello
- [x] Varrer lista de boards do trello e armazenar em uma variável local o id do board
- [x] Armazenar todas as listas do board `Tarefas` e armazenar em uma variável local
- [x] Chamar todos os cards da lista `Templates` do board `Tarefas` e armazenar em uma variável local
- [ ] iterar no json de coisas a serem criadas
- [ ] Ver qual o id do board e o id da lista onde o card deverá ser criado
- [ ] criar o novo card e guardar id dele
- [ ] Ver qual o id do card que será usado como template
- [ ] chamar lista de checklists do template
- [ ] recriar todos os checklists do template no card novo


## JSON exemplo

{"Cards":[
  {
  "nome": "Tarefa de exemplo do LiveCode",
  "board": "Tarefas",
  "template": "https://trello.com/c/bGUiwWTV",
  "date": "01/21/22"
  },
  { 
  "nome": "Mais uma tarefa pro LiveCode",
  "board": "Tarefas",
  "template": " https://trello.com/c/ip1oeRde/9-iniciando-campanha",
  "date": "01/23/22"
  }
  ]}
 
