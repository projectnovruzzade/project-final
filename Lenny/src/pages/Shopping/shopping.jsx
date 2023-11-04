import { useContext, useState, useEffect } from "react"
import "./shopping.scss";
import { ShoppingContext } from "../../context/shoppingContext";
import { ReactComponent as DeleteIcon } from "../../assets/image/icon/delete-icon.svg";
import CompanyImage from "../../assets/image/picture/company-image.svg"
import CompanyImage2 from "../../assets/image/picture/company-2.png"

import ProductCard from "./Product/index";
import Amount from "./Amount/amount"

const Shopping = () => {



    const [logitechProduct, setLogitechProduct] = useState([]);
    const [uniqioProduct, setUniqioProduct] = useState([]);


    const { shoppingCart } = useContext(ShoppingContext);

    useEffect(() => {
        console.log(shoppingCart);

        shoppingCart?.logitech?.forEach(element => {
            if (!logitechProduct.includes(element)) {
                setLogitechProduct((prevS) => [...prevS, element])
            }
        });

        console.log(logitechProduct);

        shoppingCart?.uniqio?.forEach(element => {
            if (!uniqioProduct.includes(element)) {
                setUniqioProduct((prevU) => [...prevU, element]);
            }
        })


    }, [shoppingCart])




    return (
        <section className="shopping-section">
            <div className="heading-part">
                <div className="content-title">
                    <div className="content-text">
                        Shopping Chart
                    </div>
                    <div className="secondary-text">
                        Showing your choices product
                    </div>
                </div>
                <div className="sorted-content">
                    <span className="text">Sort By:</span>
                    <select name="" id="">
                        <option value="">Latest Added</option>
                    </select>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="shopping-content">


                    <div className={`content content-2 ${logitechProduct.length == 0 ? "dontshow" : "show"}`}>
                        <div className="company-part">
                            <div className="company-about">
                                <div className="company-profile-image">
                                    <img src={CompanyImage} alt="" />
                                </div>
                                <div className="company-text">
                                    <div className="company-title">
                                        Logitech Indonesia
                                    </div>
                                    <div className="secondary-text">
                                        Central Jakarta
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="products-groups">
                            {
                                logitechProduct?.map((element) => {
                                    return <>
                                        <ProductCard data={element} />
                                    </>
                                })
                            }

                        </div>
                    </div>

                    {/* content2 */}
                    <div className={`content content-2 ${uniqioProduct.length == 0 ? "dontshow" : "show"}`}>
                        <div className="company-part">
                            <div className="company-about">
                                <div className="company-profile-image">
                                    <img src={CompanyImage2} alt="" style={{borderRadius: "50%"}}/>
                                </div>
                                <div className="company-text">
                                    <div className="company-title">
                                        Uniqlo
                                    </div>
                                    <div className="secondary-text">
                                        Central Jakarta
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-groups">
                            {
                                uniqioProduct?.map((element) => {
                                    return <>
                                        <ProductCard data={element} />
                                    </>
                                })
                            }
                        </div>
                    </div>

                </div>

               <Amount />
            </div>
        </section>
    )
}

export default Shopping