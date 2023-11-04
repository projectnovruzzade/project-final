// ! Related Page Component
import { useEffect, useState } from "react";
import "./style.scss"
import { v4 as uuidv4 } from 'uuid';
import { instance } from "../../../api";
import ProductCard from "./Product/productCard";

const ContentPage = () => {


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
        <div className="related-products">
            <div className="section-heading">
                <h1 className="content-title">
                    Related Product
                </h1>
                <div className="view-detail-btn">
                    View Detail
                </div>
            </div>

            <div className="products-wrapper">
                {
                    popularProdcuts?.slice(0, 4).map((element) => {
                        return <>
                           <ProductCard key={uuidv4} data={element?.attributes} id={element?.id} image={element?.attributes?.images?.data[0]?.attributes?.url} />
                        </>
                    })
                }

            </div>
        </div>
    )
}

export default ContentPage