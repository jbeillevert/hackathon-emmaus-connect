import React from "react"

import Router from "./02.navigation/Router"
import LoginForm from "./03.globals/01.Pages/LoginForm"

import Simulator from "./03.globals/01.Pages/Simulator"


function App() {


  return (

    <div className="max-w-screen-xl m-auto min-h-screen flex">
      <Router />
      <LoginForm />

    <div className="bg-stone-200 h-full">
    <Simulator />


    </div>
  )
};

export default App
