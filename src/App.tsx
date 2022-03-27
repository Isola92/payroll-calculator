import React from "react";
import { render } from "react-dom";
import { Form } from "./views/Form";
import "./styles.css";

const App = () => {
  return (
    <>
      <main>
        <h1>Löneberäknaren</h1>
        <Form />
      </main>
    </>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.querySelector("#root"));
});
