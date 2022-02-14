import { Service, Token } from 'typedi'
import { Product } from './model';

export interface ProductRepository {
  searchByName(name: string): Promise<Product[]>
}

export const PRODUCT_REPOSITORY_TOKEN = new Token<ProductRepository>('ProductRepository')

@Service(PRODUCT_REPOSITORY_TOKEN)
export class ProductRepositoryImpl implements ProductRepository {
  async searchByName(name: string): Promise<Product[]> {
    return Promise.resolve([
      {
        name: `some${name}`,
        prise: 42,
      }
    ])
  }
}
