/* eslint-disable */
import reducer from './breed'
import {
  fetchBreeds,
  fetchBreedsFailure,
  fetchBreedsSuccess
} from './breed'

describe('Breed Reducers', () => {
  const initialState = {
    loading: false,
    fetched: false,
    error: '',
    data: []
  }

  it('should return initial state if no state is passed', () => {
    const newState = reducer(undefined, {})
    expect(newState).toEqual(initialState)
  })

  describe('when action is fetchBreeds', () => {
    it('should set loading to true', () => {
      const action = fetchBreeds()

      const newState = reducer(initialState, action)

      expect(newState.loading).toEqual(true)
    })
  })

  describe('when action is fetchBreedsFailure', () => {
    it('should set error to payload', () => {
      const error = 'error'
      const action = fetchBreedsFailure(error)

      const newState = reducer(initialState, action)

      expect(newState.loading).toEqual(false)
      expect(newState.fetched).toEqual(false)
      expect(newState.data).toEqual([])
      expect(newState.error).toEqual(error)
    })
  })

  describe('when action is fetchBreedsSuccess', () => {
    it('should set loading to true', () => {
      const data = ['test1']
      const action = fetchBreedsSuccess(data)

      const newState = reducer(initialState, action)

      expect(newState.loading).toEqual(false)
      expect(newState.fetched).toEqual(true)
      expect(newState.data).toEqual(data)
      expect(newState.error).toEqual('')
    })
  })
})
