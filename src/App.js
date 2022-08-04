import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import List from "./components/List";
import React, { useState, useEffect } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [task, setTask] = useState("");

  function displayInput() {
    setShow(!show);
  }

  const submit = (event) => {
    event.preventDefault();

    setData([...data, task]);
    setTask("");
    event.target.children[0].value = "";
  };

  const onChange = (val) => {
    setTask(val);
  };

  return (
    <div className="container">
      <h1>Daily Activity List</h1>
      {show && (
        <form onSubmit={submit}>
          <Input onChange={onChange}></Input>
        </form>
      )}
      <Button onClick={displayInput}>{!show ? "Tambah" : "Tutup"}</Button>
      <List data={data} />
    </div>
  );
}

export default App;
