import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./buttons";
import TextBox from "./textbox";
import Result from "./result";

function App() {
  const [query, setQuery] = useState(0);
  const [result, setResult] = useState(0);
  const [intermediate_result, setIntermediateResult] = useState(0);
  const [operator, setOperator] = useState();

  const props = {
    query: query,
    setQuery: setQuery,
    intermediate_result: intermediate_result,
    setIntermediateResult: setIntermediateResult,
    result: result,
    setResult: setResult,
    operator: operator,
    setOperator: setOperator,
  };

  useEffect(() => {
    if (intermediate_result) {
      switch (operator) {
        case "+":
          setResult(
            Number(intermediate_result) +
              Number(query.slice(query.indexOf(operator) + 1))
          );
          break;
        case "-":
          setResult(
            Number(intermediate_result) -
              Number(query.slice(query.indexOf(operator) + 1))
          );
          break;
        case "X":
          setResult(
            Number(intermediate_result) *
              Number(query.slice(query.indexOf(operator) + 1))
          );
          break;
        case "/":
          setResult(
            Number(intermediate_result) /
              Number(query.slice(query.indexOf(operator) + 1))
          );
          break;
      }
    }
  }, [query]);

  return (
    <>
      <div>
        <TextBox query={query} />
        <Result result={result} />
      </div>
      <div>
        <div>
          <Button number={"CE"} {...props} />
          <Button number={"C"} {...props} />
          <Button number={"<-"} {...props} />
          <Button number={"/"} {...props} />
        </div>
        <div>
          <Button number={7} {...props} />
          <Button number={8} {...props} />
          <Button number={9} {...props} />
          <Button number={"X"} {...props} />
        </div>
        <div>
          <Button number={4} {...props} />
          <Button number={5} {...props} />
          <Button number={6} {...props} />
          <Button number={"-"} {...props} />
        </div>
        <div>
          <Button number={1} {...props} />
          <Button number={2} {...props} />
          <Button number={3} {...props} />
          <Button number={"+"} {...props} />
        </div>
        <div>
          <Button number={0} {...props} />
          <Button number={"."} {...props} />
          <Button number={"="} {...props} />
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
