import 'reflect-metadata'
import { Container } from 'typedi'
import { ProductRepository, PRODUCT_REPOSITORY_TOKEN } from '@/repository'
import { Product } from '@/model'

describe('ProductRepositpory', () => {
  let repo: ProductRepository

  beforeEach(() => {
    repo = Container.get(PRODUCT_REPOSITORY_TOKEN)
  })

  describe('searchByName()', () => {
    it('returns products which contains the given query in name', async () => {
      expect(await repo.searchByName('foo')).toSatisfyAll((product: Product) => product.name.includes('foo'))
    })
  })
})
