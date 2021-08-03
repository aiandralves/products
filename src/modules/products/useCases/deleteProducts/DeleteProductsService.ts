import { inject, injectable } from 'tsyringe';

import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';

@injectable()
export class DeleteProductsService {
    constructor(
        @inject('ProductsRepository')
        private productsRepository: IProductsRepository
    ) {}

    async delete(id: number): Promise<void> {
        const product = await this.productsRepository.findById(id);

        if (!product) {
            throw new Error('Product not found.');
        }

        await this.productsRepository.delete(id);
    }
}
