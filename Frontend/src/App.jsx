import React from "react"
import Router from "./02.navigation/Router"
import LoginForm from "./03.globals/01.Pages/LoginForm"

function App() {


  return (
    <div className="max-w-screen-xl m-auto min-h-screen flex">
      <Router />
      <LoginForm />
    </div>
  )
};

export default App
