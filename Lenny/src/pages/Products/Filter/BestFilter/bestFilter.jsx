import "./style.scss"

import { useRef,useContext } from 'react';
import { FilterContext } from "../../../../context/filterContext";
import { ReactComponent as ArrowIcon } from "../../../../assets/image/icon/arrow-down-icon.svg";
import { ReactComponent as RatingIcon } from "../../../../assets/image/icon/star-solid-icon.svg";

const bestFilter = () => {

  const {filters} = useContext(FilterContext);

  const containFilter = useRef();
  const containIcon = useRef();
  const checkIconRef = useRef();

  const filterToggle = () => {
    containFilter.current.classList.toggle("disabled");
    containIcon.current.classList.toggle("active");
  }

  const handlerCheckData = () => {
    checkIconRef.current.classList.toggle("show")
    filters.discount ? filters.discount = false : filters.discount = true;
    console.log(filters.discount);
    console.log(filters);
  }
  return (
    <div className="filter-box best-filter">
      {/*  */}
        <div className="heading-part" onClick={filterToggle}>
          <h1>Best Filter</h1>
          <span className="icon" ref={containIcon}>
            <ArrowIcon/>
          </span>
        </div>
        <div className="filter-group" ref={containFilter}>

          {/* box2 */}
          <div className="filter filter-name-1">
            <div className="custom-checkbox">
            </div>
            <div className="text-content">
              <RatingIcon /> 4 stars or upper
            </div>
          </div>
          {/* box2 */}
          <div className="filter filter-name-2">
            <div className="custom-checkbox">
            </div>
            <div className="text-content">
              Same-day delivery
            </div>
          </div>
          {/* box3 */}
          <div className="filter filter-name-3">
            <div className="custom-checkbox">
            </div>
            <div className="text-content">
              COD
            </div>
          </div>
          {/* box4 */}
          <div className="filter filter-name-4" onClick={handlerCheckData}>
            <div className="custom-checkbox">
              <i class="fa-solid fa-check" ref={checkIconRef}></i>
            </div>
            <div className="text-content">
             Discount
            </div>
          </div>
        </div>
      </div>
  )
}

export default bestFilter