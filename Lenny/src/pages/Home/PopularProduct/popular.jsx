// ! Popular Products Component
import "./popular.scss";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import { ReactComponent as FavoriteIcon } from "../../../assets/image/icon/heart-icon.svg";
import { ReactComponent as RatingIcon } from "../../../assets/image/icon/star-solid-icon.svg";
import { ReactComponent as DotIcon } from "../../../assets/image/icon/dot-icon.svg";
import ExampleImg from "../../../assets/image/picture/demo-jacket.png";

import { instance } from "../../../api";
import Cart from "./ProductCart/cart";

const PoularProduct = () => {

    const [popularProdcuts, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {

            try {
                const response = await instance.get("/products?populate=*");
                if (response.data) {
                    setProducts(response.data.data);
                    console.log(popularProdcuts)
                }
            } catch (error) {
                console.log("API is now Problem", error)
            }
        }
        getData();

    }, [])

    return (
        <section className="popular-productPage">
            <div className="heading-text-part">
                <div className="section-title">
                    Popular Product on Lenny
                </div>
                <div className="secondary-title">
                    Lorem ipsum dolor sit amet consectetur.
                    Integer cursus cursus in
                </div>
            </div>
            <div className="box-group">
                <div className="wrapper">
                    {/* product cart */}
                    {
                        popularProdcuts?.slice(0, 8).map((element) => {
                            return <>
                                <Cart key={uuidv4} data={element?.attributes} id={element?.id} image={element?.attributes?.images?.data[0]?.attributes?.url} />
                            </>
                        })
                    }


                </div>
            </div>
            <div className="load-more-btn">
                <Link to={`/products`}>
                 Load More
                </Link>
            </div>
        </section>
    )
}

export default PoularProduct