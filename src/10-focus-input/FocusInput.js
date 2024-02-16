import React from "react";

export default function FocusInput() {
  const initialValue = "";
  const inputRef = React.useRef(initialValue);
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <div>
        <label htmlFor="focused-input">Don't focus me on page load!</label>
        <input name="focused-input"></input>
      </div>
      <div>
        <label htmlFor="focused-input">Focus me on page load!</label>
        <input ref={inputRef} name="focused-input"></input>
      </div>
    </>
  );
}
