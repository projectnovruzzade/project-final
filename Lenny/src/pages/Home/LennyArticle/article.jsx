// ! Lenny Article components
import { NavLink } from "react-router-dom";
import ExampleImg from "../../../assets/image/picture/notebook.png";
import Box from "./ArticleBox/articeBox"
import "./article.scss";
import { instance } from "../../../api";
import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from "react";

const Article = () => {

    const [boxData,setBoxData] = useState([]);

    useEffect(() => {
      const getData = async () => {
        const response = await instance.get("/articles?populate=*");
        setBoxData(response?.data?.data);
        console.log(boxData)
      }

      getData();
    
    }, [])
    

  return (
    <section className="articlePage">
        <div className="wrapper">
            <div className="section-heading-part">
                <span className="section-title">
                   Lenny’s Article
                </span>
                <span className="view-detail">
                    <NavLink>
                      View Detail
                    </NavLink>
                </span>
            </div>
            <div className="box-group">
                {/* box */}
                {
                    boxData?.map((element) => {
                        return <>
                        <Box key={uuidv4()} data={element?.attributes} img={element?.attributes?.image?.data?.attributes?.url}/>
                        </>
                    })
                }
            
            </div>
        </div>
    </section>
  )
}

export default Article