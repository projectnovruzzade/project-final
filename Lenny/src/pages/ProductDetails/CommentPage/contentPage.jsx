// ! Comment Page Component

import "./style.scss"
import FilterWrapper from "./FilterWrapper/filterW";
import Comment from "./Comment/comment";

import {data} from "../../../constant/mock-data";

import React,{useEffect} from 'react'

const  ContentPage = () => {


   


  return (
    <section className="comment-section">
    <FilterWrapper />



    <div className="comment-wrapper">
        <div className="heading-part">
            <h4 className="heading-text">
               Review Lists
            </h4>
            <div className="btn-groups">
                <span className="btn active">
                   All Reviews
                </span>
                <span className="btn">
                  With Photo & Video
                </span>
                <span className="btn">
                 With Description
                </span>
            </div>
        </div>

        <div className="comments-group">
            {
                data.map((element) => {
                    return <>
                       <Comment data={element}/>
                    </>
                })
            }   
        </div>
    </div>
</section>
  )
}

export default ContentPage