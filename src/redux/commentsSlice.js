import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
    },
    reducers: {
        setAllComments: (state, action) => {
            state.comments = action.payload.comments;
        },
        addComment: (state, action) => {
            state.comments = [...state.comments, action.payload.comment];
        },
    }
});

export const { setAllComments, addComment } = commentsSlice.actions;
export const selectComments = state => state.comments.comments;

export default commentsSlice.reducer;
