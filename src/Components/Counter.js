import { useState } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { decrement, increment, incrementByAmount } from "../counterSlice";


export const Counter = () => {
    const [ input, setInput ] = useState(0);

    const count =  useSelector(state => state.value);

    const dispatch = useDispatch();

    const byAmountSubmit = e => {
      e.preventDefault();
      dispatch(incrementByAmount(Number(input)));
    };
    
    return (
        <div>
            <h1>Count: { count }</h1>
            <button onClick={ () => dispatch(increment()) }>
              Incement
            </button>
            <button onClick={ () => dispatch(decrement()) }>
              Decrement
            </button>
            <form onSubmit={ e => byAmountSubmit(e) }>
              <input type='number' onChange={e => setInput(e.target.value)} />
              <button type='submit'>Submit</button>
            </form>
        </div>
    )
};