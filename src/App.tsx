import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {GetRouters} from "./Router/Router";
import "antd/dist/reset.css";

function App() {

  return (
      <BrowserRouter>
          <GetRouters />
      </BrowserRouter>
  )
}

export default App
