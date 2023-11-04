import { NavLink } from "react-router-dom";
import {ReactComponent as FavoriteIcon} from "../../../../assets/image/icon/heart-icon.svg";
import {ReactComponent as RatingIcon} from "../../../../assets/image/icon/star-solid-icon.svg";
import {ReactComponent as DotIcon} from "../../../../assets/image/icon/dot-icon.svg";


const Cart = ({data,image,id}) => {

    const {title,rating,sold,price} = data;



    return (
        <div className={`product-cart cart-${id}`}>
            <div className="heading-part">
                <div className="favorite-content">
                    <FavoriteIcon />
                </div>
                <NavLink to={`/products/${id}`}>
                    <img src={`${import.meta.env.VITE_BASE_URL}${image[0].attributes?.url}`} alt="" className="product-image" width={170} height={170} />
                </NavLink>
            </div>
            <div className="main-part">
                <div className="product-title-price">
                    <span className="product-title">
                        <NavLink to={`/products/${id}`}>
                            {title}
                        </NavLink>
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

export default Cart