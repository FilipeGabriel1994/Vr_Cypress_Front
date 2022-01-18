Feature: Acessar a pagina Web www.vr.com.br e navegar até tela do mapa do google

    Scenario: Acessar a tela principal, navegar até a tela do mapa

        Given Eu acesso a pagina principal da VR
        And Navego até a seção “Pra Você̂”
        When Clico no botão “Onde usar meu cartão VR”
        Then Sou direcionado para tela do mapa do Google
