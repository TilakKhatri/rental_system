import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Booking from './pages/admin/Booking';
import Products from './pages/admin/Products';
import AddProduct from './components/admin/AddProduct';
import Details from './components/Details';
import Booknow from './pages/Booknow';
import Login from './pages/admin/Login';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/booknow" element={<Booknow />} />
        <Route path="/posts/details/:id" element={<Details />} />
        <Route path='/admin' element={<Login />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/bookings' element={<Booking />} />
        <Route path='/admin/users' element={<Users />} />
        <Route path='/admin/products' element={<Products />} />
        <Route path='/admin/addproduct' element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
