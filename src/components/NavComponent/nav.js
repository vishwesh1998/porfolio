import { Link } from "react-router-dom"
import './nav.css'

export default function Nav(){
    return <nav>
        {/* previous code mentioned below */}
                {/* <div className='container'>
                     <div className="row d-flex align-items-center">
                        <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-3'>
                            <h3><b>Vishwesh's Portfolio</b></h3>
                        </div>
                        <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-right mt-2'>
                             <Link to='/' style={{textDecoration:'none'}}><b className='Links'>Home</b></Link>
                         </div> 
                        <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-right mt-2'>
                        <Link to='/about' style={{textDecoration:'none'}}><b className='Links'>About</b></Link>
                        </div>
                        <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-right mt-2'>
                            <Link to='/projects' style={{textDecoration:'none'}}><b className='Links'>Projects</b></Link>
                        </div>
                        <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-right mt-2'>
                        <Link to='/contactUs' style={{textDecoration:'none'}}><b className='Links'>Contact Me</b></Link>
                        </div> 
                      </div>
                </div> */}

                <div className='container-fluid navBox'>
                     <div className="row d-flex align-items-center">
                        <div className='col-lg-4 mt-3 d-flex justify-content-center'>
                            {/* <div> */}
                            <h3><b>Vishwesh's Portfolio</b></h3>
                            {/* </div> */}
                        </div>
                        <div className='col-lg-2 text-right mt-2 d-flex justify-content-center'>
                            {/* <div> */}
                             <Link to='/' style={{textDecoration:'none'}}><b className='Links'>Home</b></Link>
                             {/* </div> */}
                         </div> 
                        <div className='col-lg-2 text-right mt-2  d-flex justify-content-center'>
                        <Link to='/about' style={{textDecoration:'none'}}><b className='Links'>About</b></Link>
                        </div>
                        <div className='col-lg-2 text-right mt-2  d-flex justify-content-center'>
                            <Link to='/projects' style={{textDecoration:'none'}}><b className='Links'>Projects</b></Link>
                        </div>
                        <div className='col-lg-2 text-right mt-2  d-flex justify-content-center'>
                        <Link to='/contactUs' style={{textDecoration:'none'}}><b className='Links'>Contact Me</b></Link>
                        </div> 
                      </div>
                </div>
            </nav>
}