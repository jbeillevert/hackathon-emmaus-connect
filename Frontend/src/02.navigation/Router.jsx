import { Routes, Route } from "react-router-dom";
import Simulator from "../03.globals/01.Pages/Simulator";
import Faq from "../03.globals/01.Pages/Faq";
import Admin from "../03.globals/01.Pages/Admin";
import Login from "../03.globals/01.Pages//Login";


function Router() {
    return (
        <Routes>
            <Route path="dashboard/" element={<Simulator />} />
            <Route path="dashboard/faq" element={<Faq />} />
            <Route path="dashboard/admin" element={<Admin />} />
            <Route path="dashboard/login" element={<Login />} />
        </Routes>
    )
}

export default Router;