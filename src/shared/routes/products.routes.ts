import { Router } from 'express';

import { CreateProductsController } from '@modules/products/useCases/createProducts/CreateProductsController';
import { UpdateProductsController } from '@modules/products/useCases/updateProducts/UpdateProductsController';
import { ShowProductsController } from '@modules/products/useCases/showProducts/ShowProductsController';
import { ListProductsController } from '@modules/products/useCases/listProducts/ListProductsController';
import { DeleteProductsController } from '@modules/products/useCases/deleteProducts/DeleteProductsController';

export const routerProducts = Router();

const createProducts = new CreateProductsController();
const updateProduct = new UpdateProductsController();
const showProduct = new ShowProductsController();
const listProducts = new ListProductsController();
const deleteProduct = new DeleteProductsController();

routerProducts.post('/', createProducts.create);
routerProducts.put('/:id', updateProduct.update);
routerProducts.get('/:id', showProduct.show);
routerProducts.get('/', listProducts.list);
routerProducts.delete('/:id', deleteProduct.delete);
