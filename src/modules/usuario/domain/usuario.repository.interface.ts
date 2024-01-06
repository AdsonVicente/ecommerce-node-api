import { IRepository } from "@shared/domain/repository.interface";
import { Usuario } from "./usuario.entity";

interface IUsuarioRepository<T> extends IRepository<T> {

    autenticar(usuario: Usuario): Promise<boolean>;
    recuperarPorEmail(email: string): Promise<Usuario | null>;

}

export { IUsuarioRepository }