import React, { useEffect, useState } from 'react';
import CategorieA from '../03.Components/CategorieA';
import CategorieB from '../03.Components/CategorieB';
import CategorieC from '../03.Components/CategorieC';
import CategorieD from '../03.Components/CategorieD';
import CategoriePremium from '../03.Components/CategoriePremium';
import { MdEuroSymbol } from "react-icons/md";
import axios from "axios";

function Admin() {

const [catAMin, setCatAMin] = useState(0);
const [catAMax, setCatAMax] = useState(0);
const [catBMin, setCatBMin] = useState(0);
const [catBMax, setCatBMax] = useState(0);
const [catCMin, setCatCMin] = useState(0);
const [catCMax, setCatCMax] = useState(0);
const [catDMin, setCatDMin] = useState(0);
const [catDMax, setCatDMax] = useState(0);
const [catPremiumMin, setCatPremiumMin] = useState(0);
const [catPremiumMax, setCatPremiumMax] = useState(0);

const handleCatDMin = (e) => {
    setCatDMin(e.target.value)
}
const handleCatDMax = (e) => {
    setCatDMax(e.target.value)
}
const handleCatCMin = (e) => {
    setCatCMin(e.target.value)
}
const handleCatCMax = (e) => {
    setCatCMax(e.target.value)
}
const handleCatBMin = (e) => {
    setCatBMin(e.target.value)
}
const handleCatBMax = (e) => {
    setCatBMax(e.target.value)
}
const handleCatAMin = (e) => {
    setCatAMin(e.target.value)
}
const handleCatAMax = (e) => {
    setCatAMax(e.target.value)
}
const handleCatPremiumMin = (e) => {
    setCatPremiumMin(e.target.value)
}
const handleCatPremiumMax = (e) => {
    setCatPremiumMax(e.target.value)
}

useEffect(() => {
    axios
        .get('http://localhost:5000/price')
        .then((res) => {
            const result = res.data[0];
            setCatPremiumMin(result.cat_premium_min);
            setCatPremiumMax(result.cat_premium_max);
            setCatAMin(result.cat_a_min);
            setCatAMax(result.cat_a_max);
            setCatBMin(result.cat_b_min);
            setCatBMax(result.cat_b_max);
            setCatCMin(result.cat_c_min);
            setCatCMax(result.cat_c_max);
            setCatDMin(result.cat_d_min);
            setCatDMax(result.cat_d_max);
          })
        .catch((err) => console.error(err))
}, [])

// const handleClick = () => {
    // const data = {
    //     cat_premium_min: catPremiumMin,
    //     cat_premium_max: catPremiumMax,
    //     cat_a_min: catAMin,
    //     cat_a_max: catAMax,
    //     cat_b_min: catBMin,
    //     cat_b_max: catBMax,
    //     cat_c_min: catCMin,
    //     cat_c_max: catCMax,
    //     cat_d_min: catDMin,
    //     cat_d_max: catDMax
    //   };
      

      const handleClick = () => {
        const data = {
            cat_premium_min: parseInt(catPremiumMin),
            cat_premium_max: parseInt(catPremiumMax),
            cat_a_min: parseInt(catAMin),
            cat_a_max: parseInt(catAMax),
            cat_b_min: parseInt(catBMin),
            cat_b_max: parseInt(catBMax),
            cat_c_min: parseInt(catCMin),
            cat_c_max: parseInt(catCMax),
            cat_d_min: parseInt(catDMin),
            cat_d_max: parseInt(catDMax)
          };
          console.log(data)
      
      axios
        .put(`http://localhost:5000/price/1`, data)
            .then((res) =>{
            console.warn(res.data);
            })
            .catch((err) =>console.warn(err));
    };

    console.log(catBMax)
    return (
        <div className="ml-[200px]">
            <div className="h-full flex-col">
                <h2 className="sukui-h2 text-center w-full">Gestion du prix des catégories</h2>
                <div className="flex justify-center items-center h-screen px-10">
                    <ul className="grid grid-rows-3 grid-flow-col gap-x-32 gap-y-12">
                        <li className="flex gap-6">
                            <CategorieD /> <div className="flex gap-3 items-center"><p>de</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" type="text" placeholder='30,00' onChange={handleCatDMin}></input> <p>à</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='60,00' onChange={handleCatDMax}></input> <MdEuroSymbol className="text-7xl h-4" /></div>
                        </li>
                        <li className="flex gap-6">
                            <CategorieC /> <div className="flex gap-3 items-center"><p>de</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='61,00'onChange={handleCatCMin}></input> <p>à</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='90,00'onChange={handleCatCMax}></input> <MdEuroSymbol className="text-7xl h-4" /></div>
                        </li>
                        <li className="flex gap-6">
                            <CategorieB /> <div className="flex gap-3 items-center"><p>de</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='91,00'onChange={handleCatBMin}></input> <p>à</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='120,00' onChange={handleCatBMax}></input> <MdEuroSymbol className="text-7xl h-4" /></div>
                        </li>
                        <li className="flex gap-6">
                            <CategorieA /> <div className="flex gap-3 items-center"><p>de</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='121,00'onChange={handleCatAMin}></input> <p>à</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='150,00'onChange={handleCatAMax}></input> <MdEuroSymbol className="text-7xl h-4" /></div>
                        </li>
                        <li className="flex gap-6">
                            <CategoriePremium /> <div className="flex gap-3 items-center"><p>de</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='151,00'onChange={handleCatPremiumMin}></input> <p>à</p> <input className="text-slate-500 py-3 px-5 rounded-lg bg-slate-100 w-full duration-200 border-solid border border-black h-12" placeholder='180,00'onChange={handleCatPremiumMax}></input> <MdEuroSymbol className="text-7xl h-4" /></div>
                        </li>
                        <div className="flex justify-end" >
                            <button className="sukui-button w-[170px] h-12 text-xl" onClick={handleClick}>Valider</button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Admin;