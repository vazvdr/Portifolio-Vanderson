import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// Limpa o DOM após cada teste
afterEach(() => {
  cleanup()
})

// Mock da animação IntersectionObserver de forma global
class IntersectionObserverMock {
  constructor(callback, options) {
    this.callback = callback
    this.options = options
  }

  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
})
