import React ,{useEffect,useState}from 'react'
import style from './News.module.css'
import Slider from '../Slider/Slider'

const News = () => {
  const [data,setData]=useState([])
     const API="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bd3602ddb31c4ab8b15d243c4876e574"
        
     const fetchData = async (url)=>{
        const response=await fetch(url)
        const Data=await response.json()
        // console.log(Data.articles)
        setData(Data.articles.slice(5,17))
        }

    useEffect(()=>{
        fetchData(API)
    },[])
  return (
    <>
        <Slider/>
      <div className={style.heading}>Read Daily updated News</div>
      <hr />
      <div className={style.news_container}>
        
        
          {data.map((item,index)=>{
            return(
              <>
             
              <div className={style.container} key={index}>
                      <img src={item.urlToImage} alt="" />
                     <div className={style.title}>
                     <h2>{item.title}</h2>
                      <p>{item.description}</p>
                      <hr />
                      <div className={style.footer}>
                        <p>{item.publishedAt}</p>
                       <a href={item.url} target='blank'> <button>Read Me..</button></a>
                      </div>
                     </div>   
                </div>
              </>
            )
          })}
        </div>
    
    </>
  )
}

export default News