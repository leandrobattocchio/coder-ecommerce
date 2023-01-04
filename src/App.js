import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailConteiner } from './components/item-detail-container/ItemDetailConteiner';
import { CarritoContextProvider } from './context/CarritoContextProvider';

function App() {

  return (
    <div className="App">
     <BrowserRouter> 
      <CarritoContextProvider>
        <Navbar />
        <div className='juegos'>
          <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:gameId' element={<ItemDetailConteiner/>}/>
          </Routes>
        </div> 
      </CarritoContextProvider> 
    </BrowserRouter>
    </div>
  );
}

export default App;
