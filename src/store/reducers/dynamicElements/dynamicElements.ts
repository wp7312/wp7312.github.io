import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../reducers';

export enum DynamicElementStatus {
    CLOSED = 'closed',
    COLLAPSED = 'collapsed',
    VISIBLE = 'visible'
}

export interface DynamicElementsState {
    entities: Record<string, DynamicElementStatus>
}

const initialState: DynamicElementsState = {
    entities: {},
}

export const dynamicElementsSlice = createSlice({
    name: 'dynamicElements',
    initialState,
    reducers: {
        setDynamicElement: (state, action) => {
            const {status, title} = action.payload;
            if (state.entities[title] && state.entities[title] !== DynamicElementStatus.VISIBLE) {
                state.entities[title] = DynamicElementStatus.VISIBLE
            } else {
                state.entities[title] = status;
            }
        },
    },
})

export const {setDynamicElement} = dynamicElementsSlice.actions

export const selectDynamicElement = (state: RootState) => state.dynamicElements.entities

export default dynamicElementsSlice.reducer
