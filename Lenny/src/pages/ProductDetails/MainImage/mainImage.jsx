import React from 'react'
import { ReactComponent as ArrowIcon } from "../../../assets/image/icon/arrow-down-icon.svg";


const MainImage = ({ image, previosElement, nextElement }) => {
    return (
        <div className="current-image-content">
            <div className="previous-data" onClick={previosElement}>
                <ArrowIcon />
            </div>
            <img src={image} alt="" className='main-image' width={250} height={250} />
            <div className="next-data" onClick={nextElement}>
                <ArrowIcon />
            </div>
        </div>
    )
}

export default MainImage