import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
    {
      id: 1,
      title: 'Программист за работой',
      author: 'DevMaster',
      likes: 1542,
      favorite: false,
    },
    {
      id: 2,
      title: 'Когда код работает с первого раза',
      author: 'CodeWizard',
      likes: 2897,
      favorite: false,
    },
    {
      id: 3,
      title: 'Дедлайн близко',
      author: 'StressDeveloper',
      likes: 3421,
      favorite: false,
    },
    {
      id: 4,
      title: 'Найден баг в продакшене',
      author: 'BugHunter',
      likes: 1876,
      favorite: false,
    }
  ],
  favMemes: []
}

export const memeSlice = createSlice({
    name: 'memes',
    initialState,
    reducers: {
        addMeme: (state, action) => {
            state.items.push(action.payload);
        },
        removeMeme: (state, action) => {
            state.items = state.items.filter(meme => meme.id !== action.payload)
        },
        likeMeme: (state, action) => {
            const memeIndex = state.items.findIndex(meme => meme.id === action.payload);
            state.items[memeIndex].favorite = !state.items[memeIndex].favorite;
        },
        makeFavorites: (state, action) => {
            state.favMemes = state.memes.filter(item => item.favorite);
        }
    }
});

export const { addMeme, removeMeme, likeMeme, makeFavorites } = memeSlice.actions;

export default memeSlice.reducer;