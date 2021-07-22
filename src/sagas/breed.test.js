import { call, put, takeEvery } from 'redux-saga/effects'
import {
  fetchBreeds,
  fetchBreedsFailure,
  fetchBreedsSuccess
} from '../reducers/breed'
import * as api from '../api/breed'
import * as sagas from './breed'

describe('Breed saga', () => {
  describe('fetchBreedsRequest', () => {
    const gen = sagas.fetchBreedsRequest()

    it('should call getBreeds with given params', () => {
      expect(gen.next().value).toEqual(
        call(api.getBreeds)
      )
    })

    it('should put fetchBreedsSuccess with data', () => {
      const message = { 'hound':  ['test1'], 'test2': [] }
      expect(gen.next({ message }).value).toEqual(
        put(fetchBreedsSuccess([
          'hound',
          'test2',
          'hound: test1',
        ]))
      )
    })

    it('should put fetchBreedsFailure with error message on error', () => {
      const error = { message: 'error' }
      expect(gen.throw(error).value).toEqual(
        put(fetchBreedsFailure('error'))
      )
    })
  })
})
