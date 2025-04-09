import react, { useState } from "react";
const Todo = () => {
    const[state,setState] =useState(20);
    return (
        <div>
            Todo<h1>{state}</h1>
            <button onClick={()=>setState(state+1)}>INCREMENT</button>
            <button onClick={()=>setState(state-2)}>DECREMENT</button>
            <button onClick={()=>setState(0)}>RESET</button>
            
        </div>);
}

export default Todo;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./storeredux";
// const Todo= () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();
//   return (
//     <div
//     >
//       <div>Count:{count}</div>
      
//       <button onClick={() => dispatch(increment())}>INCREMENT</button>
//       <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
      
//     </div>
//   );
// };

// export default Todo;