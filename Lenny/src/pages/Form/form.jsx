// ! Login comp
import "./form.scss";
import SignUp from "./SignUp/signup";
import SignIn from "./SignIn/signin";
import Success from "./Success/success";
import { useEffect } from "react";
import Signup from "./SignUp/signup";

const Form = ({ checkPage, setCheckPage }) => {

  const hiddenForm = (el) => {
    let dataClass = el.classList[0];
    dataClass == "login-register-content" ? setCheckPage("closed") : "";
  }

  if (checkPage != "closed") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const checkClass = () => {
    if (checkPage == "closed") {
      return ""
    } else {
      return "active"
    }
  }

  const checkPages = () => {
    if (checkPage == "success") {
      return <Success setCheckPage={setCheckPage} />;
    }
    else if (checkPage == "login") {
      return <SignIn setCheckPage={setCheckPage} />;
    }

    else if (checkPage == "register") {
      return <Signup setCheckPage={setCheckPage} />
    }

  }

  useEffect(() => {
    console.log(checkPage);
  }, [checkPage])

  return (
    <section className={`login-register-content ${checkClass()}`} onClick={(e) => hiddenForm(e.target)}>
      {
        checkPages()
      }
    </section>
  )
}

export default Form