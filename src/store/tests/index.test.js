/* eslint-disable import/first */
import store, { logger, sagaMiddleware, middleware } from '../index'

describe('Store', () => {
  describe('logger', () => {
    const store = {}
    const next = jest.fn()

    it('should return result of next method called with action', () => {
      next.mockReturnValue('Test Logger')
      const action = jest.fn()
      const result = logger(store)(next)(action)

      expect(next).toHaveBeenCalledWith(action)
      expect(result).toEqual('Test Logger')
    })

    it('should call console.log with value if action is not function', () => {
      global.console = { log: jest.fn(() => '') }
      const action = 'action'
      logger(store)(next)(action)

      expect(console.log).toHaveBeenCalledWith('Dispatching:', action)
    })
  })

  describe('sagaMiddleware', () => {
    it('should be defined', () => {
      expect(sagaMiddleware).toBeDefined()
    })
  })

  describe('middleware', () => {
    it('should be array of two middlewares', () => {
      expect(middleware.length).toEqual(2)
    })
  })

  describe('store', () => {
    it('should be defined', () => {
      expect(store).toBeDefined()
    })
  })
})
