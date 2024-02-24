import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { newsApi } from '../../service/api.js'

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
        news.length !== 0 && news.map(newItem=>(
          <NewsCard newItem={newItem} />
        ))
      }
    </div>
  )
}

export default News