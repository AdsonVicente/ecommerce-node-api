Feature: Criar Categoria

    Como um <Administrador>
    Eu quero <Criar uma categoria>
    De modo que <Os produtos possam ser associados a uma ou mais categoria facilitando a organização>

Scenario: Categoria válida (Padrão)

    Dado (Given) [Categoria válida]
    Quando (when) [Solicitar a Criação de uma Categoria]
    Então (Then) [A categoria deve ser criada corretamente]

Scenario: Categoria inválida - Nome da Categoria não atende o tamanho mínimo

    Dado [Uma categoria com nome que não atende ao tamanho mínimo]
    Quando [Solicitar a Criação de uma Categoria]
    Então [Um erro informando que o nome da categoria não possui um tamanho mínimo válido deve ser apresentado]

Scenario: Categoria inválida - Nome da Categoria não atende o tamanho máximo (Execeção)

    Dado [Uma categoria com nome que não atende tamanho máximo]
    Quando [Solicitar a Criação de uma Categoria]
    Então [Um erro informando que o nome da categoria não possui um tamanho máximo válido deve ser apresentado]

Scenario: Categoria inválida - Nome da Categoria possui somente espaços em branco (Execeção)

    Dado [Um categoria que possui somente espaços em branco]
    Quando [Solicitar a Criação de uma Categoria]
    Então [Um erro informando que o nome da categoria é inválido deve ser apresentado]

