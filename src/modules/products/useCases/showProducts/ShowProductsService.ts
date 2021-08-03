import { inject, injectable } from 'tsyringe';

import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { Product } from '@modules/products/typeorm/entities/Product';

@injectable()
export class ShowProductsService {
    constructor(
        @inject('ProductsRepository')
        private productsRepository: IProductsRepository
    ) {}

    async show(id: number): Promise<Product> {
        const product = await this.productsRepository.findById(id);

        if (!product) {
            throw new Error('Product not found!');
        }

        return product;
    }
}
