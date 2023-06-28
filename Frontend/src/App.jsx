import React from "react"

function App() {


  return (
    <div className="bg-stone-200 h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="sukui-h1">Rapidly build modern websites <br /> without ever leaving your HTML.</h1>
      <h2 className="sukui-h2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta amet,</h2>
      <h3 className="sukui-h3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, quidem!</h3>
      <p className="sukui-p text-center">A utility-first CSS framework packed with classes like flex, pt-4, text-center
        <br />and rotate-90 that can be composed to build any design, directly in your markup.</p>

      <div className="max-w-2xl flex flex-col gap-4 w-full">
        <div>
          <label htmlFor="" className="sukui-label"> Ecrire un nom</label>
          <input type="text" className="sukui-input" placeholder="Quick search" />
        </div>
        <div>
          <label htmlFor="" className="sukui-label"> Ecrire un nom</label>
          <select name="" className="sukui-select" placeholder="choisir une option" id="">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="Human">Human</option>
          </select>

        </div>
      </div>

      <div className="flex gap-2">
        <button className="sukui-button">Commencer</button>
        <button className="sukui-button2">Plus tard</button>
      </div>


    </div>
  )
}

export default App
