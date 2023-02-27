import React from 'react'
import './App.scss'
import {BrowserRouter} from "react-router-dom";
import {GetRouters} from "./Router/Router";

function App() {

  return (
      <BrowserRouter>
          <GetRouters />
      </BrowserRouter>
  )
}

export default App
