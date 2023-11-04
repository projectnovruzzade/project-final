import "./style.scss"
import { useRef, useContext, useState, useEffect } from "react";
import { FilterContext } from "../../../../context/filterContext"
import { ReactComponent as ArrowIcon } from "../../../../assets/image/icon/arrow-down-icon.svg";


const locationFilter = () => {
    const { filters } = useContext(FilterContext);
    const [data, setData] = useState([]);
    
    const containFilter = useRef();
    const checkIconRef = useRef();
    const containIcon = useRef();



    const getFilterData = (el) => {

        // setData([]);
        
        if (el.classList.contains("text-content")) {
            // el.previousElementSibling.children[0].classList.toggle("show");
            // setData((prevData) => {
            //     if (prevData.includes(el.textContent)) {
            //         return prevData.filter(item => item !== el?.textContent);
            //     } else {
            //         return [...prevData, el?.textContent];
            //     }
            // });
        } else {
            // console.log(el.parentElement.parentElement.children[1])
            el.classList.toggle("show");

            setData((prevData) => {
                if (prevData.includes(el.parentElement.parentElement.children[1].innerText)) {
                    return prevData.filter(item => item !== el.parentElement.parentElement.children[1].innerText);
                } else {
                    return [...prevData, el.parentElement.parentElement.children[1].innerText];
                }
            });
        }

        // console.log(el);
    }


    useEffect(() => {
        filters.locationFilter = data;
        // console.log(data);
        // console.log(filters);
    }, [data])

    // setData([]);

    const filterToggle = () => {
        containFilter.current.classList.toggle("disabled");
        containIcon.current.classList.toggle("active");
    }



    return (
        <div className="filter-box location-filter">


            <div className="heading-part" onClick={filterToggle}>
                <h1>Location</h1>
                <span className="icon" ref={containIcon}>
                    <ArrowIcon />
                </span>
            </div>
            <div className="filter-group" ref={containFilter}>

                {/* box2 */}
                <div className="filter filter-name-1" onClick={(e) => getFilterData(e.target)}>
                    <div className="custom-checkbox" ref={containFilter}>
                        <i class="fa-solid fa-check" ref={checkIconRef}></i>
                    </div>
                    <div className="text-content">
                        Bandung
                    </div>
                </div>
                {/* box2 */}
                <div className="filter filter-name-2" onClick={(e) => getFilterData(e.target)}>
                    <div className="custom-checkbox" ref={containFilter}>
                        <i class="fa-solid fa-check" ref={checkIconRef}></i>
                    </div>
                    <div className="text-content">
                        Jakarta
                    </div>
                </div>
                {/* box3 */}
                <div className="filter filter-name-3" onClick={(e) => getFilterData(e.target)}>
                    <div className="custom-checkbox" ref={containFilter}>
                        <i class="fa-solid fa-check" ref={checkIconRef}></i>
                    </div>
                    <div className="text-content">
                        Medan
                    </div>
                </div>
                {/* box4 */}
                <div className="filter filter-name-4" onClick={(e) => getFilterData(e.target)}>
                    <div className="custom-checkbox" ref={containFilter}>
                        <i class="fa-solid fa-check" ref={checkIconRef}></i>
                    </div>
                    <div className="text-content">
                        Surabaya
                    </div>
                </div>
                {/* box5 */}
                <div className="filter filter-name-5" onClick={(e) => getFilterData(e.target)}>
                    <div className="custom-checkbox" ref={containFilter}>
                        <i class="fa-solid fa-check" ref={checkIconRef}></i>
                    </div>
                    <div className="text-content">
                        Jogja
                    </div>
                </div>
                <div className="show-all">
                    Show All
                </div>
            </div>
        </div>
    )
}

export default locationFilter