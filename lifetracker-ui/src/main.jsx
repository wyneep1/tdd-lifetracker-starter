import React from "react"
import ReactDOM from "react-dom"
import { App } from "components"
import "./globals.css"
import {AuthContextProvider} from "../contexts/auth"
import { NutritionContextProvider } from "../contexts/nutrition"
import {ActivityContextProvider} from "../contexts/activity"

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <NutritionContextProvider>
        <ActivityContextProvider>
          <App/>
    </ActivityContextProvider>
    </NutritionContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
