import { inject, injectable } from 'tsyringe';

import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { Product } from '@modules/products/typeorm/entities/Product';
import { ProductsDTO } from '@modules/products/dtos/ProductsDTO';

@injectable()
export class UpdateProductsService {
    constructor(
        @inject('ProductsRepository')
        private productsRepository: IProductsRepository
    ) {}

    async update({
        id,
        name,
        price,
        description,
    }: ProductsDTO): Promise<Product> {
        const product = await this.productsRepository.findById(id);

        if (!product) {
            throw new Error('Product not found!');
        }

        const productExists = await this.productsRepository.findByName(name);

        if (productExists) {
            throw new Error('Product Already Exists!');
        }

        product.name = name;
        product.price = price;
        product.description = description;

        return await this.productsRepository.update(product);
    }
}
