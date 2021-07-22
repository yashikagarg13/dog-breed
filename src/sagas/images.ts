import { PayloadAction } from '@reduxjs/toolkit'
import { put, call, takeEvery, all, select } from 'redux-saga/effects'
import * as api from '../api/breed'
import {
  Images,
  fetchImages,
  fetchImagesSuccess,
  fetchImagesFailure
} from '../reducers/images'
import { getImages } from '../selectors'

export function * fetchImagesRequest(action: PayloadAction<string[]>): any {
  try {
    const breeds =  action.payload
    const existingImages = yield select(getImages)

    const breedsForFetch = breeds.filter(breed => !existingImages[breed])
    let data = {}

    if (breedsForFetch.length) {
      const imagesArr = yield all(breedsForFetch.map(breed => call(api.getImagesByBreed, breed)))
      data = breedsForFetch.reduce((imagesObj: Images, breed, index) => {
        imagesObj[breed] = imagesArr[index].message
        return imagesObj
      }, {})
    }

    yield put(fetchImagesSuccess({
      ...existingImages,
      ...data
    }))
  } catch (e) {
    yield put(fetchImagesFailure(e.message))
  }
}

export function * watchFetchImagesRequest () {
  yield takeEvery(
    fetchImages,
    fetchImagesRequest
  )
}
