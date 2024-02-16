import React from "react";

const initialState = {
  number1: 0,
  number2: 0,
  result: 0,
};

function reducer(state, action) {
  if (action.type === "SET_NUMBER_1")
    return { ...state, number1: action.number };
  if (action.type === "SET_NUMBER_2")
    return { ...state, number2: action.number };
  if (action.type === "ADDITION")
    return { ...state, result: state.number1 + state.number2 };
  if (action.type === "SUBSTRACTION")
    return { ...state, result: state.number1 - state.number2 };
  if (action.type === "CLEAR") return initialState;
}

export default function SimpleCalculator() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: "SET_NUMBER_1", number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: "SET_NUMBER_2", number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({ type: "ADDITION" })}>+</button>
        <button onClick={() => dispatch({ type: "SUBSTRACTION" })}>-</button>
        <button onClick={() => dispatch({ type: "CLEAR" })}>c</button>
      </div>
      <div>
        <h2>Result: {state.result}</h2>
      </div>
    </div>
  );
}
