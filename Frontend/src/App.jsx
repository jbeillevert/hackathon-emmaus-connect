import React from "react"

import Router from "./02.navigation/Router"
import MenuDashboard from "./03.globals/03.Components/MenuDashboard"






function App() {
  return (

    <div className="bg-stone-200 min-h-screen flex">
      <MenuDashboard />
      <Router />
    </div>
  )
};

export default App
