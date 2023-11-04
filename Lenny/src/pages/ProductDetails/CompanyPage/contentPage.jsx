// ! Company page Component

import "./style.scss"
import { ReactComponent as ShoppingIcon } from "../../../assets/image/icon/shopping-icon.svg";
import { ReactComponent as ChatIcon } from "../../../assets/image/icon/chat-icon.svg";
import CompanyImage from "../../../assets/image/picture/company-image.svg";


const ContentPage = () => {
  return (
    <div className="product-review">
    <h3 className="content-title">
        Merchant Information
    </h3>
    <div className="content-review">
        <div className="company-about">
            <div className="company-profile">
                <img src={CompanyImage} alt="" />
            </div>
            <div className="company-title">
                <h4>
                    Logitech Indonesia
                </h4>
                <span className="secondary-text">
                    Jakarta Pusat
                </span>
                <div className="targets">
                    <span className="target">
                        Top Rated Merchant
                    </span>
                    <span className="target">
                        Best Merchant
                    </span>
                </div>
            </div>
        </div>
        <div className="buttons-group">
            <div className="btn">
                <ChatIcon />
                Chat
            </div>
            <div className="btn">
                <ShoppingIcon />
                Visit Merchant
            </div>
        </div>
    </div>
</div>
  )
}

export default ContentPage