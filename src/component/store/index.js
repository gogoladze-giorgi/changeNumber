import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState={ counter:0, showCounter:true};


const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducer:{
        increase(state){
            state.counter++

        },
        decrease(state){
            state.counter--
        },
        increaseByFive(state,action){
            state.counter = state.counter + action.payload
        }
    }
})


const store=  configureStore({
   reducer : counterSlice.reducer
})
export const CounterAction =counterSlice.actions;
export default store;
