// ! Product Cart Component
import "./style.scss"

import { NavLink } from 'react-router-dom';
import React from 'react'
import { ReactComponent as FavoriteIcon } from "../../assets/image/icon/heart-icon.svg";
import { ReactComponent as RatingIcon } from "../../assets/image/icon/star-solid-icon.svg";
import { ReactComponent as DotIcon } from "../../assets/image/icon/dot-icon.svg";



const ProductCart = () => {
    return (
        <div className="product-cart">
            <div className="heading-part">
                <div className="favorite-content">
                    <FavoriteIcon />
                </div>
                <NavLink to={"/productid"}>
                    <img src={"example"} alt="" className="product-image" width={160} height={160} />
                </NavLink>
            </div>
            <div className="main-part">
                <div className="product-title-price">
                    <span className="product-title">
                        <NavLink to={"/productid"}>
                          example
                        </NavLink>
                    </span>
                    <span className="product-price">
                        $XX
                    </span>
                </div>
                <div className="product-description">
                  example
                </div>
                <div className="product-rating-sold">
                    <span className="rating">
                        <span className="icon-rating">
                            <RatingIcon />
                        </span>
                        4.8
                        <DotIcon className="dotIcon" />
                    </span>
                    <span className="sold">
                        xxxx Sold
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductCart