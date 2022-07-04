import React from "react";
import { ToastContainer } from "react-toastify";
import UseForm from "./components/UseForm";

function App() {
  return (
    <React.Fragment>
      <div
        className="container"
        style={{ width: "1200px", margin: "0 auto", padding: "0 12px" }}
      >
        <UseForm />
        <ToastContainer />
      </div>
    </React.Fragment>
  );
}

export default App;
