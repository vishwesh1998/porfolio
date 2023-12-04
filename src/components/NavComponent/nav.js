import { Link } from "react-router-dom"
import './nav.css'

export default function Nav(){
    return <nav>
                <div className='container-fluid navBox'>
                     <div className="row d-flex align-items-center">
                        <div className='col-lg-4 mt-3 d-flex justify-content-center'>
                            {/* <div> */}
                            <h3><b>Vishwesh's Portfolio</b></h3>
                            {/* </div> */}
                        </div>
                        <div className='col-lg-2 text-right mt-2 d-flex justify-content-center'>
                            {/* <div> */}
                             <Link to='/' style={{textDecoration:'none'}}><b className='Links homeLink'>Home</b></Link>
                             {/* </div> */}
                         </div> 
                        <div className='col-lg-2 text-right mt-2  d-flex justify-content-center'>
                        <Link to='/about' style={{textDecoration:'none'}}><b className='Links aboutLink'>About</b></Link>
                        </div>
                        <div className='col-lg-2 text-right mt-2  d-flex justify-content-center'>
                            <Link to='/projects' style={{textDecoration:'none'}}><b className='Links projectLink'>Projects</b></Link>
                        </div>
                        <div className='col-lg-2 text-right mt-2  d-flex justify-content-center'>
                        <Link to='/contactUs' style={{textDecoration:'none'}}><b className='Links contactLink'>Contact Me</b></Link>
                        </div> 
                      </div>
                </div>
            </nav>
}