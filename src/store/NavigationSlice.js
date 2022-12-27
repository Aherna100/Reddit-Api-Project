import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubreddits, searchPost, getPostComments } from "../util/Reddit";

export const loadPost = createAsyncThunk(
    'post/loadPost',
    async () => {
        const post = await getSubreddits();
        const postWithMoreFields = post.map((post) => ({
            ...post,
            comments: [],
            loadingComments: "idle",
            errorComment: false
        }))
        return postWithMoreFields;
    }
);

export const loadPostQuery = createAsyncThunk(
    'post/loadPostQuery',
    async (term) => {
        const post = await searchPost(term);
        return post;
    }
);

export const loadComments = createAsyncThunk(
    'post/loadComments',
    async (obj, { rejectWithValue }) => {
        try {
            const comments = await getPostComments(obj.permalink);
            return { index: obj.index, comments: comments };
        } catch (error) {
            return rejectWithValue(error.comments);
        }

    }
);

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        post: [],
        searchTerm: "",
        error: false,
        isLoading: "idle"
    },
    reducers: {
        setSearchTerm: (state, action) => { state.searchTerm = action.payload }
    },
    extraReducers: (builder) => {
        builder.addCase(
            loadPost.pending, (state) => {
                state.error = false;
                state.isLoading = "loading";
            }
        );

        builder.addCase(
            loadPost.fulfilled, (state, action) => {
                state.post = action.payload;
                state.error = false;
                state.isLoading = "complete";
            }
        );

        builder.addCase(
            loadPost.rejected, (state) => {
                state.error = true;
                state.isLoading = "failed";
            }
        );
        builder.addCase(
            loadPostQuery.fulfilled, (state, action) => {
                state.post = action.payload;
                state.error = false;
                state.isLoading = "complete";
            }
        );
        builder.addCase(
            loadPostQuery.rejected, (state) => {
                state.error = true;
                state.isLoading = "failed";
            }
        );
        builder.addCase(
            loadPostQuery.pending, (state) => {
                state.error = false;
                state.isLoading = "loading";
            }
        );
        builder.addCase(
            loadComments.fulfilled, (state, action) => {
                state.post[action.payload.index].comments = action.payload.comments;
                state.post[action.payload.index].errorComment = false;
                state.post[action.payload.index].loadingComments = 'complete';
            }
        );
        builder.addCase(
            loadComments.pending, (state, meta) => {
                state.post[meta.meta.arg.index].errorComment = false;
                state.post[meta.meta.arg.index].loadingComments = "loading";
            }
        );
        builder.addCase(
            loadComments.rejected, (state, meta) => {
                state.post[meta.meta.arg.index].errorComment = true;
                state.post[meta.meta.arg.index].loadingComments = "failed";
            }
        );

    }
});


export const { navigationPost, setSearchTerm } = navigationSlice.actions;

export const selectTerm = (state) => state.navigation.searchTerm;
export const selectPost = (state) => state.navigation.post;
export const selectPostById = (state, postId) => state.navigation.post.find(post => post.id === postId);

export default navigationSlice.reducer;
