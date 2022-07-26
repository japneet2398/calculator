export default function Button({
  number,
  query,
  setQuery,
  intermediate_result,
  setIntermediateResult,
  result,
  setResult,
  operator,
  setOperator,
}) {
  let store_in_history = () => {};

  let updateText = (ev) => {
    if (ev.target.value == "=") {
      store_in_history();
    } else if (ev.target.value == "C") {
      setQuery(0);
      setIntermediateResult(0);
      setResult(0);
      setOperator("");
      return;
    } else if (ev.target.value == "CE") {
      setQuery(query.slice(0, query.lastIndexOf("+") + 1));
      setResult(intermediate_result);
      return;
    }

    if (query == 0) {
      setQuery(ev.target.value);
    } else {
      setQuery((prev_value) => String(prev_value) + ev.target.value);
      if (["/", "X", "-", "+"].includes(ev.target.value)) {
        result ? setIntermediateResult(result) : setIntermediateResult(query);
        setOperator(ev.target.value);
      }
    }
  };

  return (
    <>
      <input
        type="button"
        value={number}
        onClick={(ev) => updateText(ev)}
      ></input>
    </>
  );
}
