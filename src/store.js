import { configureStore } from "@reduxjs/toolkit";
import memesReduser from './features/memes/memeSlice';

export const store = configureStore({
    reducer: {
        memes: memesReduser,
    }
});