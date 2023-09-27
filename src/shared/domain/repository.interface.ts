import { promises } from "dns";

interface IQuery<T> {
    recuperarPorUuid(uuid: string): Promise<T | null>;
    recuperarTodos(): Promise<Array<T>>;
    existe(uuid: string): Promise<boolean>;
}

interface IComand<T> {
    // ele responde uma promessa 
    inserir(entity: T): Promise<T>;
    atualizar(uuid: string, entity: Partial<T>): Promise<boolean>;
    deletar(uuid: string): Promise<boolean>;
}

interface IRepository<T> extends IQuery<T>, IComand <T> {};

export {IRepository}
