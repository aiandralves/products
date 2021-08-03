import { inject, injectable } from 'tsyringe';

import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { Product } from '@modules/products/typeorm/entities/Product';
import { ProductsDTO } from '@modules/products/dtos/ProductsDTO';

@injectable()
export class CreateProductsService {
    constructor(
        @inject('ProductsRepository')
        private productsRepository: IProductsRepository
    ) {}

    async create({ name, price, description }: ProductsDTO): Promise<Product> {
        const productExists = await this.productsRepository.findByName(name);

        if (productExists) {
            throw new Error('Product Already Exists!');
        }

        const product = await this.productsRepository.create({
            name,
            price,
            description,
        });

        return product;
    }
}
