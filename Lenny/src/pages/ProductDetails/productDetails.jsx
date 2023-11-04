import MainContent from "./MainContentPage/contentPage";
import LargeContent from "./LargeAboutPage/contentPage";
import CompanyContent from "./CompanyPage/contentPage";
import RatingContent from "./RatingPage/contentPage";
import CommentContent from "./CommentPage/contentPage"
import RelatedContent from "./RelatedPage/contentPage";

import { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { instance } from '../../api';
import { ReactComponent as ArrowIcon } from "../../assets/image/icon/arrow-down-icon.svg";
import "./productDetail.scss";


// import FilterPart from "./FilterPart/index"

const ProductDetail = () => {
    const { id } = useParams();

    const [detailProduct, setDetailProduct] = useState([]);
  
    useEffect(() => {
        // !!! active olunacaq
        window.scrollTo(0, 0);
        const getData = async () => {
            const response = await instance.get(`/products/${id}?populate=*`);
            setDetailProduct(response?.data?.data);
        }
        getData();
        // console.log(detailProduct?.attributes?.images)
        // console.log(dataImages)
        // console.log(dataImages)
    }, [id])

    setTimeout(() => {
        document.title = `${detailProduct?.attributes?.title}`;
    }, 500);

    return (
        <section className='product-detail-section'>
            <div className="section-cord">
                <span className="cord-text active">
                    <Link to={"/"} className='active'>Home</Link>
                    <ArrowIcon />
                </span>
                <span className="cord-text active">
                    <Link to={"/products"} className='active'>{detailProduct?.attributes?.categories?.data[0]?.attributes?.name}</Link>
                    <ArrowIcon />
                </span>
                <span className="cord-text active">
                    <Link to={"/products"} className='active'>{detailProduct?.attributes?.sub_categories.data[0].attributes.name}</Link>
                    <ArrowIcon />
                </span>
                <span className="cord-text">
                    <Link to={`/products/${detailProduct?.id}`}>
                        {detailProduct?.attributes?.title}
                    </Link>
                </span>
            </div>
            <MainContent detailProduct={detailProduct}/>
            <LargeContent detailProduct={detailProduct}/>
            <CompanyContent />
            <RatingContent />
            <CommentContent />
            <RelatedContent />
        </section>
    )

}

export default ProductDetail