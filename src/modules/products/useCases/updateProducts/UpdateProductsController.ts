import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateProductsService } from './UpdateProductsService';

export class UpdateProductsController {
    async update(req: Request, res: Response): Promise<Response> {
        const id = Number(req.params.id);
        const { name, price, description } = req.body;

        try {
            const updateProduct = container.resolve(UpdateProductsService);

            const product = await updateProduct.update({
                id,
                name,
                price,
                description,
            });

            return res.json(product);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}
