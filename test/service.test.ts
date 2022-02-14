import 'reflect-metadata'
import { Container } from 'typedi'
import { MockProxy, mock } from 'jest-mock-extended'
import { SearchService, SEARCH_SERVICE_TOKEN } from '@/service'
import { ProductRepository, PRODUCT_REPOSITORY_TOKEN } from '@/repository'
import { Product } from '@/model'

describe('ProductRepositpory', () => {
  let service: SearchService
  let mockRepo: MockProxy<ProductRepository>

  beforeEach(() => {
    mockRepo = mock<ProductRepository>()
    Container.set(PRODUCT_REPOSITORY_TOKEN, mockRepo)
    service = Container.get(SEARCH_SERVICE_TOKEN)
  })

  afterEach(() => {
    Container.reset()
  })

  describe('search()', () => {
    const products: Product[] = [
      {
        name: 'some foo',
        prise: 42,
      }
    ]

    beforeEach(() => {
      mockRepo.searchByName.mockResolvedValueOnce(products)
    })

    it("returns repository's results", async () => {
      expect(await service.search('foo')).toEqual(products)
    })
  })
})
