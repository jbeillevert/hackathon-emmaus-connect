import React from 'react';
import CategorieA from '../03.Components/CategorieA';
import CategorieB from '../03.Components/CategorieB';
import CategorieC from '../03.Components/CategorieC';
import CategorieD from '../03.Components/CategorieD';
import CategoriePremium from '../03.Components/CategoriePremium';
import Valider from '../03.Components/Valider';
import { MdEuroSymbol } from "react-icons/md"

function Admin() {
    return (
        <div classname="w-calc h-full left-[300px]">
            <div className="h-full flex-col">
                <h2 className="sukui-h2 text-center w-full">Gestion du prix des catégories</h2>
                <div className="flex justify-center items-center h-screen px-10">
                    <ul className="grid grid-rows-3 grid-flow-col gap-x-32 gap-y-12">
                        <li className="flex gap-6">
                            <CategorieD /> <div className="flex gap-3 items-center"><p>de</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='30,00'></input> <p>à</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='60,00'></input> <MdEuroSymbol className="text-7xl h-4" /></div>
                        </li>
                        <li className="flex gap-6">
                            <CategorieC /> <div className="flex gap-3 items-center"><p>de</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='30,00'></input> <p>à</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='60,00'></input> <MdEuroSymbol className="text-7xl h-4" /></div>
                        </li>
                        <li className="flex gap-6">
                            <CategorieB /> <div className="flex gap-3 items-center"><p>de</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='30,00'></input> <p>à</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='60,00'></input> <MdEuroSymbol className="text-7xl h-4" /></div>
                        </li>
                        <li className="flex gap-6">
                            <CategorieA /> <div className="flex gap-3 items-center"><p>de</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='30,00'></input> <p>à</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='60,00'></input> <MdEuroSymbol className="text-7xl h-4" /></div>
                        </li>
                        <li className="flex gap-6">
                            <CategoriePremium /> <div className="flex gap-3 items-center"><p>de</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='30,00'></input> <p>à</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='60,00'></input> <MdEuroSymbol className="text-7xl h-4" /></div>
                        </li>
                        <li><Valider /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Admin;