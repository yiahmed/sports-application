import { createAsyncThunk, createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { Appthunk, RootState} from '../../../store';


export interface CounterState {
    value: number;
    status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
    value: 0,
    status: 'idle'
}
//createSlice({name, state, reducer{...}})
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer

//test