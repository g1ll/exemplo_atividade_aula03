
# Atividade Aula 03: Leitura e Ordenação

Crie o arquivo **_configDB.json_** na pasta ***config*** na raiz do projeto. Este arquivo deve conter os dados de configuração do firebase de acordo com o seu projeto.

[![exemplo-config-json](https://i.ibb.co/FDJqByk/image.png)](https://ibb.co/tJcPbvw)

Exemplo da sintaxe JSON, cuide para manter as chaves e os valores entre aspas ({**"chave"**:***"valor"***})

[![sintaxe-config-json](https://i.ibb.co/syQzkxp/exemplo-config-db-json.png)](https://ibb.co/18KjhyY)

Observe que este arquivo de configuração é lido pelo script de conexão ***app/connectToFB.js***:

[![uso-do-config-json](https://i.ibb.co/37f0Pkh/image.png)](https://github.com/g1ll/exemplo_atividade_aula03/blob/main/app/connetToFB.js)


## Tarefas:


1. Use o exemplo de código disponível neste repositório para realizar a atividade, completando as lacunas de código nos scripts (*//implemente aqui*):

[![fig-implemente-aqui](https://i.ibb.co/QPt45nf/image.png)](https://github.com/g1ll/exemplo_atividade_aula03/blob/main/app/readAllData.js)


2. Implemente o código do script ***[readAllData.js](https://github.com/g1ll/exemplo_atividade_aula03/blob/main/app/readAllData.js)*** para listar todos os dados do banco, utilize o método ***get()***.

3. Implemente o código do script ***[monitorAllData.js](https://github.com/g1ll/exemplo_atividade_aula03/blob/main/app/monitorAllData.js)*** para monitorar alterações no banco de dados ***“produtos”***. Use o evento que retorna todos os objetos do banco a cada alteração!

4.  Implemente o código do script ***[monitorNode.js](https://github.com/g1ll/exemplo_atividade_aula03/blob/main/app/monitorNode.js)*** para mostrar somente os dados dós nós de ***“produtos”*** que sofrerem alguma alteração.

5. Altere o código do arquivo ***[monitorNode.js](https://github.com/g1ll/exemplo_atividade_aula03/blob/main/app/monitorNode.js)*** para que o monitoramento seja interrompido no momento que o nó  (***-MwSzyJMlNDToTGtPuhc***) for alterado.
 
6. Implemente o código do script ***[orderData.js](https://github.com/g1ll/exemplo_atividade_aula03/blob/main/app/orderData.js)*** para listar todos os dados do banco de uma vez só, utilize o método ***query()***.

7. Implemente o código do script ***[orderDataDesc.js](https://github.com/g1ll/exemplo_atividade_aula03/blob/main/app/orderDataDesc.js)*** para listar os dados na ordem reversa das chaves dos nós de ***“produtos”***

8. Implemente o código do script ***[orderProdPrice.js](https://github.com/g1ll/exemplo_atividade_aula03/blob/main/app/orderProdPrice.js)*** para ordenar os nós de ***“produtos”*** pelo valor do campo ***"preco"***.





