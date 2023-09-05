Matéria : Criar Produto
	Como um <Administrador>
	Eu quero <Criar um produto>
	De modo que <O produto poderá ser comercializado eletronicamente>

Cenário : Produto válido (Padrão)
	Dado (Given) [Produto válido]
	Quando (Quando) [Solicitar a criação de um produto]
	Então (Then) [O Produto deve ser criado corretamente]

Cenário : Produto inválido - Nome do produto não atende o tamanho mínimo (5) (Execeção)
	Dado [Um produto com nome que não atende ao tamanho mínimo]
	Quando [Solicitar a criação de um produto]
	Então [Um erro informando que o nome do produto não possui um tamanho mínimo válido deve ser apresentado]

Cenário : Produto inválido - Nome do produto não atende o tamanho máximo (50) (Execeção)
	Dado [Um produto com nome que não atende ao tamanho máximo]
	Quando [Solicitar a criação de um produto]
	Então [Um erro informando que o nome do produto não possui um tamanho máximo válido deve ser apresentado]

Cenário : Produto inválido - Descrição do produto não atende o tamanho mínimo (10) (Execeção)
    Dado [Um produto com descrição que não atende ao tamanho mínimo]
    Quando [Solicitar a criação de um produto]
    Então [Um erro informando que a descrição do produto não possui um tamanho mínimo válido deve ser apresentado]

Cenário : Produto inválido - Descrição do produto não atende o tamanho máximo (200) (Execeção)
	Dado [Um produto com descrição que não atende ao tamanho máximo]
	Quando [Solicitar a criação de um produto]
	Então [Um erro informando que a descrição do produto não possui um tamanho máximo válido deve ser apresentado]

Cenário : Produto inválido - Valor do produto não atende ao valor mínimo (0) (Execução)
	Dado [Um produto com valor que não atende ao valor mínimo]
	Quando [Solicitar a criação de um produto]
	Então [Um erro informando que o valor do produto não possui um valor mínimo válido deve ser apresentado]

Cenário : Produto inválido - Produto não tem um número mínimo válido de categorias (1) (Execução)
    Dado [Um produto com um número mínimo inválido de categorias]
    Quando [Solicitar a criação de um produto]
    Então [Um erro informando que o produto não tem um número mínimo válido de categorias]

Cenário : Produto inválido - Produto não tem um número máximo válido de categorias (3) (Execução)
    Dado [Um produto com um número máximo inválido de categorias]
    Quando [Solicitar a criação de um produto]
    Então [Um erro informando que o produto não tem um número máximo válido de categorias]