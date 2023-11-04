import { Link } from "react-router-dom";
import { ReactComponent as LineIcon } from "../../../assets/image/icon/line-icon.svg";
import { ReactComponent as StarIcon } from "../../../assets/image/icon/star-solid-icon.svg";
import { ReactComponent as FavIcon } from "../../../assets/image/icon/heart-icon.svg";
import DemoJacket from "../../../assets/image/picture/demo-jacket.png";
import OverlayImage from "../../../assets/image/picture/overlay-bg.png";
import "./start.scss"

const StartPage = () => {
    return (
        <section className='startPage'>
            <div className="wrapper">
                <div className="text-part">
                    <div className="heading-text">
                        Upgrade Your Wardrobe
                        With Our Collection
                    </div>
                    <div className="text-secondary">
                        Eget neque aenean viverra aliquam tortor diam nunc.
                        Dis pellentesque lectus quis velit fusce aenean nunc dui
                        consectetur. Eu lorem est ullamcorper nisl amet non mollis.
                    </div>
                    <div className="buttons-group">
                        <Link className={"nav-link"}>
                            <span className="btn btn-buyNow">
                                Buy Now
                            </span>

                        </Link>

                        <Link className={"nav-link nav-link-2"} to={`/products/2`}>
                            <span className="btn view-detail">
                                View Detail
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="popular-product-content">
                    <div className="dot-animation">
                        <span className="dot">

                        </span>
                    </div>
                    <div className="line-svg">
                        <LineIcon />
                    </div>
                    <div className="product-cart">
                        <div className="heading-part">
                            <div className="favorite-content">
                                <Link to={""}>
                                    <FavIcon />
                                </Link>
                            </div>
                            <Link to={`/products/2`}>
                                <img src={DemoJacket} alt="" className="product-image" />

                            </Link>
                        </div>
                        <div className="main-part">
                            <div className="product-name">
                                <Link style={{
                                    textDecoration: "none",
                                    color: "#0B0F0E"
                                }} to={`/products/2`}>
                                   Green Jacket V2
                                </Link>
                            </div>
                            <div className="product-desc">
                                Cimahi, Bandung
                            </div>
                            <div className="adds-part">
                                <span className="rating-content">
                                    <div className="rating-icon">
                                        < StarIcon />
                                    </div>
                                    <div className="rating-data">
                                        4,3
                                    </div>
                                </span>
                                <div className="sold">
                                    723 Sold
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartPage