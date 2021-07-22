import { fork, all } from 'redux-saga/effects'
import { watchFetchBreedsRequest } from './breed'
import { watchFetchImagesRequest } from './images'

export default function * root () {
  yield all([
    fork(watchFetchBreedsRequest),
    fork(watchFetchImagesRequest)
  ])
}
