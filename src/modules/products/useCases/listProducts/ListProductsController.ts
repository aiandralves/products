import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListProductsService } from './ListProductsService';

export class ListProductsController {
    async list(req: Request, res: Response): Promise<Response> {
        const listProducts = container.resolve(ListProductsService);

        const products = await listProducts.list();

        return res.json(products);
    }
}
