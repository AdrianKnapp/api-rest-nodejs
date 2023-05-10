import { afterAll, beforeAll, expect, describe, it } from 'vitest'
import request from 'supertest'
import { app } from '../app'

describe('transaction routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a new transaction', async () => {
    const response = await request(app.server).post('/transactions').send({
      title: 'Salary',
      type: 'credit',
      amount: 3000,
    })

    expect(response.statusCode).toBe(201)
  })
})
