import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userAccount: '',
  userId: 0,
  isLoggedIn: false,
  isPending: false,
  myItems: [],
};

export const swapSlice = createSlice({
  name: 'swaps',
  initialState,
  reducers: {
    addSwaps: (state, action) => {
      state.myItems = [...state.myItems, action.payload];
    },
    setSwaps: (state, action) => {
      state.myItems = action.payload;
    },
    deleteSwapById: (state, action) => {
      state.myItems = state.swaps.filter(
        (swaps) => swaps.id !== action.payload
      );
    },
    setUserAccount: (state, action) => {
      state.userAccount = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    setPending: (state) => {
      state.isPending = true;
    },
    unsetPending: (state) => {
      state.isPending = false;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.isPending = false;
      state.userAccount = '';
      state.myItems = [];
      state.userId = 0;
      window.localStorage.removeItem('localIsLoggedIn');
      window.localStorage.removeItem('localUserAccount');
      window.localStorage.removeItem('localUserID');
      window.localStorage.removeItem('localMyItems');
      window.localStorage.removeItem('localIsPending');
    },
  },
});

export const {
  setSwaps,
  deleteSwapById,
  addSwaps,
  setUserId,
  setUserAccount,
  logIn,
  logOut,
  setPending,
  unsetPending,
} = swapSlice.actions;
export const selectAllItems = (state) => state.swaps.myItems;
export const selectIsLoggedIn = (state) => state.swaps.isLoggedIn;
export const selectUserAccount = (state) => state.swaps.userAccount;
export const selectUserID = (state) => state.swaps.userId;
export const selectIsPending = (state) => state.swaps.isPending;
export default swapSlice.reducer;
