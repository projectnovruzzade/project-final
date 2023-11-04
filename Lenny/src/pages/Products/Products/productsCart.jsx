import "./style.scss"
import { instance } from "../../../api/index";
import Cart from "./ProductCart/cart";
import { useEffect, useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FilterContext } from "../../../context/filterContext";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../../../assets/image/icon/arrow-down-icon.svg";

const ProductsCart = () => {

  const { filters } = useContext(FilterContext);
  const {id} = useParams();

  const [productCart, setProducCart] = useState([]);
  const [checKVal, setCheckVal] = useState(true);
  const [paginationData, setPaginationData] = useState(1);


  
  if(id) {
    if(id == "electronics") {
      if(!filters?.category.includes("Electronics")) {
        filters?.category.push("Electronics")
      }
    }
    if(id == "fashion") {
      if(!filters?.category.includes("Fashion")) {
        filters?.category.push("Fashion")
      }
    }
    if(id == "accessory") {
      if(!filters?.category.includes("Accessory")) {
        filters?.category.push("Accessory")
      }
    }
  }


  useEffect(() => {
    document.title = "Products";
    // setCheckVal(false);
    console.log(`filter ${filters.maxPrice}`)
    console.log(filters);
    const getData = async (pagination) => {
      let filter = `/products?populate=*&pagination[page]=${pagination}&pagination[pageSize]=12`;

      filters?.locationFilter?.forEach(element => {
        filter += `&filters[location][$eq]=${element}&`;
      });

      filters?.category?.forEach(element => {
        filter += `&filters[categories][name]=${element}&`;
      });

      if(filters?.maxPrice != 0 || filters?.minPrice != 0) {
        filter += `&filters[price][$lte]=${filters?.maxPrice}&`
        filter += `filters[price][$gte]=${filters?.minPrice}&`
      }


      filters?.discount ? filter += `&filters[isDiscount][$eq]=true&` : ""

      console.log(filter);

      try {

        const response = await instance.get(`${filter}`);

        if (response.data) {

          setProducCart(response.data.data);
        }
      } catch (error) {
        console.error("API is now Problem ", error);

      }
    }
    getData(paginationData);


    console.log(filters)
  }, [filters,paginationData, checKVal])

  const handlerChangePage = (el) => {

    window.scrollTo(0, 0);
    // console.log(el.attributes.data.value)
    el.attributes.data.value == "right" ? setPaginationData((prevS) => +prevS + 1) : setPaginationData(el.attributes.data.value);
    console.log(paginationData);
  }


  const handlerEnterD = () => {
    console.log(e.target);
  }

  return (
    <div className='products-cart-content' onKeyPress={() => handlerEnterD}>
      <button className="filterzation" onClick={() => checKVal ? setCheckVal(false): setCheckVal(true)}>Filter et!</button>
      <div className="wrapper-product">
        {
          productCart == [] ? <h1>ERROR</h1> :
            productCart?.map((element) => {
              return <>
                <Cart key={uuidv4()} data={element?.attributes} id={element?.id} image={element?.attributes?.images?.data} />
              </>
            })
        }
      </div>
      <div className="pagination-content">
        <span className="pagination pagination-1" data="1" onClick={(e) => handlerChangePage(e.target)}>
          1
        </span>
        <span className="pagination pagination-2" data="2" onClick={(e) => handlerChangePage(e.target)}>
          2
        </span>
        <span className="pagination pagination-others" onClick={(e) => handlerChangePage(e.target)}>
          ...
        </span>
        <span className="pagination pagination-right" data="right" onClick={(e) => handlerChangePage(e.target)}>
          <ArrowIcon />
        </span>
      </div>
    </div>
  )
}

export default ProductsCart