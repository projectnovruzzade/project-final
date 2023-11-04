
import { Link } from "react-router-dom";
import { ReactComponent as FavoriteIcon } from "../../../../assets/image/icon/heart-icon.svg";
import { ReactComponent as RatingIcon } from "../../../../assets/image/icon/star-solid-icon.svg";
import { ReactComponent as DotIcon } from "../../../../assets/image/icon/dot-icon.svg";

const ProductCard = ({ data, image, id }) => {
    const { title, price, rating, sold, description, location } = data;
    // console.log(image)


    return (
        <div className="product-cart">
            <div className="heading-part">
                <div className="favorite-content">
                    <FavoriteIcon />
                </div>
                <Link to={`/products/${id}`}>
                    <img src={`${import.meta.env.VITE_BASE_URL}${image}`} alt="" className="product-image" width={160} height={160} />
                </Link>
            </div>
            <div className="main-part">
                <div className="product-title-price">
                    <span className="product-title">
                        <Link to={`/products/${id}`}>
                            {title}
                        </Link>
                    </span>
                    <span className="product-price">
                        ${price}
                    </span>
                </div>
                <div className="product-description">
                    North Purwokerto
                </div>
                <div className="product-rating-sold">
                    <span className="rating">
                        <span className="icon-rating">
                            <RatingIcon />
                        </span>
                        {rating}
                        <DotIcon className="dotIcon" />
                    </span>
                    <span className="sold">
                        {sold} Sold
                    </span>
                </div>
            </div>
        </div>

    )
}

export default ProductCard