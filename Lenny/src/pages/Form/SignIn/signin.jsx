// ! Form => SignIn
import "./signin.scss";
import { instance } from "../../../api/index";
import { ReactComponent as FacebookIcon } from "../../../assets/image/icon/facebook-icon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeUser } from "../../../api/helper"
import axios from "axios";

const initialUser = {identifier: "",password: ""};


const Signin = ({ setCheckPage }) => {

    const [user, setUser] = useState(initialUser);

    const handleUserReg = ({ target }) => {
        const { name, value } = target;

        setUser((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    console.log(user)

    const getData = async () => {
        
        const url = `${import.meta.env.VITE_BASE_URL}/api/auth/local`;
        try {
            if (user.identifier && user.password) {

                const { data } = await axios.post(url, user);
                if (data.jwt) {
                    storeUser(data);
                    setUser(initialUser);
                    console.log("Success login");
                    setCheckPage("closed")
                }
            }

        } catch (error) {
            console.log("ERORRR",error)
        }
    }

    return (
        <div className="signIn-content">
            <h1 className="content-title">
                Sign In
            </h1>
            <form className="form-part" onSubmit={(e) => {
                e.preventDefault();
                getData();
            }}>

                <div className="input-content phone-input-content">
                    <label htmlFor="phone">Phone Number or Email</label>
                    <input
                        type="email"
                        id="email"
                        name="identifier"
                        onChange={handleUserReg}
                        value={user.identifier}
                        placeholder="Enter your phone number or email" />
                </div>
                
                <div className="input-content phone-input-content">
                    <label htmlFor="phone">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleUserReg}
                        value={user.password}
                        placeholder="Enter your password" />
                </div>
                <div className="problem-text">
                    Getting Trouble?
                </div>
                <button className="signUp-btn">
                    Sign In
                </button>
            </form>
            <div className="method-content">
                <div className="top-part">
                    <span className="line"></span>
                    <span className="text">
                        Or using other method
                    </span>
                    <div className="line"></div>
                </div>
                <div className="facebook-option-btn">
                    <FacebookIcon />
                    Sign In with Facebook
                </div>
            </div>
        </div>
    )
}

export default Signin