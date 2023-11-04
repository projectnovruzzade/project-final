import React,{useState,useEffect} from 'react';
import "./home.scss"
import StartPage from "./StartPage/start";
import FeaturedPage from './FeaturedPage/featuredC';
import PopularProductPage from "./PopularProduct/popular";
import OneProductPage from "./OneProduct/oneProduct"
import ArticlePage from './LennyArticle/article';



const Home = () => {

  const [isLoginActive,setIsLoginActive] = useState(false);


  useEffect(() =>{
    setTimeout(() => {
      document.title = "Lenny";
  }, 500);
  },[])
  

  const checkActive = () => {
    console.log("Checked")
  }

  return (
    <main id='main-wrapper'>
      <StartPage />
      <FeaturedPage />
      <PopularProductPage />
      <OneProductPage />
      <ArticlePage />
    </main>
  )
}

export default Home