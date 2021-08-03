import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowProductsService } from './ShowProductsService';

export class ShowProductsController {
    async show(req: Request, res: Response): Promise<Response> {
        const id = Number(req.params.id);

        try {
            const showProduct = container.resolve(ShowProductsService);

            const product = await showProduct.show(id);

            return res.json(product);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}
