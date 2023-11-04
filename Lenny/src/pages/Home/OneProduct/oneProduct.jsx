// ! one Product Component
import { NavLink } from "react-router-dom";
import OverlayImage from "../../../assets/image/picture/ipad-air-overlay.png";
import "./oneProduct.scss"

const OneProduct = () => {
    return (
        <section className="oneProductPage">
            <div className="content">
                <div className="img-box">
                    <img src={OverlayImage} alt="" />
                </div>
                <div className="text-box">
                    <div className="product-title">
                        Ipad Air Gen 5
                    </div>
                    <div className="product-desc">
                        Lorem ipsum dolor sit
                        amet consectetur. Integer cursus cursus in sapien quam risus sed diam.
                    </div>
                    <div className="button-group">
                        <span className="buy-btn">
                            <NavLink>
                                Buy $900
                            </NavLink>
                        </span>
                        <span className="view-detail">
                            <NavLink>
                                View Detail
                            </NavLink>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OneProduct