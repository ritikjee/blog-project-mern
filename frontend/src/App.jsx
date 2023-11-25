import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import AddBlog from './pages/AddBlog'
import Tags from './pages/Tags'

function App() {


  return (
    <>
      <Navbar />
      <main >
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/blog/:blogId' element={<Blog/>} />
            <Route path='/addBlog' element={<AddBlog/>} />
            <Route path='/tags' element={<Tags/>}/>
            <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  )
}

export default App
