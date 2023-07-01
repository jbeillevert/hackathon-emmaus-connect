import { Routes, Route } from "react-router-dom";
import Simulator from "../03.globals/01.Pages/Simulator";
import Faq from "../03.globals/01.Pages/Faq";
import Admin from "../03.globals/01.Pages/Admin";
import LoginForm from "../03.globals/01.Pages//LoginForm";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Simulator />} />
            <Route path="dashboard/faq" element={<Faq />} />
            <Route path="dashboard/admin" element={<Admin />} />
            <Route path="dashboard/login" element={<LoginForm />} />
        </Routes>
    )
}

export default Router;