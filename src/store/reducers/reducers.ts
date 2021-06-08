import { combineReducers } from '@reduxjs/toolkit';
import dynamicElementsReducer from './dynamicElements/dynamicElements';

const combinedReducer = combineReducers({
    dynamicElements: dynamicElementsReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;

export default combinedReducer;
