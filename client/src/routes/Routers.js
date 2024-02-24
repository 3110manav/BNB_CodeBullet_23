import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import News from '../components/news/News'

const Routers = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/news' element={<News/>} />
   </Routes>
  )
}

export default Routers