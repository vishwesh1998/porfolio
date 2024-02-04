import { Link } from 'react-router-dom'
import './project.css'

export default function Project(){

    let projectData = [
        {img : 'img/ap.webp', name : 'MERN Stack Website (Admin Panel)', msg : 'Click For More Details', path : '/mernStack'},
        {img : 'img/shopping.png', name : 'Shopping Cart Demo Website', msg : 'Click For More Details', path : '/shoppingCart'},
        {img : 'img/kanbonBoard.png', name : 'Kanbon Board', msg : 'Click For More Details', path : '/KanbonBoard'},
        {img : 'img/portfolio1.png', name : 'My Portfolio Website', msg : 'Click For More Details', path : '/myPortfolio'},
        {img : 'img/creditCard2.png', name : 'Virtual Credit Card Editor', msg : 'Click For More Details', path : '/creditCard'},
        {img : 'img/game1.png', name : 'Team Selecting Game', msg : 'Click For More Details', path : '/dream11'},
        {img : 'img/cal2.png', name : 'Basic Calculator', msg : 'Click For More Details', path : '/cal'},
        {img : 'img/clinic2.png', name : 'Shubh Clinic Website', msg : 'Click For More Details', path : '/shubhClinic'},
        {img : 'img/e-mall.jpg', name : 'E-mall website', msg : 'Click For More Details', path : '/emall'},
        {img : 'img/JSONdata.png', name : 'Dummy JSON User"s Records', msg : 'Click For More Details', path : '/dummyJSON'},
        {img : 'img/pass1.png', name : 'Random Password Generator', msg : 'Click For More Details', path : '/passGen'},
        {img : 'img/emi.png', name : 'EMI Calculator', msg : 'Click For More Details', path : '/emiCal'}
    ]
        // 3) E-mall website with fetching the Dummy JSON data.
        // 4) Virtual Credit Card Editor.
        // 5) Basic Calculator.
        // 6) Dream 11, Team Selecting Game.
        // 7) Basic Quiz App Game. Dummy JSON User's Records And Added Multiple Functionality on it.
        // 9) Random Password Generator.
        // 10) EMI Calculator.', ,

        let projectComponent = (ob) =>{
            // console.log(ob)
            // projectData.map(obj=>obj==ob ? alert('yes') : <></>)
            // projectData.some(obj=>obj==ob ? )
        }


    return <div className="container-fluid projectBox">
        <div className='row'>
        <div className='col-12 text-center mt-5'>
        <h1>Project's List</h1>
        </div>
        <div className='container projectIcon'>
            <div className='row text-center a'>
             {projectData.map(obj=><div className='col-3 imgBox' onClick={()=>projectComponent(obj)}>
             <Link to={obj.path} style={{textDecoration:'none'}}>
                <img src={obj.img} height={170} style={{borderRadius:'92px'}}/>
                <h4 className='mt-3'>{obj.name}</h4>
                <p>{obj.msg}</p>
                </Link>
             </div>)}
        </div>
        </div>
        </div>
    </div>
}