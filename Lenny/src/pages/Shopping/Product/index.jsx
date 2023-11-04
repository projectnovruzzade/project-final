import { ReactComponent as DeleteIcon } from "../../../assets/image/icon/delete-icon.svg";
import ExampleImg from "../../../assets/image/picture/demo-jacket.png";


const Product = ({data}) => {

    console.log(data)

    return (
        <div className="product-card">
            <div className="about-part">
                <div className="product-check">
                    <div className="custom-checkbox">

                    </div>
                </div>
                <div className="profile-image">
                    <img src={`${import.meta.env.VITE_BASE_URL}${data?.images?.data[0]?.attributes?.url}`} alt="" />
                </div>
                <div className="product-about">
                    <div className="product-title">
                      {data?.title}
                    </div>
                    <div className="secondary-text">
                        Central Jakarta
                    </div>
                    <div className="product-price">
                        ${data?.price}
                    </div>
                </div>
            </div>
            <div className="duration-part">
                <div className="counter-content">
                    <div className="minus-btn">
                        -
                    </div>
                    <div className="current-count">
                        1
                    </div>
                    <div className="plus-btn">
                        +
                    </div>
                </div>
                <div className="remove-btn">
                    <DeleteIcon />
                </div>
            </div>
        </div>
    )
}

export default Product