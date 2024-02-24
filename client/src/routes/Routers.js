import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import News from '../components/news/News'
import Events from '../components/events/Events'

const Routers = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/news' element={<News/>} />
    <Route path='/events' element={<Events/>} />
   </Routes>
  )
}

export default Routers