import { Inject, Service, Token } from 'typedi'
import { Product } from './model'
import { ProductRepository, PRODUCT_REPOSITORY_TOKEN } from './repository'

export interface SearchService {
  search(query: string): Promise<Product[]>
}

export const SEARCH_SERVICE_TOKEN = new Token<SearchService>('SearchService')

@Service(SEARCH_SERVICE_TOKEN)
export class SearchServiceImpl implements SearchService {
  @Inject(PRODUCT_REPOSITORY_TOKEN)
  productRepository!: ProductRepository

  async search(query: string): Promise<Product[]> {
    return await this.productRepository.searchByName(query)
  }
}
