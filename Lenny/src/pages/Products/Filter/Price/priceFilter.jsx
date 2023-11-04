import { useRef,useContext } from "react"
import "./style.scss"
import { ReactComponent as ArrowIcon } from "../../../../assets/image/icon/arrow-down-icon.svg";
import {FilterContext} from "../../../../context/filterContext";

const priceFilter = () => {

    const {filters} = useContext(FilterContext);
    console.log(filters.maxPrize);


    const containFilter = useRef();
    const containIcon = useRef();

    const filterToggle = () => {
        containFilter.current.classList.toggle("disabled");
        containIcon.current.classList.toggle("active");
    }

    return (
        <div className='filter-box price-filter'>
            <div className="heading-part" onClick={filterToggle}>
                <h1>Price Range</h1>
                <span className="icon" ref={containIcon}>
                    <ArrowIcon />
                </span>
            </div>
            
            <div className="range-form" ref={containFilter}>
                <div className="price-content minumum-price-content">
                    <span className='money-type'>USD <ArrowIcon /></span>
                    <input type="tel" name="" id="" placeholder='Minimum price'/>
                </div>
                <div className="price-content maxiumum-price-content">
                    <span className='money-type'>USD <ArrowIcon /></span>
                    <input type="tel" name="" id="" placeholder='Maximum price ' onChange={(e) => filters.maxPrice = Number(e.target.value)}/>
                </div>
                <div className="price-box">
                    $0 - $200
                </div>
                <div className="price-box">
                    $200 - $500
                </div>
                <div className="price-box">
                    $500 - $1500
                </div>
            </div>

        </div>
    )
}

export default priceFilter