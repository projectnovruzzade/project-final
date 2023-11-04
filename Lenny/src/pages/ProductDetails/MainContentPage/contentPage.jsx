// ! Content Page Component
import { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ShoppingContext } from "../../../context/shoppingContext";
import { ReactComponent as ArrowIcon } from "../../../assets/image/icon/arrow-down-icon.svg";
import { ReactComponent as RatingIcon } from "../../../assets/image/icon/star-solid-icon.svg";
import { ReactComponent as ShoppingIcon } from "../../../assets/image/icon/shopping-icon.svg";
import { ReactComponent as CartIcon } from "../../../assets/image/icon/cart-icon-green.svg";
import { ReactComponent as ChatIcon } from "../../../assets/image/icon/chat-icon.svg";
import { ReactComponent as DotIcon } from "../../../assets/image/icon/dot-icon.svg";
import React from 'react'
import "./style.scss"

import MainImage from "../MainImage/mainImage";

const ContentPage = ({ detailProduct }) => {

    const { shoppingCart } = useContext(ShoppingContext);

    const [counterImage, setCounterImage] = useState(0);

    const url = `${import.meta.env.VITE_BASE_URL}${detailProduct?.attributes?.images?.data[counterImage]?.attributes?.url}`;
    // console.log(url)

    const previosElement = () => {
        if (counterImage > 0) {
            setCounterImage(counterImage - 1);
        }
    }

    const nextElement = () => {
        if (counterImage < 3) {
            setCounterImage(counterImage + 1);
        }
    }

    const handlerChangeImg = (idx) => {
        setCounterImage(idx);
    }


    const handlerShopping = () => {
        if (detailProduct.attributes.categories.data[0].attributes.name == "Electronics") {
            if (shoppingCart.logitech) {
                shoppingCart.logitech.push(detailProduct?.attributes);
            } else {
                shoppingCart["logitech"] = [detailProduct?.attributes]
            }
        } else {

            if (shoppingCart.uniqio) {
                shoppingCart.uniqio.push(detailProduct?.attributes);
            } else {
                shoppingCart["uniqio"] = [detailProduct?.attributes]
            }

        }
        console.log(shoppingCart);
    }

    return (

        <main className="main-content">
            <div className="image-part">
                {/* ! MAIN IMAGE */}
                <MainImage image={url} previosElement={previosElement} nextElement={nextElement} />

                <div className="all-images-content">
                    {
                        detailProduct?.attributes?.images?.data?.map((element, index) => {
                            return <>
                                <div key={uuidv4()} className={`image-box img${index}`} >
                                    <img src={`${import.meta.env.VITE_BASE_URL}${element?.attributes?.url}`} alt="" width={50} height={50} onClick={(e) => handlerChangeImg(index)} />
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
            <div className="product-about-part">
                <div className="wrapper">
                    <div className="product-title">
                        {detailProduct?.attributes?.title}
                    </div>
                    <div className="product-rating-sold">
                        <span className="rating">
                            <RatingIcon /> {detailProduct?.attributes?.rating}
                        </span>
                        <DotIcon />
                        <span className="solid">{detailProduct?.attributes?.sold} Sold</span>
                    </div>
                    <div className="product-price">
                        ${detailProduct?.attributes?.price}
                    </div>
                    <div className="product-description">
                        {detailProduct?.attributes?.description}
                    </div>
                    <div className="product-variant">
                        <h1 className="heading-text">
                            Product Variant:
                        </h1>
                        <div className="box-group">
                            <div className="box">
                                <span className="text">
                                    Type
                                </span>
                                <select name="" id="">
                                    <option value="">Wireless</option>
                                </select>
                            </div>
                            <div className="box">
                                <span className="text">
                                    Color
                                </span>
                                <select name="" id="">
                                    <option value="">{detailProduct?.attributes?.color}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="btn-group">
                        <div className="btn buynow">
                            <Link>
                                Buy Now
                            </Link>
                        </div>
                        <div className="btn add" onClick={handlerShopping}>
                            <Link>
                                <CartIcon />
                                Add to Chart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ContentPage