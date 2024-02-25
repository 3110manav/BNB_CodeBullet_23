import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { newsApi } from '../../service/api.js'
import {RotatingLines} from 'react-loader-spinner'

function News() {

  const[news, setNews] = useState([]);

  useEffect(()=>async()=>{
    const data = await newsApi();
    console.log(data.articles)
    setNews(data.articles); 
  }, [])

  return (
    <div style={{display:'flex', flexWrap:"wrap",  margin:40, gap:20}} >
      {/* {news && <NewsCard news={news.articles}/>}
      <NewsCard news={news}/>
      <NewsCard news={news[0]}/> */}
      {
        news.length !== 0 ? news.map(newItem=>(
          <NewsCard newItem={newItem} />
        )) : 
        <div style={{display:"flex", justifyContent:"center", width:"100%", height:"600px"}}>
          <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />
        </div>
      }
    </div>
  )
}

export default News