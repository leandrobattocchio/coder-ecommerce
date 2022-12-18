import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailConteiner } from './components/item-detail-container/ItemDetailConteiner';
import { useGames } from './hooks/useGames';

function App() {

  const games = useGames()

  return (
    <div className="App">
     <BrowserRouter> 
        <Navbar />
       <div className='juegos'>
         <Routes>
            <Route path='/' element={<ItemListContainer games={games}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer games={games}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailConteiner games={games}/>}/>
          </Routes>
        </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
