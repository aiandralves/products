import { getRepository, Repository } from 'typeorm';

import { Product } from '../entities/Product';
import { IProductsRepository } from '../../repositories/IProductsRepository';
import { ProductsDTO } from '@modules/products/dtos/ProductsDTO';

export class ProductsRepository implements IProductsRepository {
    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }

    async findById(id: number): Promise<Product> {
        const product = await this.repository.findOne(id);

        return product;
    }

    async findByName(name: string): Promise<Product> {
        const product = await this.repository.findOne({ name });

        return product;
    }

    async list(): Promise<Product[]> {
        const products = await this.repository.find();

        return products;
    }

    async create({ name, price, description }: ProductsDTO): Promise<Product> {
        const product = this.repository.create({
            name,
            price,
            description,
        });

        await this.repository.save(product);

        return product;
    }

    async update(product: Product): Promise<Product> {
        return await this.repository.save(product);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
