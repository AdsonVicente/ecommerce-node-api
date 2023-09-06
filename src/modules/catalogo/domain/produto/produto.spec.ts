import { faker } from "@faker-js/faker";
import { beforeAll, describe, expect, test } from "vitest";
import { Categoria } from "../categoria/categoria.entity";
import { Produto } from "./produto.entity";
import {
    DescricaoProdutoTamanhoMaximoInvalido,
    DescricaoProdutoTamanhomMinimoInvalido,
    NomeProdutoTamanhoMaximoInvalido, NomeProdutoTamanhoMinimoInvalido, QtdMaximaCategoriasProdutoInvalida, QtdMinimaCategoriaProdutoInvalida,
    ValorMinimoProdutoInvalido
} from "./produto.exception";
import { CriarProdutosProps } from "./produto.types";

let nomeProdutoValido: string;
let nomeProdutoTamanhoMinInvalido: string;
let nomeProdutoTamanhoMaxInvalido: string;
let descricaoProdutoValido: string;
let descricaoProdutoTamanhoMinInvalido: string;
let descricaoProdutoTamanhoMaxInvalido: string;
let valorProdutoValido: number;
let valorMinProdutoInvalido: number;
let categoriasValidas: Array<Categoria>;
let categoriasQtdMinInvalidas: Array<Categoria>;
let categoriasQtdMaxInvalidas: Array<Categoria>;

beforeAll(async () => {
    //Preenchendo as variáveis com dados em conformidade com as restrições de negócio para o nome do produto 
    nomeProdutoValido = faker.string.alpha({ length: { min: 5, max: 50 } });
    nomeProdutoTamanhoMinInvalido = faker.string.alpha({ length: { min: 0, max: 4 } });
    nomeProdutoTamanhoMaxInvalido = faker.string.alpha({ length: { min: 51, max: 51 } });
    //Preenchendo as variáveis com dados em conformidade com as restrições da regra de negócio  para a descriçção do produto
    descricaoProdutoValido = faker.string.alpha({ length: { min: 10, max: 200 } });
    descricaoProdutoTamanhoMinInvalido = faker.string.alpha({ length: { min: 0, max: 4 } });
    descricaoProdutoTamanhoMaxInvalido = faker.string.alpha({ length: { min: 201, max: 201 } });
    //preenchendo as variaveis com dados em conformidade com as restrições da regra de negócio para o valor do produto

    valorProdutoValido = faker.number.int({ min: 5, max: 50 });
    valorMinProdutoInvalido = faker.number.int({ min: -10, max: 0 });
    //Prencheendo um array de catgoria válido com dados simulados
    const categoriasValida01 = Categoria.criar({ nome: faker.string.alpha({ length: { min: 3, max: 50 } }) });
    const categoriasValida02 = Categoria.criar({ nome: faker.string.alpha({ length: { min: 3, max: 50 } }) });
    const categoriasValida03 = Categoria.criar({ nome: faker.string.alpha({ length: { min: 3, max: 50 } }) });
    const categoriasValida04 = Categoria.criar({ nome: faker.string.alpha({ length: { min: 3, max: 50 } }) });
    categoriasValidas = faker.helpers.arrayElements<Categoria>([categoriasValida01, categoriasValida02, categoriasValida03, categoriasValida04], { min: 1, max: 3 });
    categoriasQtdMinInvalidas = [];
    categoriasQtdMaxInvalidas = faker.helpers.arrayElements<Categoria>([categoriasValida01, categoriasValida02, categoriasValida03, categoriasValida04], { min: 4, max: 4 });








});
//Suite de Testes de Unidade - Entidade de Domínio
//Usando o 'describe', você pode definir como um conjunto de testes ou benchmarks relacionados
describe('Entidade de Domínio: Criar Produto', () => {

    //Teste define um conjunto de expectativas relacionadas. 
    test('Deve Criar Um Produto Válido', async () => {

        //Dado (Given)
        const produtoValido: CriarProdutosProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(Produto.criar(produtoValido))
            .to.be.instanceof(Produto);

    });

    //Teste define um conjunto de expectativas relacionadas. 
    test('Não Deve Criar Produto Com Nome Inválido (Tamanho Mínimo)', async () => {

        //Dado (Given)
        //Nome menor que cinco caracteres
        const produtoNomeInvalido: CriarProdutosProps = {
            nome: nomeProdutoTamanhoMinInvalido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(NomeProdutoTamanhoMinimoInvalido);

    });

    //Teste define um conjunto de expectativas relacionadas. 
    test('Não Deve Criar Produto Com Nome Inválido (Tamanho Máximo)', async () => {



        //Dado (Given)
        //Nome maior que cinquenta caracteres
        const produtoNomeInvalido: CriarProdutosProps = {
            nome: nomeProdutoTamanhoMaxInvalido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(NomeProdutoTamanhoMaximoInvalido);

    });

    //Teste define um conjunto de expectativas relacionadas. 
    test('Não Deve Criar Produto Com Descrição Inválida (Tamanho Mínimo)', async () => {

        //Dado (Given)
        //Descrição menor que dez caracteres
        const produtoNomeInvalido: CriarProdutosProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoTamanhoMinInvalido,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(DescricaoProdutoTamanhomMinimoInvalido);

    });

    //Teste define um conjunto de expectativas relacionadas. 
    test('Não Deve Criar Produto Com Descrição Inválida (Tamanho Máximo)', async () => {

        //Dado (Given)
        //Descrição maior que duzentos caracteres
        const produtoNomeInvalido: CriarProdutosProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoTamanhoMaxInvalido,
            valor: valorProdutoValido,
            categorias: categoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(DescricaoProdutoTamanhoMaximoInvalido);

    });

    //Teste define um conjunto de expectativas relacionadas. 
    test('Não Deve Criar Produto Com Valor Mínimo Inválido', async () => {

        //Dado (Given)
        //Valor mínimo menor que 0
        const produtoNomeInvalido: CriarProdutosProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorMinProdutoInvalido,
            categorias: categoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(ValorMinimoProdutoInvalido);

    });

    //Teste define um conjunto de expectativas relacionadas. 
    test('Não Deve Criar Produto Com Número Mínimo de Categorias Inválido', async () => {

        //Dado (Given)
        //Nenhuma categoria é atribuida - menor que 1
        const produtoNomeInvalido: CriarProdutosProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categorias: categoriasQtdMinInvalidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(QtdMinimaCategoriaProdutoInvalida);

    });

    //Teste define um conjunto de expectativas relacionadas. 
    test('Não Deve Criar Produto Com Número Máximo de Categorias Inválido', async () => {

        //Dado (Given)
        //4 categorias é atribuidas - maior que 3
        const produtoNomeInvalido: CriarProdutosProps = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor:valorProdutoValido,
            categorias: categoriasQtdMaxInvalidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(QtdMaximaCategoriasProdutoInvalida);

    });

});