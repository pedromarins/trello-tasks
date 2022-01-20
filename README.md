# trello-tasks

## Qual problema queremos resolver?


 > Criar cards no Trello, clonando checklists pré-prontos em templates

O objetivo é usar a [API do Trello](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/) do Trello para criar automaticamente, a partir de uma lista de tarefas, os cards referentes à cada uma delas usando a estrutura de templates e checklists do Trello. Cards devem ser criados no board correto e na coluna correta.

-----

- [x] Criar repositório
- [x] Pegar chave da API - e291314a91810cdd779cf7dd61976fcf
- [ ] Conectar com o Trello
- [ ] Varrer lista de boards do trello e armazenar 
- [ ] chamar todos os cards da lista Templates de cada um dos boards e armazenar
- [ ] iterar no json da planilha
- [ ] Ver qual o id do board e o id da lista onde o card deverá ser criado
- [ ] criar o novo card e guardar id dele
- [ ] Ver qual o id do card que será usado como template
- [ ] chamar lista de checklists do template
- [ ] recriar todos os checklists do template no card novo