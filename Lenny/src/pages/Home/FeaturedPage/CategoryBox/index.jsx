// ! Category BOX
import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Category = ({ name, img, id }) => {
    // console.log(name)
    console.log(img)
    // console.log(id)
    return (
        <div className="category-box">
            {
                !img ? <h4>Loading...</h4> : <img src={`${import.meta.env.VITE_BASE_URL}${img}`} alt="" className='category-image' />
            }
            <div className="category-name"> 
                <NavLink to={`/`}>
                    {!name ? <h4>Loading...</h4> : <Link to={`/category/${name.toLowerCase()}`}>{name}</Link>}
                </NavLink>
            </div>
            <div className="category-counted">
                8,9k products
            </div>
        </div>
    )
}

export default Category