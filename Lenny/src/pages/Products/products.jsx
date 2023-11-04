import "./products.scss";
import {useState, useEffect,useContext} from "react";
import { ReactComponent as ArrowIcon } from "../../assets/image/icon/arrow-down-icon.svg";
import { ReactComponent as LayoutIcon1 } from "../../assets/image/icon/layout-1-icon.svg";
import { ReactComponent as LayoutIcon2 } from "../../assets/image/icon/layout-2-icon.svg";
import { ReactComponent as RatingIcon } from "../../assets/image/icon/star-solid-icon.svg";
import { ReactComponent as FilterIcon } from "../../assets/image/icon/filter-icon.svg";
import { Link,useParams } from "react-router-dom";

import FilterContent from "./Filter/filterContent";
import ProductsCart from "./Products/productsCart";





const Products = () => {

  const [checkFullfilled,setFullfilled] = useState("");



  if(checkFullfilled == "fullfilled") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  


  return (
    <section className='products-section'>
      <div className="section-cord">
        <span className="cord-text">
          <Link to={"/"} className="active">Home</Link>
          <ArrowIcon />
        </span>
        <span className="cord-text">
          <Link to={"/products"} className="active">Electronic</Link>
          <ArrowIcon />
        </span>
        <span className="cord-text active">
          <Link>
            Gaming Gear
          </Link>
        </span>
      </div>
      <div className="section-title-content">
        <div className="result-content" style={{
          opacity: "0",
          visibility: "hidden"
        }}>
          <div className="heading-text">
            Showing product for  <span>“Gaming Gear”</span>
          </div>
          <div className="secondary-text">
            Showing 1 - 60 Products
          </div>
        </div>
        <div className="layout-sort-content">
          <div className="part-1">
            <span className="text">Sort By:</span>
            <select name="" id="">

              <option value=""> {window.screen.availWidth < "768" ? "Sort By" : ""} Relevant Products <ArrowIcon /> </option>
              <option value=""> {window.screen.availWidth < "768" ? "Sort By" : ""} The Best Products <ArrowIcon /> </option>
            </select>
            <span className="filter-btn" onClick={() => setFullfilled("fullfilled")}>
              <FilterIcon />
            </span>
          </div>

          <div className="part-2">
            <div className="btn-group">
              <span className="search-box search-type-1">
                <LayoutIcon1 />
              </span>
              <span className="search-box search-type-2">
                <LayoutIcon2 />
              </span>
            </div>
          </div>
        </div>
      </div>
      <main className="main">
        <FilterContent setFullfilled={setFullfilled} checkFullfilled={checkFullfilled}/>
        <ProductsCart />
      </main>
    </section>
  )
}

export default Products