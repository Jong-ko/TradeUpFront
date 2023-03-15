import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userAccount: '',
    isLoggedIn: false,
    myItems: [],
};

export const swapSlice = createSlice({
    name: 'swaps',
    initialState,
    reducers: {
        addSwaps: (state, action) => {
            state.myItems = [...state.myItems, action.payload]
        },
        setSwaps: (state, action) => {
            state.myItems = action.payload
        },
        deleteSwapById: (state, action) => {
            state.myItems = state.swaps.filter(swaps => swaps.id !== action.payload)
        },
        setUserAccount: (state, action) => {
            state.userAccount = action.payload
        },
        logIn: (state) => {
            state.isLoggedIn = true;
        },
        logOut: (state) => {
            state.isLoggedIn = false;
            state.userAccount = '';
            state.myItems = [];
        },
    },
});

export const { setSwaps,deleteSwapById,addSwaps,setUserAccount,logIn,logOut } = swapSlice.actions;
export const selectAllItems = (state) => state.swaps.myItems;
export const selectIsLoggedIn = (state) => state.swaps.isLoggedIn;
export const selectUserAccount = (state) => state.swaps.userAccount;
export default swapSlice.reducer;