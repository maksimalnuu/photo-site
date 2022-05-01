import { createContext, useReducer } from "react";

const initialState = {
    photos: [],
    filteredPhotos: [],
    photoOnPage: [],
    currentPage: 0,
    pagesCount: 0,
    itemsPerPage: 50,
    filterById: [],
}

export const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
    return <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>
}
  
const reducer = (state, action) => {
  switch(action.type){
    case 'NEXT_PAGE': {
      const currentPage = state.currentPage + 1;
      const from = currentPage * state.itemsPerPage;
      const to = from + state.itemsPerPage;

      if(currentPage >= state.pagesCount) return state;

      return {
        ...state,
        currentPage,
        photoOnPage: state.filteredPhotos.slice(from, to),
      }
    }
    case 'PREVIOUS_PAGE': {
      const currentPage = state.currentPage - 1;
      const from = currentPage * state.itemsPerPage;
      const to = from + state.itemsPerPage;

      if(currentPage < 0) return state;

      return {
        ...state,
        currentPage,
        photoOnPage: state.filteredPhotos.slice(from, to),
      }
    }
    case 'DELETE_PHOTO': {
      const photos = state.photos.filter(x => x.id !== action.payload);
      const filteredPhotos = state.filteredPhotos.filter(x => x.id !== action.payload);
      const pagesCount = Math.ceil(filteredPhotos.length / state.itemsPerPage);
      const currentPage = state.currentPage > pagesCount ? pagesCount : state.currentPage;
      const from = currentPage * state.itemsPerPage;
      const to = from + state.itemsPerPage;
      const photoOnPage = filteredPhotos.slice(from, to);

      return {
        ...state,
        photos,
        filteredPhotos,
        photoOnPage,
        pagesCount,
        currentPage,
      }
    }
    case 'LOADED_PHOTOS': {
      const from = state.currentPage * state.itemsPerPage;
      const to = from + state.itemsPerPage;
      const photos = action.payload;

      const filterById = []; 
      action.payload.forEach(element => {
        if(!filterById.includes(element.albumId)) filterById.push(element.albumId)
      });

      return {
        ...state,
        currentPage: 0,
        photos,
        filteredPhotos: photos,
        photoOnPage: action.payload.slice(from, to),
        pagesCount: Math.ceil(action.payload.length / state.itemsPerPage),
        filterById
      }
    }
    case 'FILTER_PHOTO': {
      const filteredPhotos = state.photos.filter(x => x.albumId === +action.payload);

      return {
        ...state,
        currentPage: 0,
        filteredPhotos,
        photoOnPage: filteredPhotos.slice(0, state.itemsPerPage),
        pagesCount: Math.ceil(filteredPhotos.length / state.itemsPerPage),
      };
    }
    default: {
      return state;
    }
  }
}