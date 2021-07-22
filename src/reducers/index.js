import { combineReducers } from 'redux'
import breed from './breed'
import images from './images'

export const getReducersToBeCombined = () => ({
  breed,
  images
})

const reducers = combineReducers(getReducersToBeCombined())
export default reducers
