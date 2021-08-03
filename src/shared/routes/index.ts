import { Router } from 'express';

import { routerProducts } from './products.routes';

export const routes = Router();

routes.use('/products', routerProducts);
