import './App.css';
import { CarritoContextProvider } from './context/CarritoContextProvider';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalContextProvider } from './context/GlobalContextProvider';
import Layout from './layout/Layout';

function App() {

  return (
    <GlobalContextProvider>
      <CarritoContextProvider>
        <Router>
          <Navbar />
          <Layout>
            <AppRoutes />
          </Layout>
          <Footer />
        </Router>
      </CarritoContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
