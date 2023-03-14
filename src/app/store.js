import { configureStore } from '@reduxjs/toolkit';
import swapsRudcer from '../features/swapSlice'


export default configureStore( {
    reducer: {
        swaps: swapsRudcer,
    }
})