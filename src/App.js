import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/item-list-container/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Leandro'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ItemListContainer>
    </div>
  );
}

export default App;
