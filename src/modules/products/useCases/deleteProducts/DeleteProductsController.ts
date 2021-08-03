import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteProductsService } from './DeleteProductsService';

export class DeleteProductsController {
    async delete(req: Request, res: Response): Promise<Response> {
        const id = Number(req.params.id);

        try {
            const deleteProduct = container.resolve(DeleteProductsService);

            await deleteProduct.delete(id);

            return res.json({ message: 'Product delete on success!' });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}
