import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateProductsService } from './CreateProductsService';

export class CreateProductsController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { name, price, description } = req.body;

            const createProduct = container.resolve(CreateProductsService);

            const product = await createProduct.create({
                name,
                price,
                description,
            });

            return res.json(product);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}
