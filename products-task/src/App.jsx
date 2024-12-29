import { Route, Routes } from 'react-router-dom';
import ClientHeader from './layouts/Client-header';
import './App.css';
import Products from './pages/Client/Products';
import Favorites from './pages/Client/Favorites';
import Contact from './pages/Client/Contact';
import Home from './pages/Client/Home';
import NotFound from './pages/Client/NotFound';
import ClientLayout from './pages/Client';
import AdminLayout from './pages/Admin';
import Dashboard from './pages/Admin/Dashboard';
import Add from './pages/Admin/Add';
import AdminProducts from './pages/Admin/Products';
import EditProduct from './pages/Admin/EditProduct'; 

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Favorites' element={<Favorites />} />
          <Route path='Products' element={<Products />} />
        </Route>


        <Route path='/Admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='Products' element={<AdminProducts />} />
          <Route path='Add' element={<Add />} />

          <Route path='Products/edit/:id' element={<EditProduct />} /> 
        </Route>


        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
