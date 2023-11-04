// ! Form => SignUp
import "./signup.scss";
import { instance } from "../../../api/index";
import { ReactComponent as FacebookIcon } from "../../../assets/image/icon/facebook-icon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const intialUser = { email: "", password: "", username: "" }

const Signup = ({ setCheckPage }) => {

    const [user, setUser] = useState(intialUser);

    const handleUserReg = ({ target }) => {
        const { name, value } = target;

        setUser((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    console.log(user)

    const getData = async () => {
        const url = `${import.meta.env.VITE_BASE_URL}/api/auth/local/register`;
        try {
            if (user.username && user.email && user.password) {
                const res = await axios.post(url, user);

                if (res) {
                    setUser(intialUser);
                    setCheckPage("success");
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="signUp-content">
            <h1 className="content-title">
                Sign Up
            </h1>
            <form className="form-part" onSubmit={(e) => {
                e.preventDefault();
                getData();
            }}>
                <div className="input-content name-input-content">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={handleUserReg}
                        value={user.username}
                        placeholder="Enter your name" />
                </div>
                <div className="input-content phone-input-content">
                    <label htmlFor="phone">Phone Number or Email</label>
                    <input
                        type="tel"
                        id="phone"
                        name="email"
                        onChange={handleUserReg}
                        value={user.email}
                        placeholder="Enter your phone number or email" />
                </div>
                <div className="input-content password-input-content">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleUserReg}
                        value={user.password}
                        placeholder="Enter your password" />
                </div>
                <div className="problem-text">
                    <span className="problem">
                        Getting Trouble?
                    </span>
                    <span className="signIn" onClick={() => setCheckPage("login")}>
                        Sign in
                    </span>
                </div>
                <button className="signUp-btn">
                    Sign Up
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

export default Signup