// import pic from '../../public/img/images.jpg'
import './home.css'
import { useNavigate } from 'react-router-dom'

export default function Home(){
    const navigate = useNavigate()
    return <div className='container-fluid homeBox'>
        <div className='row d-flex align-items-center'>
        <div className='col-lg-6 text-center'>
            <h1>Hi, My name is Vishwesh</h1>
            <h1>and I am a passionate</h1>
            <h1>Web Developer.</h1>
            <br/>
            <button className='btn' onClick={()=>window.open('https://www.linkedin.com/in/vishwesh-gupta-6918221b9')}>Visit LikedIn</button> &nbsp; &nbsp; 
            <button className='btn' onClick={()=>window.open('https://github.com/vishwesh1998')}>Visit Github</button>
        </div>
        <div className='col-lg-6 text-center'>
            <img src='img/web.png' height={500} style={{borderRadius:'160px', marginTop:60, border:'2px solid white'}}/>
            {/* <img src={pic} alt='404'/> */}
            {/* <img src="../.././public/img/images.jpg" alt="404" height={100} width={100}/> */}
        </div>
        </div>
    </div>

// previous code mentioned below
{/* <div className='container-fluid homeBox'>
<div className='row d-flex align-items-center'>
<div className='col-lg-6 text-center'>
    <h1>Hi, My name is Vishwesh</h1>
    <h1>and I am a passionate</h1>
    <h1>Web Developer.</h1>
    <br/>
    <button className='btn' onClick={()=>window.open('https://www.linkedin.com/in/vishwesh-gupta-6918221b9')}>Visit LikedIn</button> &nbsp; &nbsp; 
    <button className='btn' onClick={()=>window.open('https://github.com/vishwesh1998')}>Visit Github</button>
</div>
<div className='col-lg-6 text-center'>
    <img src='img/web.png' height={500} style={{borderRadius:'160px', marginTop:60, border:'2px solid white'}}/> */}
    {/* <img src={pic} alt='404'/> */}
    {/* <img src="../.././public/img/images.jpg" alt="404" height={100} width={100}/> */}
{/* </div>
</div>
</div> */}
}