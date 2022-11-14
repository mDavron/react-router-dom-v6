import './App.css';
import {Routes,Route} from 'react-router-dom'
import Layout from './Layout';
import Main from './components/main/Main';
import Services from './pages/Services';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
// import SignUp from './pages/signUp/SignUp';
import Generic from './components/Generic';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Main/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/sign-up' element={<Generic/>}/>
        </Route>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
