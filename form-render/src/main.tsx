import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import './index.css'
import Render from "./demos/render.tsx";
import Form from "./demos/form.jsx";
import Create from "./demos/create.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <>
      <Render />
      <hr />
      {/* <Form /> */}
      {/* <Create /> */}
    </>
  </React.StrictMode>
);
