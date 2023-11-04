import React from 'react'
import "./amount.scss"
import { ReactComponent as PromoIcon } from '../../../assets/image/icon/discount-shape.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/image/icon/arrow-down-icon.svg';

const Amount = () => {
    return (
        <div className='amount-content'>
            <div className="content-title">
                Product Summary
            </div>
            <div className="products-group">
                <span>
                    No product selected
                </span>
            </div>
            <div className="product-current-about">
                <div className="box total-price">
                    <span>Total Price</span>
                    <span>$0</span>
                </div>
                <div className="box total-price-discount">
                    <span>Total Price (Discount)</span>
                    <span>$0</span>
                </div>
                <div className="box tax">
                    <span>Tax & Fee</span>
                    <span>$0</span>
                </div>
            </div>
            <div className="total-price">
                <span className="total-common">
                   Total Price
                </span>
                <span className="data">
                   $0
                </span>
            </div>
            <div className="promo-content">
                <div className="icon">
                    <PromoIcon />
                </div>
                <div className="text">
                    <span className="head-text">
                       Use a Promo
                    </span>
                    <span className="secondary-text">
                      Choose product to use promo
                    </span>
                </div>
                <div className="icon arrow">
                  <ArrowIcon />
                </div>
            </div>

            <div className="checkout-btn">
            Checkout
            </div>
        </div>
    )
}

export default Amount