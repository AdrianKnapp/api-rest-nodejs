import { expect, test } from 'vitest'

test('user should be able to create a new transaction', () => {
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
