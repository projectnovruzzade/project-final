
import { useRef } from 'react';
import "./filter.scss"
import { ReactComponent as ArrowIcon } from "../../../../assets/image/icon/arrow-down-icon.svg";
import { ReactComponent as RatingIcon } from "../../../../assets/image/icon/star-solid-icon.svg";

const FilterW = () => {

    const containFilter = useRef();
    const containFilter2 = useRef();
    const containIcon = useRef();
    const containIcon2 = useRef();
    const checkIconRef = useRef();



    const filterToggle = () => {
        containFilter.current.classList.toggle("disabled");
        containIcon.current.classList.toggle("active");
    }

    const filterToggle2 = () => {
        containFilter2.current.classList.toggle("disabled");
        containIcon2.current.classList.toggle("active");
    }
  return (
    <div className="filter-wrapper">
    <div className="filter-title">
        Reviews Filter
    </div>
    <div className="filter-box best-filter">
        {/*  */}
        <div className="heading-part" onClick={filterToggle}>
            <h1>Best Filter</h1>
            <span className="icon" ref={containIcon}>
                <ArrowIcon />
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
                    <i class="fa-solid fa-check" ref={checkIconRef}></i>
                </div>
                <div className="text-content">
                    <RatingIcon /> 2
                </div>
            </div>
            {/* box5 */}
            <div className="filter filter-name-4">
                <div className="custom-checkbox">
                    <i class="fa-solid fa-check" ref={checkIconRef}></i>
                </div>
                <div className="text-content">
                    <RatingIcon /> 1
                </div>
            </div>
        </div>
    </div>

    <div className="filter-box best-filter">
        {/*  */}
        <div className="heading-part" onClick={filterToggle2}>
            <h1>Review Topics</h1>
            <span className="icon" ref={containIcon2}>
                <ArrowIcon />
            </span>
        </div>
        <div className="filter-group" ref={containFilter2}>

            {/* box2 */}
            <div className="filter filter-name-1">
                <div className="custom-checkbox">
                </div>
                <div className="text-content">
                    Product Quality
                </div>
            </div>
            {/* box2 */}
            <div className="filter filter-name-2">
                <div className="custom-checkbox">
                </div>
                <div className="text-content">
                    Seller Services
                </div>
            </div>
            {/* box3 */}
            <div className="filter filter-name-3">
                <div className="custom-checkbox">
                </div>
                <div className="text-content">
                    Product Price
                </div>
            </div>
            {/* box4 */}
            <div className="filter filter-name-4">
                <div className="custom-checkbox">
                    <i class="fa-solid fa-check" ref={checkIconRef}></i>
                </div>
                <div className="text-content">
                    Shipment
                </div>
            </div>
            {/* box5 */}
            <div className="filter filter-name-4">
                <div className="custom-checkbox">
                    <i class="fa-solid fa-check" ref={checkIconRef}></i>
                </div>
                <div className="text-content">
                    Match with Description
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default FilterW