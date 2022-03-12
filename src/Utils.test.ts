import { test, describe, expect } from 'vitest'
import { uuid } from './Utils'

describe('UUID', () => {
  test('By default should generate random 8 length by base62', () => {
    const results: string[] = []
    for (let i = 0; i < 1000; i++) {
      results.push(uuid())
    }
    results.forEach(v => {
      expect(v).toMatch(
        /^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]{8}$/
      )
    })
  })

  test('By default should generate random 16 length by base62', () => {
    const results: string[] = []
    for (let i = 0; i < 1000; i++) {
      results.push(uuid(16))
    }
    results.forEach(v => {
      expect(v).toMatch(
        /^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]{16}$/
      )
    })
  })
})
