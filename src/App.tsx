import React from "react";
import { render } from "react-dom";
import { Form } from "./views/Form";

const App = () => {
  return (
    <>
      <main>
        <h1>Löneberäknaren</h1>
        <Form />
      </main>
      <footer>Olof Lindell</footer>
    </>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.querySelector("#root"));
});
