import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Images {
  [key: string]: string[]
}
interface ImagesState {
  loading: boolean;
  fetched: boolean;
  error: string;
  data: Images;
}

const initialState: ImagesState = {
  loading: false,
  fetched: false,
  error: '',
  data: {}
}

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    fetchImages: (state,  action: PayloadAction<string[]>) => {
      state.loading = true
    },
    fetchImagesSuccess: (state,  action: PayloadAction<Images>) => {
      state.data = action.payload
      state.loading = false
      state.fetched = true
    },
    fetchImagesFailure: (state,  action: PayloadAction<string>) => {
      state.data = {}
      state.loading = false
      state.error = action.payload
      state.fetched = false
    },
  }
})

export const {
  fetchImages,
  fetchImagesSuccess,
  fetchImagesFailure,
} = imagesSlice.actions


export default imagesSlice.reducer