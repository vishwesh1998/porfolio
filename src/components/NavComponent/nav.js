import { Link } from "react-router-dom"
import './nav.css'

export default function Nav(){
    return <nav>
                <div className='container'>
                    <div className="row d-flex align-items-center">
                        <div className='col-4 mt-3'>
                            <h3><b>Vishwesh's Portfolio</b></h3>
                        </div>
                        <div className='col-2 text-right mt-2'>
                            <Link to='/' style={{textDecoration:'none'}}><b className='Links'>Home</b></Link>
                            {/* <b className='Links'><Link to='/home' style={{textDecoration:'none', marginLeft:'330px'}}>Home</Link></b> */}
                        </div>
                        <div className='col-2 text-right mt-2'>
                        <Link to='/about' style={{textDecoration:'none'}}><b className='Links'>About</b></Link>
                        </div>
                        <div className='col-2 text-right mt-2'>
                            <Link to='/projects' style={{textDecoration:'none'}}><b className='Links'>Projects</b></Link>
                        </div>
                        {/* <div className='col-2 text-right mt-2'>
                        <Link to='/certificate' style={{textDecoration:'none'}}><b className='Links'>Trainig/Certificates</b></Link>
                        </div> */}
                        <div className='col-2 text-right mt-2'>
                        <Link to='/contactUs' style={{textDecoration:'none'}}><b className='Links'>Contact Me</b></Link>
                        </div>
                    </div>
                </div>
            </nav>
}