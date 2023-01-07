import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailConteiner } from './components/item-detail-container/ItemDetailConteiner';
import { CarritoContextProvider } from './context/CarritoContextProvider';
import Footer from './components/footer/Footer';
import Error from './components/error/Error';
import Login from './components/login/Login'
import AsideBar from './components/aside-bar/AsideBar';

function App() {

  return (
    <BrowserRouter>
      <CarritoContextProvider>
        <Navbar />
        <div className="parent" style={{ padding: '10vh' }}>
            <AsideBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:gameId' element={<ItemDetailConteiner />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </CarritoContextProvider>
    </BrowserRouter>

  );
}

export default App;
