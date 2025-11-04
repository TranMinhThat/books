import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
    </div>
    </Router>
  )
}

export default App

