import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

function LoginForm() {

    // const navigate = useNavigate();
    const [identifiant, setIdentifiant] = useState("");
    const [password, setPassword] = useState("");

    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible((prevVisible) => !prevVisible);
    };

    return (
        <>
            <div className="relative flex flex-col items-center h-auto px-10 py-16 mx-auto sm:max-w-md my-10 bg-gradient-to-br from-teal-900 to-teal-700 rounded-md">
                <div className="rounded-lg p-4 mt-16">
                    <p className="text-white text-2xl text-center mt-15 px-3 py-3 mb-4">
                        Je me connecte
                    </p>
                    < form onSubmit="" className="">
                        <input
                            type="text"
                            className="sukui-input px-3 py-3 mb-4"
                            placeholder="identifiant"
                            onChange={(e) => setIdentifiant(e.target.value)}
                            value={identifiant}
                        />
                        <div className="relative ">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                className="sukui-input px-3 py-3 mb-4"
                                placeholder="mot de passe"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            /> {passwordVisible ? (
                                <FaEye
                                    className="absolute top-6 right-3 transform -translate-y-1/2 sukui-h2 w-6 h-6 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                />
                            ) : (
                                <FaEyeSlash
                                    className="absolute top-6 right-3 transform -translate-y-1/2 sukui-h2 w-6 h-6 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                />
                            )}
                        </div>
                        <button
                            type="submit"
                            className="sukui-button w-full hover:bg-teal-400 "
                        >
                            S'identifier
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginForm