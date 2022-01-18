# Automação de testes para o processo seletivo da VR Benefícios com framework cypress e Cucumber

# Sobre o projeto

https://www.vr.com.br/

Automação de testes da VR Benefícios em frontend utilizamos a tecnológica Cypress. A aplicação consiste em automatizar testes utliziando BDD JavaScript com framework Cypresse e Cucumber como ferramenta para permitir automazição do teste em BDD(Behaviour-Driven Development) , onde os usuários e clientes navegam pela aplicação e valida uma das telas conforme descrição abaixo:

Frontend:
- Criar uma automação que entre no site www.vr.com.br;
- Navegar até́ a seção “Pra Você̂” (/onde-aceita.htm);
- Clicar no botão “Onde usar meu cartão VR”;
- Validar que o mapa do Google abriu em tela.


## Layout web
![image](https://user-images.githubusercontent.com/83319090/149774628-bcb3803a-2e3d-4576-bb5d-8519d8581192.png)


# Tecnologias utilizadas

## Automação Front End
- Cypress / Cucumber
- NodeJs
- HTML / CSS / JavaScript
#

### Por que Cypress.io ?
Cypress é um framework utilizado para automação de testes end to end, com simplicidade em seu desenvolvimento. Atualmente, utiliza JavaScript como linguagem de programação  que com a ferramenta Cucumber nos permite a escrita de testes automatizados no formato BDD (Behaviour-Driven Development). 
#



# Arquitetura do projeto


### Configurando sua máquina


### Necessário instalar:

- Visual Studio Code: Editor de texto com funções úteis para escrever o código da automação de testes.
Configurando o ambiente de automação de testes Web
Para que sua automação possa ser realizada é necessário instalar alguns recursos, conforme será descrito abaixo:
- [code.visualstudio](https://code.visualstudio.com/)
- [nodejs](https://nodejs.org/en/download/)
- [cypress.io](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)


### Instalação do Cypress dentro do VSCode
- No Console do Cmder, digite o comando:
 ```bash 
  npm install 
  
  npm install cypress@8.2.0  
```


## Agora o ambiente está configurado, podemos rodar os testes.
#
### Como Executar os testes automatizados
Para executar o testes automatizados usaremos alguns comandos a partir da pasta raiz do nosso projeto.

- Para execução de todos os cenários implementados no terminal do VSCode utilizamos o seguinte código:
```bash
 npx cypress run
```
Este código executará o teste completo em modo headless.

o resultado será:
![image](https://user-images.githubusercontent.com/83319090/149779507-2b0c3dd4-7675-4316-b70e-34c1482bb214.png)


- Para execução de todos os cenários implementados no Cypress  padrão utilizamos o seguinte código:
```bash
 npx cypress open
```
Este código abrirá a tela principal do cypress:
![image](https://user-images.githubusercontent.com/83319090/149779958-46106b3d-abcb-45c5-b915-3526d43e0878.png)

Nessa página vocês deve escolher a feature desejada e clicar para iniciar os testes que resultará em:
![image](https://user-images.githubusercontent.com/83319090/149780417-9c11b7e2-f8bd-4581-bbd4-13600482e947.png)
