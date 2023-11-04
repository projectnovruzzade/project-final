// ! Footer Component
import "./footer.scss";
import Logo from "../../assets/image/picture/logo.png"

const Footer = () => {
    return (
        <footer className="footer-content">
            <div className="wrapper">
                {/* top main part */}
                <div className="top-part">

                    <div className="logo-content">
                        <div className="img-content">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="text-content">
                            The biggest marketplace managed by
                            Ideologist corp, which provides various kinds
                            of daily needs and hobbies.
                        </div>
                    </div>
                    <nav className="menu-part">
                        <div className="text-box text-box-1">

                            <div className="common_text text__1">
                                <span className="heading-txt">
                                    About Lenny
                                </span>
                                <ul>
                                    <li>Information</li>
                                    <li>Store Lactor</li>
                                    <li>Bulk Purchase</li>
                                    <li>Alteration Services</li>
                                    <li>Gift Delivery Service</li>
                                    <li>Live Station</li>
                                </ul>
                            </div>

                            <div className="common_text text__2">
                                <span className="heading-txt">
                                    About Lenny
                                </span>
                                <ul>
                                    <li>FAQ</li>
                                    <li>Return Policy</li>
                                    <li>Privacy Policy</li>
                                    <li>Accessibillity</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>

                            <div className="common_text text__3">
                                <span className="heading-txt">
                                    Account
                                </span>
                                <ul>
                                    <li>Membership</li>
                                    <li>Address</li>
                                    <li>Cupons</li>
                                </ul>
                            </div>

                            <div className="common_text text__4">
                                <span className="heading-txt">
                                    Contact Us
                                </span>
                                <ul>
                                    <li>For  Lenny Consumer <br />
                                        Complaint Services</li>
                                    <li>(684) 555-0102 and <br />
                                        curtis.weaver@example.com</li>
                                    <li className="edited-item">Customers Complaint Service</li>
                                    <li>Directorate Generate of the<br />
                                        Republic of Indonesia</li>
                                    <li>(480) 555-0103</li>
                                </ul>
                            </div>

                        </div>
                    </nav>
                </div>

                {/* bottom main part */}
                <div className="bottom-part">
                    <div className="wrapper">
                        <span className="text-copyright">
                            COPYRIGHT © LENNY CO., LTD. ALL RIGHTS RESERVED.
                        </span>
                        <div className="text_part">
                            <span className="text">
                                Terms of use
                            </span>
                            <span className="text">
                                Privacy Policy
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer