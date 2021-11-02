import React from 'react';
import {useSelector,useDispatch} from'react-redux'
import classes from './ChangeNumber.module.css'
import CounterAction from '../store/index'
const ChangeNumber =()=>{
    const count = useSelector(state=>state.counter.counter)
    const dispatch= useDispatch()
    const increase =()=>{
        dispatch(CounterAction.increase())
    }



    return <div className={classes.flex} >
        <h1>{count}</h1>
        <div>
            <button onClick={increase}>increase</button>
            <button>increase by 10</button>
            <button>decrease</button>

        </div>
    </div>
}
export default ChangeNumber;
