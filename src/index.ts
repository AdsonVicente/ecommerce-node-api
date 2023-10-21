import { Categoria } from '@modules/catalogo/domain/categoria/categoria.entity';
import { Produto } from '@modules/catalogo/domain/produto/produto.entity';
import { CategoriaPrismaRepository } from '@modules/catalogo/infra/database/categoria.prisma.repository';
import { ProdutoPrismaRepository } from '@modules/catalogo/infra/database/produto.prisma.repository';
import { PrismaClient } from '@prisma/client';
import { DomainException } from '@shared/domain/domain.exception';


const prisma = new PrismaClient({
    log: ['query', 'info'],
    errorFormat: 'pretty'
});

async function main() {

    prisma.$connect().then(
        async () => {
            console.log('Postgres Conectado');
        }
    );

    const categoriaRepo = new CategoriaPrismaRepository(prisma);

    ////////////////////////////////
    //Recuperar Categoria por UUID//
    ////////////////////////////////

    // const categoriaRecuperada: Categoria | null = await categoriaRepo.recuperarPorUuid("7061d559-ab25-4182-98ce-170afdf2acd2");

    // console.log(categoriaRecuperada);

    /////////////////////////////////
    //Recuperar Todas as Categorias//
    /////////////////////////////////

    //const todasCategorias: Array<Categoria> = await categoriaRepo.recuperarTodos();

    //console.log(todasCategorias);

    ////////////////////////////////
    //Verifica se Existe Categoria//
    ////////////////////////////////

    //const existeCategoria: boolean = await categoriaRepo.existe("7061d559-ab25-4182-98ce-170afdf2acd2");

    //console.log(existeCategoria);

    /////////////////////
    //Inserir Categoria//
    /////////////////////

    //const categoria: Categoria = Categoria.criar({
    //    nome:'Sala e Quarto'
    //});     

    //const categoriaInserida = await categoriaRepo.inserir(categoria);

    //console.log(categoriaInserida);

    ///////////////////////
    //Atualizar Categoria//
    ///////////////////////

    //const categoria: Categoria = Categoria.recuperar({
    //    id: "96a7f212-e01d-4de7-8abc-70cabbc898fd",
    //    nome: "Banho"
    //});     

    //const atualizouCategoria: boolean = await categoriaRepo.atualizar(categoria.id,categoria);

    //console.log(atualizouCategoria)

    /////////////////////
    //Deletar Categoria//
    /////////////////////

    //const categoriaDeletada: boolean = await categoriaRepo.deletar("120a3d76-9ca6-4880-a1d6-d34685e1f6f8");

    //console.log(categoriaDeletada);

    const produtoRepo = new ProdutoPrismaRepository(prisma);

    ////////////////////////////////
    //Recuperar Produto por UUID//
    ////////////////////////////////

    // const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("33663685-283d-4a52-b86e-7463e7077b38");

    // console.log(produtoRecuperado);

    ///////////////////
    //Inserir Produto//
    ///////////////////

    // const categoria01: Categoria = Categoria.recuperar({
    //     id: "c3d5de0a-15a6-47b6-a1be-e20a1123ef53",
    //     nome: 'Sala'
    // });    

    // const categoria02: Categoria = Categoria.recuperar({
    //     id: "33663685-283d-4a52-b86e-7463e7077b38",
    //     nome: 'Banho'
    // });

    // const produto: Produto = Produto.criar({
    //     nome:'Toalha de mesa',
    //     descricao:'toalha de algodão',
    //     valor:40,
    //     categorias:[categoria01,categoria02]
    //  });

    // const produtoInserido = await produtoRepo.inserir(produto);

    // console.log(produtoInserido);




    /////////Deletar Produto//////// 
    //  const produtoDeletado : boolean = await produtoRepo.deletar ('9a9a4631-124c-4c4c-9f24-7bd0d3a4d81c')
    //  console.log(produtoDeletado);

    /////Recuperar produto///

    // const todosProdutos: Array<Produto> = await produtoRepo.recuperarTodos();

    // console.log(todosProdutos);

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
        if (error instanceof DomainException) {
            console.log('Execeção de Dóminio');
            console.log(error.message);
        }
        else {
            console.log('Outras Exceções');
            console.log(error.message);
        }
        await prisma.$disconnect()
        process.exit(1)
    })