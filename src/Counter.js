// import React, { useState } from 'react';

// function Counter() {

//   const [number, setNumber ] = useState(0);

//   const onIncrease = () => {
//     setNumber(prevNumber => prevNumber + 1);
//   }

//   const onDecrease = () => {
//     setNumber(prevNumber => prevNumber -1);
//     // setNumber(number - 1);
//     // 위 두 코드의 차이점은 각 각 연속 두 번씩 실행해보면 알 수 있음.
//   }
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//       onIncrease() 안됨. 렌더링 하는 시점에서 함수 호출됨.
//     </div>
//   );
// }

// export default Counter;


import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function Counter(){
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;