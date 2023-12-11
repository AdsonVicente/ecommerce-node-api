import express from 'express';
import { inserirCategoriaController, recuperarCategoriaPorIdController, recuperarTodasCategoriasController, atualizarCategoriaController, deletarCategoriaController } from './controllers';
import { contentTypeMiddleware } from '@main/presentation/http/rest/middlewares/content-type.middlewares.';


const categoriaRouter = express.Router();

categoriaRouter.get(
    '/:id',
    (request, response, next) => recuperarCategoriaPorIdController.recuperar(request, response, next)
);

categoriaRouter.get(
    '/',
    (request, response, next) => recuperarTodasCategoriasController.recuperar(request, response, next)
);

categoriaRouter.post(
    '/',
    contentTypeMiddleware,
    (request, response, next) => inserirCategoriaController.inserir(request, response, next)
);

categoriaRouter.put(
    '/:id',
    (request, response, next) => atualizarCategoriaController.atualizar(request, response, next)
);

categoriaRouter.delete(
    '/:id',
    (request, response, next) => deletarCategoriaController.deletar(request, response, next)
)

export { categoriaRouter };