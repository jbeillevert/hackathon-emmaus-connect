import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { LoginContext } from "../../02.navigation/LoginContext";

function LoginForm() {

    // const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { loggedIn } = useContext(LoginContext);

    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible((prevVisible) => !prevVisible);
    };
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            if (response.ok) {
                const data = await response.json();
                console.warn(data);
                localStorage.setItem('token', JSON.stringify(data));
                navigate('/');
            } else {
                throw new Error('Error during login attempt tralalala');
            }
        } catch (error) {
            console.error('Error during login attempt', error);
            console.log('Response status:', response.status);
            const errorMessage = await response.text();
            console.log('Response body:', errorMessage);
        }
    };

    return (
        <>
            <div className="relative flex flex-col items-center h-auto px-10 py-16 mx-auto sm:max-w-md my-10 bg-gradient-to-br from-teal-900 to-teal-700 rounded-md">
                <div className="rounded-lg p-4 mt-16">
                    <p className="text-white text-2xl text-center mt-15 px-3 py-3 mb-4">
                        Je me connecte
                    </p>
                    < form onSubmit={handleLogin} className="">
                        <input
                            type="text"
                            className="sukui-input px-3 py-3 mb-4"
                            placeholder="identifiant"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
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
                            type="submit" onClick={handleLogin}
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