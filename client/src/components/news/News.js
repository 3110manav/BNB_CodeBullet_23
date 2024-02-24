import React from 'react'
import NewsCard from './NewsCard'

function News() {
  return (
    <div style={{display:'flex', flexWrap:"wrap",  margin:40, gap:20}} >
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
    </div>
  )
}

export default News