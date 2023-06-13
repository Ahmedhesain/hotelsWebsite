import './App.css';
import NavBar from './components/navbar/navbar';
import { Route , Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import Main from './pages/main/main';
import Favorites from './pages/favorites/favorites';
import Results from './pages/results/results';
import 'firebase/firestore'
import 'firebase/auth'
import { SearchProvider } from './context/context';
import React ,{useState} from 'react';
import { LanguageProvider } from './context/languageContext';
import { IdProvider } from './context/contextId';
import Details from './pages/details/details';
import Booking from './pages/booking/booking';
import LangChange from './pages/language/language';
import { PersonsProvider } from './context/personsContext';
import Login from './pages/login/login';
import { CheckinProvider } from './context/checkinContext';
import { CheckoutProvider } from './context/checkoutContext copy';
import { CurrencyProvider } from './context/currencyContext';
import { EmailProvider } from './context/emailContext';
import Private from './pages/private/private';


function App() {
  const [searchValue,setSearchValue]=useState("");
  const [languageValue,setLanguageValue]=useState("English")
  const [currencyValue,setCurrencyValue]=useState("Dollar")
  const [idValue,setIdValue]=useState("")
  const [personsValue,setPersonsValue]=useState()
  const [checkinValue,setCheckinValue]=useState("")
  const [checkoutValue,setCheckoutValue]=useState("")
  const [emailValue,setEmailValue]=useState("")


  return (
    <div>
  <LanguageProvider value={{languageValue,setLanguageValue}}>
  <CurrencyProvider value={{currencyValue,setCurrencyValue}}>
  <EmailProvider value={{emailValue,setEmailValue}}>

  <NavBar/>
    <SearchProvider value={{searchValue,setSearchValue}}>
    <PersonsProvider value={{personsValue,setPersonsValue}}>
    <IdProvider value={{idValue,setIdValue}}>
    <CheckinProvider value={{checkinValue,setCheckinValue}}>
    <CheckoutProvider value={{checkoutValue,setCheckoutValue}}>

    <Routes>
    
    <Route path='/' element={<Main/>}></Route>
    <Route path='/favorites' element={<Private/>}></Route>
    <Route path='/results' element={<Results/>}></Route>
    <Route path='/details' element={<Details/>}></Route>
    <Route path='/booking' element={<Booking/>}></Route>
    <Route path='/languages' element={<LangChange/>}></Route>
    <Route path='/login' element={<Login/>} ></Route>

    </Routes>
    </CheckoutProvider>
    </CheckinProvider>
    </IdProvider>
    </PersonsProvider>
    </SearchProvider>

    </EmailProvider>
    </CurrencyProvider>
  </LanguageProvider>
   <Footer/>
   </div> 
  );
}

export default App;
