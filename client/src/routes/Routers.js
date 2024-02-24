import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import News from '../components/news/News'
import Events from '../components/events/Events'
// import Santuries from '../components/santuries/Santuries';
import Quiz from '../components/quiz/Quiz.jsx'
const Routers = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/news' element={<News/>} />
    <Route path='/events' element={<Events/>} />
    {/* <Route path='/santuries' element={<Santuries/>} /> */}
    <Route path='/quiz' element={<Quiz/>} />
   </Routes>
  )
}

export default Routers