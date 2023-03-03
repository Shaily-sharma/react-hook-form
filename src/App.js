import React from "react";
//import "./App.css";
// import Parent from "./Parent";
// import User from "./User";
import Form  from "./Form";

function App() {
  // let inputRef = useRef(null);
  // function updateInput() {
  //   inputRef.current.value = "1";
  //   inputRef.current.style.color = "red";
  // }
  return (
    <>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        {/* <h1>forward ref</h1>
        <User ref={inputRef} />
        <button onClick={updateInput}>update</button>
        <div>
       
          <Parent />
        </div> */}
        <Form/>
      </div>
    </>
  );
}

export default App;
