import "./success.scss";
import { ReactComponent as SuccessIcon } from "../../../assets/image/icon/success-icon.svg";

const Success = ({setCheckPage}) => {
    return (
        <div className="success-content">
            <div className="success-box">
                <SuccessIcon />
            </div>
            <div className="text-box">
                <div className="heading-txt">
                    Create Account Successfull!
                </div>
                <div className="secondary-txt">
                    Lorem ipsum dolor sit amet consectetur. Velit ut
                    ipsum tortor diam nec blandit ultrices et magna
                    nisl eu.
                </div>
                <button className="signIn" onClick={() => setCheckPage("login")}>
                   Sign In
                </button>
            </div>
        </div>
    )
}

export default Success