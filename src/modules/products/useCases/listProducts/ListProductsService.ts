import { inject, injectable } from 'tsyringe';

import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { Product } from '@modules/products/typeorm/entities/Product';

@injectable()
export class ListProductsService {
    constructor(
        @inject('ProductsRepository')
        private productsRepository: IProductsRepository
    ) {}

    async list(): Promise<Product[]> {
        const products = await this.productsRepository.list();

        return products;
    }
}
