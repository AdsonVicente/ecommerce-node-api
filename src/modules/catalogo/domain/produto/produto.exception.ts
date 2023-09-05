import { DomainException } from "../../../../shared/domain/domain.exception";

class ProdutoException extends DomainException {
    constructor(message:string = 'Exceção de Dominio Genérica da Entidade Produto.') {
        super(message) ;
        this.name = 'ProdutoException'
        this.message = message;
    }
}

class NomeProdutoTamanhoMinimoInvalido extends ProdutoException {
    public constructor (message: string = 'O nome do produto não possui um tamanho minimo válido.') {
        super(message);
        this.name = 'NomeProdutoTamanhoMinimoInvalido'
        this.message = message;
    }

}

class  NomeProdutoTamanhoMaximoInvalido extends ProdutoException {
    public constructor (message : string = 'O nome do produto não possui um tamanho máximo válido.') {
        super (message);
        this.name = 'NomeProdutoTamanhoMaximoInvalido'
        this.message = message;
    }
}

class  DescricaoProdutoTamanhoMaximoInvalido extends ProdutoException {
    public constructor (message : string = 'A dscrição do produto não possui um tamanho máximo válido.') {
        super (message);
        this.name = 'DescriçãoProdutoTamanhoMaximoInvalido'
        this.message = message;
    }
}
class  DescricaoProdutoTamanhomMinimoInvalido extends ProdutoException {
    public constructor (message : string = 'A dscrição do produto não possui um tamanho minimo válido.') {
        super (message);
        this.name = 'DescriçãoProdutoTamanhoMinimoInvalido'
        this.message = message;
    }
}
class  ValorMinimoProdutoInvalido extends ProdutoException {
    public constructor (message : string = 'O valor minimo do produto é inválido.') {
        super (message);
        this.name = 'ValorMinimoProdutoInvalido'
        this.message = message;
    }
}

class QtdMinimaCategoriaProdutoInvalida extends ProdutoException {
    public constructor (message : string = 'A quantidade minima de categorias produto é inválida.') {
        super (message);
        this.name = 'QtdMinimaCategoriaProdutoInválida'
        this.message = message;
    }
}
class  QtdMaximaCategoriasProdutoInvalida extends ProdutoException {
    public constructor (message : string = 'A quantidade máxima de categorias do produto é inválida.') {
        super (message);
        this.name = 'QtdMaximaCategoriasProdutoInvalida'
        this.message = message;
    }
}

export {
    ProdutoException,
    NomeProdutoTamanhoMinimoInvalido,
    NomeProdutoTamanhoMaximoInvalido,
    DescricaoProdutoTamanhomMinimoInvalido,
    DescricaoProdutoTamanhoMaximoInvalido,
    ValorMinimoProdutoInvalido,
    QtdMinimaCategoriaProdutoInvalida,
    QtdMaximaCategoriasProdutoInvalida
}