import { Product } from '../typeorm/entities/Product';
import { ProductsDTO } from '../dtos/ProductsDTO';

export interface IProductsRepository {
    findById(id: number): Promise<Product>;

    findByName(name: string): Promise<Product>;

    list(): Promise<Product[]>;

    create(data: ProductsDTO): Promise<Product>;

    update(products: Product): Promise<Product>;

    delete(id: number): Promise<void>;
}
