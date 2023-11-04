import "./filterContent.scss";
import BestFilter from "./BestFilter/bestFilter"
import LocationFilter from "./Location/locationFilter"
import CategoryFilter from "./Category/categoryFilter";
import PriceFilter from "./Price/priceFilter";
import { FilterContext } from "../../../context/filterContext";
import { ReactComponent as CloseIcon } from "../../../assets/image/icon/close-icon.svg";

// const intitialValue = [{rating: 5},{locaton: "baku"}]

const filterContent = ({ setFullfilled, checkFullfilled }) => {


  return (
    <div className={`filter-content ${checkFullfilled == "fullfilled" ? "fullfilled" : ""}`}>
      <div className="filter-heading-text">
        Filter Option

        <div className="menu-close-btn" onClick={() => setFullfilled("")}>
          <CloseIcon />
        </div>
      </div>

      <div className="wrapper">
        < BestFilter />
        < LocationFilter />
        < CategoryFilter />
        < PriceFilter />
      </div>

    </div>
  )
}

export default filterContent