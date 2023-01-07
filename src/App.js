import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Customers from './components/Customers'
import Demos from './components/Demos'
import Products from './components/Products'
import SalesTeam from './components/SalesTeam'
import Script from './components/Script'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Products/>} />
      <Route  path="demo_script" element={<Script/>} />
      <Route  path="customers" element={<Customers/>} />
      <Route  path="sales_team" element={<SalesTeam/>} />
      <Route  path="demos" element={<Demos/>} />
      <Route  path="settings" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
