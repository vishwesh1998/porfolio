import './App.css'
import Nav from './components/NavComponent/nav' 
import Home from './components/HomeComponent/home'
import Footer from './components/FooterComponent/footer'
import {Routes, Route} from 'react-router-dom'
import About from './components/AboutComponent/about'
import Project from './components/ProjectComponent/project'
import Clinic from './components/ShubhClinicComponent/clinic'
import Cart from './components/ShoppingCartComponent/cart'
import Emall from './components/Emall Component/emall'
import Card from './components/CreditCardComponent/card'
import Cal from './components/CalculatorComponent/calculator'
import Dream11 from './components/Dream11Component/dream11'
import DummyJSON from './components/DummyJSONComponent/dummyJSON'
import Pass from './components/PasswordComponent/pass'
import Emi from './components/EmiCalculator/emi'
import Contact from './components/ContactComponent/contact'
import Universal from './components/UniversalComponent/universal'
import CodeBetter from './components/CodeBetterComponent/codeBetter'

export default function App() {
    return <>
        <header className='header'>
            <Nav />
        </header>
        <main>
            {/* <Home/> */}
            <Routes>
                <Route path='/' element={
                   <Home/>
                } />
                <Route path='/about' element={<About/>} />
                <Route path='/projects' element={<Project/>}/>
                <Route path='/shubhClinic' element={<Clinic/>}/>
                <Route path='/shoppingCart' element={<Cart/>}/>
                <Route path='/emall' element={<Emall/>}/>
                <Route path='/creditCard' element={<Card/>}/>
                <Route path='/cal' element={<Cal/>}/>
                <Route path='/dream11' element={<Dream11/>}/>
                <Route path='/dummyJSON' element={<DummyJSON/>}/>
                <Route path='/passGen' element={<Pass/>}/>
                <Route path='/emiCal' element={<Emi/>}/>
                <Route path='/contactUs' element={<Contact/>}/>
                <Route path='/universalCertificate' element={<Universal/>}/>
                <Route path='/codeBetterCertificate' element={<CodeBetter/>}/>
            </Routes>
            {/* <br/>
            <br/>
            <br/>
            {}
            <About/>
            <br/>
            <br/>
            <br/>
            <Project/>
            <br/>
            <br/>
            <br/>
            <Contact/> */}
        </main>
        <br/><br/><br/><br/><br/>
        <footer className='footer'>
            <Footer/>
        </footer>
    </>
}