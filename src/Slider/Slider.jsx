import React,{useEffect, useState} from 'react'
import style from './Slider.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
    const [Data,setData]=useState([])

    const API="https://newsapi.org/v2/top-headlines?country=in&apiKey=bd3602ddb31c4ab8b15d243c4876e574"
            
    const fetchNews = async (url)=>{
      const response=await fetch(url)
      const Data=await response.json()
      setData(Data.articles.slice(0,5))
      }

  useEffect(()=>{
    fetchNews(API)
  },[])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
    
  };
 
const divStyle=(src)=>{
  return{
    backgroundImage:`url(${src})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  }
} 

console.log(Data)
  return (
    <Carousel responsive={responsive}>
        {Data.map((item,index)=>{
          return(
            <div key={index} className={style.container}>
              <div style={divStyle(item.urlToImage)} className={style.background}>

                  <div className={style.headline}><h2>{item.title}</h2></div>
                    <a href={item.url} target='blank'><button>Read Me</button></a>
                  </div>
            </div>
           
          )
        })}

      </Carousel>
  )
}

export default Slider