import { useState, useEffect } from "react";
import "./featured.scss";
import Category from "./CategoryBox";
import { instance } from "../../../api";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Featured = () => {

  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await instance.get("/categories?populate=*");
        if (response.data) {
          setCategoryData(response.data.data);
        }
      } catch (error) {
        console.error("API is now Problem ", error);
      }
    };

    getData();
  }, []);

  return (
    <section className='featuredPage'>
      <div className="wrapper">
        <div className="category-title-part">
          <h1 className='title-text'>
            Featured Category
          </h1>
          <div className="view-detail-btn">
            <Link to="/products">  
              View Detail
            </Link>
          </div>
        </div>
        <div className="category-box-group">
          {
            categoryData?.map((element) => {
              return <>
                <Category key={uuidv4()} id={element?.id} name={element?.attributes?.name} img={element?.attributes?.thumbnail?.data?.attributes?.url} />
              </>
            })
          }
          {
            categoryData?.map((element) => {
              return <>
                <Category key={uuidv4()} id={element?.id} name={element?.attributes?.name} img={element?.attributes?.thumbnail?.data?.attributes?.url} />
              </>
            })
          }

        </div>
      </div>
    </section>
  )
}

export default Featured