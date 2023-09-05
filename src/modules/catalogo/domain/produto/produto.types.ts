import { Categoria } from "../categoria/categoria.entity";

interface IProduto {
    id?: string;
    nome: string;
    descricao: string;
    valor: number;
    categorias: Array<Categoria>
}


//Atributos que são necesarios para crir um produto
//Tipo representa um dos estados do ciclo de vida da entidade
//Garantir 
type CriarProdutosProps = Omit<IProduto, "id">;

type RecuperarProdutoProps = Required<IProduto>;
 
export {
    IProduto,
    CriarProdutosProps,
    RecuperarProdutoProps
}