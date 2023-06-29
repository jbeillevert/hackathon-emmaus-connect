import React from 'react';

const Simulator = () => {
    return (
        <div className='flex flex-col items-center gap-10'>
            <h2 className='sukui-h2'>Simulateur</h2>
            <div className="reference-container flex gap-5 items-center">
            <label htmlFor="marque" className='sukui-label min-w-fit'>Marque :</label>
            <input type="text" className='sukui-input'placeholder='ex: Samsung'/>
            <label htmlFor="model" className='sukui-label min-w-fit'>Modèle :</label>
            <input type="text" className='sukui-input'placeholder='ex: Galaxy Note 20'/>
            </div>
            <div className="flex w-full flex-wrap gap-10 justify-center">
                {/* Système*/}
                <div className="flex flex-col gap-3 p-2 w-1/4">
                    <label className='sukui-h3'>Système :</label>
                    <select name="system" id="system" className='sukui-select'>
                        <option value="Android">Android</option>
                        <option value="iOS">iOS</option>
                    </select>
                    <h6 className='sukui-h6 text-neutral-500'>Minimum Android 8</h6>
                </div>
                {/* Bloquage*/}
                <div className="flex flex-col gap-3 p-2 w-1/4">
                    <label className='sukui-h3'>Bloquage :</label>
                    <select name="bloquage" id="bloquage" className='sukui-select'>
                        <option value="non">Non</option>
                        <option value="oui">Oui</option>
                    </select>
                </div>
                {/* Stockage*/}
                <div className="flex flex-col gap-3 p-2 w-1/4">
                    <label className='sukui-h3'>Stockage :</label>
                    <select name="stockage" id="stockage" className='sukui-select'>
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
                    <label className='sukui-h3'>Mémoire (RAM) :</label>
                    <select name="memoire" id="memoire" className='sukui-select'>
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
                {/* Ecran*/}
                <div className="flex flex-col gap-3 p-2 w-1/4">
                    <label className='sukui-h3'>Taille de l'écran :</label>
                    <select name="ecran" id="ecran" className='sukui-select'>
                        <option value="4-5">De 4 à 4,9"</option>
                        <option value="5-6">De 5 à 5,9"</option>
                        <option value="6-7">De 6 à 6,6"</option>
                        <option value="7-8">De 7 à 8"</option>
                        <option value="8+">Plus de 8"</option>
                    </select>
                </div>                
                {/* Réseau*/}
                <div className="flex flex-col gap-3 p-2 w-1/4">
                    <label className='sukui-h3'>Réseau :</label>
                    <select name="reseau" id="reseau" className='sukui-select'>
                        <option value="4G">4G</option>
                        <option value="5G">5G</option>
                    </select>
                </div>
                {/* Ancienneté*/}
                <div className="flex flex-col gap-3 p-2 w-1/4">
                    <label className='sukui-h3'>Ancienneté :</label>
                    <select name="anciennete" id="anciennete" className='sukui-select'>
                        <option value="3-5">De 3 à 5 ans</option>
                        <option value="1-3">De 1 à 3 ans</option>
                        <option value="6m-1">De 6 Mois à 1 an</option>
                        <option value="3-6m">De 3 à 6 Mois</option>
                        <option value="-3m">Moins de 3 mois</option>
                        <option value="neuf">Récent</option>
                    </select>
                </div>
                {/* Etat*/}
                <div className="flex flex-col gap-3 p-2 w-1/4">
                    <label className='sukui-h3'>État :</label>
                    <select name="etat" id="etat" className='sukui-select'>
                        <option value="correct">Correct</option>
                        <option value="excellent">Excellent</option>
                        <option value="parfait">Parfait</option>
                    </select>
                </div>
            </div>
            <h6 className='flex justify-center align-middle text-red-600'>Chargeur indispensable !</h6>

            <button className='sukui-button'>
                ESTIMER
            </button>
        </div>
    );
};

export default Simulator;