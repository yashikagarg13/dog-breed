import { RootState } from '../store'

export const getBreeds = (state: RootState) => state.breed.data
export const isBreedsLoading = (state: RootState) => state.breed.loading
export const getBreedsError = (state: RootState) => state.breed.error
export const isBreedsFetched = (state: RootState) => state.breed.fetched

export const getImages = (state: RootState) => state.images.data
export const isImagesLoading = (state: RootState) => state.images.loading
export const getImagesError = (state: RootState) => state.images.error
export const isImagesFetched = (state: RootState) => state.images.fetched

