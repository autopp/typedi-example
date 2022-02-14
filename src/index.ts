import "reflect-metadata"
import { Container } from 'typedi'
import express, { Request, Response } from 'express'
import { SEARCH_SERVICE_TOKEN } from './service'
import { Product } from './model'

type SearchResBody = {
  results: Product[]
}

const app = express()

const searchService = Container.get(SEARCH_SERVICE_TOKEN)

app.get('/search', async (req: Request<{}, SearchResBody, {}, { query: string }>, res: Response<SearchResBody>) => {
  res.json({ results: await searchService.search(req.query.query) })
})

app.listen(3000, () => {
  console.log('start')
})
