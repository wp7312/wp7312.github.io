import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducers';

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export default makeStore();
