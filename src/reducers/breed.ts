import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface BreedState {
  loading: boolean;
  fetched: boolean;
  error: string;
  data: string[]
}

const initialState: BreedState = {
  loading: false,
  fetched: false,
  error: '',
  data: []
}

export const breedSlice = createSlice({
  name: 'breed',
  initialState,
  reducers: {
    fetchBreeds: state => {
      state.loading = true
    },
    fetchBreedsSuccess: (state,  action: PayloadAction<string[]>) => {
      state.data = action.payload
      state.loading = false
      state.fetched = true
    },
    fetchBreedsFailure: (state,  action: PayloadAction<string>) => {
      state.data = []
      state.loading = false
      state.error = action.payload
      state.fetched = false
    },
  }
})

export const {
  fetchBreeds,
  fetchBreedsSuccess,
  fetchBreedsFailure,
} = breedSlice.actions


export default breedSlice.reducer