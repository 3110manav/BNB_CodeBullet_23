import React, { useEffect } from 'react'
import NewsCard from './NewsCard'
import { newsApi } from '../../service/api.js'
function News() {
useEffect(()=>async()=>{
  const data = await newsApi();
  console.log(data)
})
  return (
    <div style={{display:'flex', flexWrap:"wrap",  margin:40, gap:20}} >
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
    </div>
  )
}

export default News