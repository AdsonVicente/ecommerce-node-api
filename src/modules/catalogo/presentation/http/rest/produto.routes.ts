import express from 'express';
import { recuperarTodosProdutosController } from './controllers';


const produtoRouter = express.Router();

produtoRouter.get(
    '/',
    (request, response, next) => recuperarTodosProdutosController.recuperar(request, response, next)
);




// produtoRouter.get(
//   '/:id',
//   (request, response, next) => recuperarProdutoPorIdController.recuperar(request, response, next)
// );

// produtoRouter.get(
//   '/',
//   (request, response, next) => recuperarTodosProdutosController.recuperar(request, response, next)
// );

// produtoRouter.post(
//   '/',
//   contentTypeMiddleware,
//   validaInputInserirProduto,
//   (request, response, next) => inserirProdutoController.inserir(request, response, next)
// );

// produtoRouter.put(
//   '/:id',
//   (request, response, next) => atualizarProdutoController.atualizar(request, response, next)
// );

// produtoRouter.delete(
//   '/:id',
//   (request, response, next) => deletarProdutoController.deletar(request, response, next)
// );

// // Export the product router
// export { produtoRouter };

export {produtoRouter}