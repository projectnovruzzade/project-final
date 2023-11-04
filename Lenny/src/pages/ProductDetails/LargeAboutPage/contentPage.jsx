// ! Large About SCSS

import "./style.scss"
import { ReactComponent as CompletedIcon } from "../../../assets/image/icon/completed-icon.svg";


const ContentPage = ({detailProduct}) => {
    return (
        <div className="large-about-part">
            <div className="heading-part">
                <span className="heading-text active">
                    Detail Product
                </span>
                <span className="heading-text">
                    Merchant
                </span>
                <span className="heading-text">
                    Reviews
                </span>
                <span className="heading-text">
                    Related Product
                </span>
            </div>
            <div className="product-detail-main">
                <div className="product-title-desc">
                    <div className="product-title"> {detailProduct?.attributes?.title}</div>
                    <div className="product-description">
                        {detailProduct?.attributes?.description}
                    </div>
                </div>
                <div className="adds-content">
                    <div className="box specification-box">
                        <h4 className="content-title">
                            Specification
                        </h4>
                        <div className="wrapper-content">
                            {/* box */}
                            <div className="content brand">
                                <div className="common-text">
                                    Brand
                                </div>
                                <div className="data-text">
                                    Logitech
                                </div>
                            </div>
                            {/* box */}
                            <div className="content type">
                                <div className="common-text">
                                    Type
                                </div>
                                <div className="data-text">
                                    Wired
                                </div>
                            </div>
                            {/* box */}
                            <div className="content resolution">
                                <div className="common-text">
                                    Resolution
                                </div>
                                <div className="data-text">
                                    100-25600 dpi
                                </div>
                            </div>
                            {/* box */}
                            <div className="content max-speed">
                                <div className="common-text">
                                    Max Speed
                                </div>
                                <div className="data-text">
                                    40G2
                                </div>
                            </div>
                            {/* box */}
                            <div className="content max-acceleration">
                                <div className="common-text">
                                    Max Acceleration
                                </div>
                                <div className="data-text">
                                    300 IPS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box box-about">
                        <h4 className="content-title">
                            In The Box
                        </h4>
                        <span className="element element-1">
                            <CompletedIcon /> {detailProduct?.attributes?.title}
                        </span>
                        <span className="element element-2">
                            <CompletedIcon /> DPI-Shift button cover
                        </span>
                        <span className="element element-3">
                            <CompletedIcon /> USB-C charging cable
                        </span>
                        <span className="element element-4">
                            <CompletedIcon /> LIGHTSPEED USB-A receiver
                        </span>
                        <span className="element element-5">
                            <CompletedIcon /> USB extension cable
                        </span>
                        <span className="element element-6">
                            <CompletedIcon /> User Documentation
                        </span>

                    </div>
                    <div className="box box-system">
                        <h4 className='content-title'>
                            System Required
                        </h4>
                        <ul>
                            <li>- USB port</li>
                            <li>- Internet access for optional software download</li>
                            <li>- Windows® 10 or later</li>
                            <li>- macOS 10.14 or later</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentPage