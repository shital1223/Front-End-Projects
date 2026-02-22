import { useRef, useState } from "react";

export function Counter() {
  const [charLength, setCharLength] = useState(0);
  const [wordLength, setwordLength] = useState(0);

  const textRef = useRef();

  const calcLength = () => {
    const value = textRef.current.value;
    setCharLength(value.length);
    const words = value.trim().split(/\s+/);
    setwordLength(value.trim() ? words.length : 0);
  };

  const clearValue = () => {
    textRef.current.value = "";
    calcLength();
  };

  return (
    <section className="counter">
      <textarea
        onChange={calcLength}
        ref={textRef}
        data-testid="textarea"
        placeholder="Type or paste your text"
      ></textarea>
      <button
        onClick={clearValue}
        data-testid="clearBtn"
        disabled={charLength ? "" : "disabled"}
      >
        Clear
      </button>
      <p className="result">
        <span data-testid="charLength">Character: {charLength}</span>
        <span data-testid="wordLength">Word: {wordLength}</span>
      </p>
    </section>
  );
}
