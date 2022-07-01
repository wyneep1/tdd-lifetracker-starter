import React from "react"
import ReactDOM from "react-dom"
import { App } from "components"
import "./globals.css"
import {AuthContextProvider}from "../contexts/auth"

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <App/>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
