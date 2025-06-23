# Joguinho pong criado usando apenas o Github Copilot

https://github.com/user-attachments/assets/bcfa9271-8a20-4848-8417-58880ec9df21

## Passo a passo usado para a criação do joguinho usando Github Copilot

### 1º Preparação de ambiente e instalação de plugins

- VSCode: https://code.visualstudio.com/
- Github Copilot plugin: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot
- Github Copilot Chat plugin: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat
- ps5 js: https://editor.p5js.org (import no index.html)
- https://github.com/features/copilot

### 2º Uso do copilot através de comentários

- Inicie a ciação dos primeiros passos através de comentários, como: 

//Crie um retângulo da cor (cor escolhida), tamanho 400 por 800

//crie uma bola/círculo de cor (cor escolhida) dentro do retângulo

//centralize a imagem de forma responsiva no centro da tela

E por aí vai...

### 3º Aprimore o código com o chat

- Abra o chat (dependendo da versão ele pode no topo do vscode, ou na lateral abaixo das extenções)

![chat_copilot_vs_code](https://github.com/user-attachments/assets/cd66d8b9-bd30-4915-b7e9-8f68603d7e01)


O chat se mostrou mais assertivo quando pedi soluções complexas, e também refatoração e quebra de classes, prezando por boas práticas. 

Aqui embaixo deixo um pouco do que construí junto ao chat. 

### 4º Melhorando a nomenclatura usando o chat 

1º Após criado todo o arquivo js de forma bem crua, com os nomes das variáveis com letras como x, y, w, h, pedi ao chat para avaliar todo meu arquivo e me sugerir nomenclaturas melhores, que vão de acordo com boas práticas de clean code. 

Primeiro dei uma introdução, e logo o copilot me deu as sugestões em uma tabela

![prompt1](https://github.com/user-attachments/assets/c467bcc0-451a-43a9-9fef-a117bc5024a9)

Perceba que como eu mencionei para que usasse dados pautados em pesquisas cientificas de boas práticas de programação, ele me deu referências bem conhecidas logo abaixo

![resposta](https://github.com/user-attachments/assets/0ec18d72-2924-41f5-a69c-24287304232c)

### Solicitando que o próprio copilot mude meu código com as sugestões de nomenclatura que ele mesmo deu

![apply_nomenclatura](https://github.com/user-attachments/assets/16042f58-8931-4edb-9556-f058340f5514)

Com as alterações no código é possível usar a ferramenta para aplicar as mudanças, copiar, ou colar o código sugerido a partir de onde o mouse esteja setado, e também é possível inserir em um arquivo novo, seguindo os seguintes ícones que aparecem na sugestão de código: 

![icones](https://github.com/user-attachments/assets/d361baa4-4bb2-44f1-af59-7814e6084617)

### Pedingo ao chat para quebrar o código em uma estrutura organizada seguindo boas práticas

![organizando](https://github.com/user-attachments/assets/828a0b07-c61c-466d-899c-a9e888115b33)

Essa é sua primeira sugestão: 


![primeira_sugestao](https://github.com/user-attachments/assets/72354e71-dcea-44cb-a204-45cbb5c0a5a4)

Mas eu gostaria que ele já criasse pra mim, então fui mais detalhista nesse ponto: 


![mudanca](https://github.com/user-attachments/assets/78fecd9b-5e15-4931-b5bf-44c3dd246abb)

Perceba que ele já montou todas as classes sugeridas, e inclusive montou o script do html considerando os arquivos criados: 

https://github.com/user-attachments/assets/3a647e72-a25d-4664-942c-3354655a7f73

### Pedindo para levar imagens e vídeos para uma pasta de assets

Quando pedi para levar arquivos a uma pasta de assets, ele não consegue fazer fazer a mudança, pois ele não executa ações localmente, mas ele já sugeriu como ficaria a mudança nos paths: 

![paths](https://github.com/user-attachments/assets/57270f29-d01d-492b-81ca-e18b55108869)

### Aprimorando com centralização, responsividade e rouds de jogo

- Centralizando o jogo

![centralizar](https://github.com/user-attachments/assets/f76c39d4-00b9-486a-a972-7d397350c44b)

- Adicionando placar

![placar](https://github.com/user-attachments/assets/1c1dba58-6f6a-4cc7-b556-e1b7c30ef9fa)

- Adicionando rounds 

![c round](https://github.com/user-attachments/assets/1ea46c64-0288-4e3b-b5e4-b984293e488f)


![c round2](https://github.com/user-attachments/assets/38c3c3ff-fb96-4abb-99b6-af3b959850da)


## Conclusão

O Github Copilot é uma ferramenta que eu já uso a mais de 10 meses, até então eu havia usado mais no intellij, mas tenho me surpeendido com o uso dos plugins para o intellij. Eu uso no dia a dia para fazer alguma engenharia reversa, já que tem como ele analisar o código e as classes anexadas no chat. Uso também para fazer documentações técnicas, pois ele é muito preciso para criar todo o roteiro, e seguir o fluxo. Mas claro, tudo isso exige também dedicação de prompt, quanto melhor descrito, e explicado, melhores serão as respostas! 


