import "./style.scss";
import { useRef } from "react";
import {ReactComponent as ArrowIcon} from "../../../assets/image/icon/arrow-down-icon.svg";
import {ReactComponent as RatingIcon } from "../../../assets/image/icon/star-solid-icon.svg";

const FilterPart = () => {
    const containFilter = useRef();
    const containIcon = useRef();
    const checkIconRef = useRef();


    const filterToggle = () => {
        containFilter.current.classList.toggle("disabled");
        containIcon.current.classList.toggle("active");
      }

  return (
    <div className="filter-box best-filter">
    {/* 1 */}
      <div className="heading-part" onClick={filterToggle}>
        <h1>Rating</h1>
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
            <RatingIcon /> 5
          </div>
        </div>
        {/* box2 */}
        <div className="filter filter-name-2">
          <div className="custom-checkbox">
          </div>
          <div className="text-content">
          <RatingIcon /> 4
          </div>
        </div>
        {/* box3 */}
        <div className="filter filter-name-3">
          <div className="custom-checkbox">
          </div>
          <div className="text-content">
          <RatingIcon /> 3
          </div>
        </div>
        {/* box4 */}
        <div className="filter filter-name-4">
          <div className="custom-checkbox">
            <i class="fa-solid fa-check" ></i>
          </div>
          <div className="text-content">
          <RatingIcon /> 2
          </div>
        </div>
        <div className="filter filter-name-4">
          <div className="custom-checkbox">
            <i class="fa-solid fa-check" ></i>
          </div>
          <div className="text-content">
          <RatingIcon /> 1
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterPart