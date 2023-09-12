import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { RecuperarCategoriaProps } from "@modules/catalogo/domain/categoria/categoria.types";
import { CategoriaMap } from "@modules/catalogo/mappers/categoria.map";
import { DomainException } from "@shared/domain/domain.exception";
import { writeFile, readFile } from "fs";


try {

    /////////////////////////
    //Criando uma Categoria//
    /////////////////////////

    let categoria: Categoria;
    categoria = Categoria.criar({ nome: 'Banho' });
    console.log(categoria);

    /////////////////////////////
    //Recuperando uma Categoria//
    /////////////////////////////

    let propsCategoria = {
        id: '5fac700e-2783-4682-99cf-0c9c1d9675b0',
        nome: 'mesá'
    };
    let categoria2: Categoria = Categoria.recuperar(propsCategoria);
    console.log(categoria2);
    console.log(categoria.equals(categoria2));

    //Persistinto e Recuperando em Arquivo - File System//

    let arrayCategorias = [];
    arrayCategorias.push(categoria.toDTO());
    arrayCategorias.push(categoria2.toDTO());


    writeFile('categorias.json', JSON.stringify(arrayCategorias), function (error: any) {
        if (error) throw error;
        console.log('Arquivo Salvo com Sucesso!');
        readFile('categorias.json', (error, dadoGravadoArquivo) => {
            if (error) throw error;
            console.log('Leitura de Arquivo!');
            let categoriaSalva: Categoria = JSON.parse(dadoGravadoArquivo.toString());
            console.log(categoria.id);
        })
    });


}
catch (error: any) {
    if (error instanceof DomainException) {
        console.log('Exceção de Domínio---------------------');
        console.log(error.message);
    }
    else {
        console.log('Outras Exceções ----------------------');
        console.log(error.message);
    }
}
finally {
    console.log('Ação que deve ser executada em caso de sucesso e em caso de exceção');
}