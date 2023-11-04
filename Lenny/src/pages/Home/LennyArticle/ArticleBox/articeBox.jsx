import React from 'react'

const ArticeBox = ({data,img}) => {

    const {date,title,description} = data;

    return (
        <div className="box">
            <div className="heading-part">
                <img src={`${import.meta.env.VITE_BASE_URL}${img}`} alt="" />
            </div>
            <div className="main-part">
                <div className="box-date">
                    {date ? date : <h3>Loading..</h3>}
                </div>
                <div className="box-title">
                {title ? title : <h3>Loading..</h3>}
                </div>
                <div className="box-description">
                {description ? description : <h3>Loading..</h3>}
                </div>
            </div>
        </div>
    )
}

export default ArticeBox