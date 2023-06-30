import React, { useState } from 'react';
import Estimation from '../03.Components/Estimation';
import calculCategorie from '../../04.algo/calculteurCategories'

const Simulator = () => {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [system, setSystem] = useState("");
    const [bloc, setBloc] = useState("");
    const [storage, setStorage] = useState("");
    const [memory, setMemory] = useState("");
    const [screen, setScreen] = useState("");
    const [network, setNetwork] = useState("");
    const [seniority, setSeniority] = useState("");
    const [state, setState] = useState("");

    const [resultAlgo, setResultAlgo] = useState("")

    const [estimateOpen, setEstimateOpen] = useState(false)

    const brandHandler= (e) => { setBrand(e.target.value) };
    const modelHandler= (e) => { setModel(e.target.value) };
    const systemHandler= (e) => { setSystem(e.target.value) };
    const blocHandler= (e) => { setBloc(e.target.value) };
    const storageHandler= (e) => { setStorage(e.target.value) };
    const memoryHandler= (e) => { setMemory(e.target.value) };
    const screenHandler= (e) => { setScreen(e.target.value) };
    const networkHandler= (e) => { setNetwork(e.target.value) };
    const seniorityHandler= (e) => { setSeniority(e.target.value) };
    const stateHandler= (e) => { setState(e.target.value) };
    
    



    const estimateOpenHandler= (e) => {
        e.preventDefault()
        setResultAlgo(calculCategorie(system, bloc, storage, memory, screen, network, seniority, state))

        setEstimateOpen(!estimateOpen)
    }


    

    console.log(brand)

    return (
      <div>
        <div className='py-10 flex flex-col gap-10 ml-[200px] w-calc relative '>
            {estimateOpen && <Estimation estimateOpen={estimateOpen} setEstimateOpen={setEstimateOpen} brand={brand} model={model} resultAlgo={resultAlgo} system={system} bloc={bloc} storage={storage} memory={memory} screen={screen} network={network} seniority={seniority} state={state} />}
            <h2 className='sukui-h2 text-center'>Simulateur</h2>
            <form action="" method="get" className='flex flex-col items-center gap-10' onSubmit={estimateOpenHandler}>
              <div className="reference-container flex gap-5 items-center">
                <label htmlFor="marque" className='sukui-label min-w-fit'><span className='text-red-600'>*</span> Marque :</label>
                <input type="text" className='sukui-input' placeholder='ex: Samsung' onChange={brandHandler}/>
                <label htmlFor="model" className='sukui-label min-w-fit'>Modèle :</label>
                <input type="text" className='sukui-input' placeholder='ex: Galaxy Note 20' onChange={modelHandler}/>
              </div>
              <div className="flex w-full flex-wrap gap-10 justify-center">
                {/* Système*/}
                <div className="flex flex-col gap-3 p-2 w-1/4">
                  <label className='sukui-h3'> <span className='text-red-600'>*</span> Système :</label>
                  <select name="system" id="system" className='sukui-select' required defaultValue="" onChange={systemHandler}>
                    <option value="" disabled >Quel est le système d'exploitation ?</option>
                    <option value="Android">Android</option>
                    <option value="iOS">iOS</option>
                  </select>
                  <h6 className='sukui-h6 text-neutral-500'>Minimum Android 8</h6>
                </div>
                {/* Bloquage*/}
                <div className="flex flex-col gap-3 p-2 w-1/4">
                  <label className='sukui-h3'><span className='text-red-600'>*</span> Bloquage :</label>
                  <select name="bloquage" id="bloquage" className='sukui-select' required defaultValue="" onChange={blocHandler}>
                    <option value="" disabled >Est-ce compatible avec tous les opérateurs?</option>
                    <option value="non">Non</option>
                    <option value="oui">Oui</option>
                  </select>
                </div>
                {/* Stockage*/}
                <div className="flex flex-col gap-3 p-2 w-1/4">
                  <label className='sukui-h3'><span className='text-red-600'>*</span> Stockage :</label>
                  <select name="stockage" id="stockage" className='sukui-select' required defaultValue="" onChange={storageHandler}>
                    <option value="" disabled >Quelle est la capacité de stockage ?</option>
                    <option value="16">16 Go</option>
                    <option value="32">32 Go</option>
                    <option value="64">64 Go</option>
                    <option value="128">128 Go</option>
                    <option value="256">256 Go</option>
                    <option value="512">512 Go</option>
                    <option value="1000">1 To</option>
                  </select>
                  <h6 className='sukui-h6 text-neutral-500'>Minimum 16 Go</h6>
                </div>
                        {/* Mémoire*/}
                <div className="flex flex-col gap-3 p-2 w-1/4">
                  <label className='sukui-h3'><span className='text-red-600'>*</span> Mémoire (RAM) :</label>
                  <select name="memoire" id="memoire" className='sukui-select' required defaultValue="" onChange={memoryHandler}>
                    <option value="" disabled >Quelle est la capacité de mémoire vive ?</option>
                    <option value="2">2 Go</option>
                    <option value="3">3 Go</option>
                    <option value="4">4 Go</option>
                    <option value="6">6 Go</option>
                    <option value="8">8 Go</option>
                    <option value="12">12 Go</option>
                    <option value="16">16 Go</option>
                  </select>
                  <h6 className='sukui-h6 text-neutral-500'>Minimum 2 Go</h6>
                </div>
                {/* Ecran */}
                <div className="flex flex-col gap-3 p-2 w-1/4">
                  <label className='sukui-h3'><span className='text-red-600'>*</span> Taille de l'écran :</label>
                  <select name="ecran" id="ecran" className='sukui-select' required defaultValue="" onChange={screenHandler}>
                    <option value="" disabled >Quelle est la taille de l'écran (en pouces) ?</option>
                    <option value="4-5">De 4 à 4,9"</option>
                    <option value="5-6">De 5 à 5,9"</option>
                    <option value="6-7">De 6 à 6,6"</option>
                    <option value="7-8">De 7 à 8"</option>
                    <option value="8+">Plus de 8"</option>
                  </select>
                </div>
                {/* Réseau */}
                <div className="flex flex-col gap-3 p-2 w-1/4">
                  <label className='sukui-h3'><span className='text-red-600'>*</span> Réseau :</label>
                  <select name="reseau" id="reseau" className='sukui-select' required defaultValue="" onChange={networkHandler}>
                    <option value="" disabled >Quel est le type de réseau utilisé ?</option>
                    <option value="4G">4G</option>
                    <option value="5G">5G</option>
                  </select>
                </div>
                {/* Ancienneté */}
                <div className="flex flex-col gap-3 p-2 w-1/4">
                  <label className='sukui-h3'><span className='text-red-600'>*</span> Ancienneté :</label>
                  <select name="anciennete" id="anciennete" className='sukui-select' required defaultValue="" onChange={seniorityHandler}> 
                    <option value="" disabled >Date de sortie du modèle</option>
                    <option value="3-5">De 3 à 5 ans</option>
                    <option value="1-3">De 1 à 3 ans</option>
                    <option value="6m-1">De 6 Mois à 1 an</option>
                    <option value="3-6m">De 3 à 6 Mois</option>
                    <option value="-3m">Moins de 3 mois</option>
                    <option value="neuf">Récent</option>
                  </select>
                </div>
        {/* État */}
        <div className="flex flex-col gap-3 p-2 w-1/4">
          <label className='sukui-h3'><span className='text-red-600'>*</span> État :</label>
          <select name="etat" id="etat" className='sukui-select' required defaultValue="" onChange={stateHandler}>
            <option value="" disabled>État général de l'appareil (rayures, etc...)</option>
            <option value="correct">Correct</option>
            <option value="excellent">Excellent</option>
            <option value="parfait">Parfait</option>
        </select>
        </div>
              </div>
              <h6 className='flex justify-center align-middle text-red-600'>* Champs obligatoires</h6>
              <h6 className='flex justify-center align-middle text-neutral-600'>Chargeur indispensable !</h6>
              <div className="submit-container flex justify-center align-middle">
              <input type="submit" value="Estimer" className='sukui-button cursor-pointer' />



              </div>
            </form>
          </div>
      </div>
              
);

};

export default Simulator;