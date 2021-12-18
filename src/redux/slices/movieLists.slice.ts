import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './index'

interface MovieSate {
  page: number
  search: string
}

const initialState: MovieSate = {
  page: 1,
  search: ''
}

export const movieLists = createSlice({
  name: "movieLists",
  initialState,
  reducers: {
    setNextPage: (state) => {
      state.page += 1
    },
    setPrevPage: (state) => {
      state.page -= 1
    },    
    setShowCurrentPage: (state, action: PayloadAction<number>) => {
      state.page += action.payload
    },
    setSearchMovie: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  }
});


export const currentPageSelector = (state: RootState ) => state.movieLists.page
export const searchMovieValueSelector = (state: RootState ) => state.movieLists.search

export const { name, actions, reducer } = movieLists