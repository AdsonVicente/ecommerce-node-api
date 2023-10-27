import { IDatasControle, KeysDatasControle } from "@shared/domain/datas.types";


interface ICategoria extends IDatasControle {
    id?: string;
    nome: string;
}


type CriarCategoriaProps = Omit<ICategoria, "id" | KeysDatasControle>;

//Atributos que são necessários para recuperar uma categoria
type RecuperarCategoriaProps = ICategoria & {
    id: NonNullable<ICategoria['id']>
}

export {
    ICategoria,
    CriarCategoriaProps,
    RecuperarCategoriaProps
}