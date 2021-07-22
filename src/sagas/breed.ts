import { put, call, takeEvery } from 'redux-saga/effects'
import * as api from '../api/breed'
import {
  fetchBreeds,
  fetchBreedsSuccess,
  fetchBreedsFailure
} from '../reducers/breed'

export function * fetchBreedsRequest(): any {
  try {
    const { message } = yield call(api.getBreeds)
    const breeds = Object.keys(message)
    const subbreeds = breeds
      .filter(breed => breed.length)
      .reduce((combos: string[], breed: string) => {
        return [
          ...combos,
          ...message[breed].map((subbreed: string) => `${breed}: ${subbreed}`)
        ]
      }, [])
    yield put(fetchBreedsSuccess([
      ...breeds,
      ...subbreeds
    ]))
  } catch (e) {
    yield put(fetchBreedsFailure(e.message))
  }
}

export function * watchFetchBreedsRequest () {
  yield takeEvery(
    fetchBreeds,
    fetchBreedsRequest
  )
}
