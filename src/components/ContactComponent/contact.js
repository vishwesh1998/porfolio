import { Link } from 'react-router-dom'
import './contact.css'

export default function Contact(){
    return <div className="container-fluid contactBox">
        <div className='row'>
        <div className='col-12 text-center mt-5'>
        <h1>Contact Me</h1>
        <div className='mt-5 contactFont'>
        <span>Got a question? I'll love to hear from you, send me a message</span>
        <p>I will get back to you as soon as possible</p>
        </div>
        </div>
        </div>
        <div>
        <form onSubmit={(event)=>event.preventDefault()} className='formBox'>
        <div className='container mt-1 contactInnerBox'>
            <div className='row'>
             <div className='col-12 text-center contactForm'>
                <label className='text-left'>Name* 
                <input className='text-center form-control mt-1' required type='text' placeholder='Enter Your Name'/>
                </label>
             </div>
             </div>
             <div className='row mt-2'>
             <div className='col-12 text-center contactForm'>
                <label className='text-left'>Email* 
                <input className='text-center form-control mt-1' required type='email' placeholder='Enter Your Email'/>
                </label>
             </div>
             </div>
             <div className='row mt-2'>
             <div className='col-12 text-center contactForm'>
                <label className='text-left'>Message* 
                <textarea className='text-center form-control mt-1' required type='text' placeholder='Enter Your Message'></textarea>
                </label>
             </div>
             </div>
             <div className='row mt-3'>
             <div className='col-12 text-center'>
                {/* <label> */}
                <button className='btn'>Send Message</button>
                {/* </label> */}
             </div>
             </div>
        </div>
        </form>
        </div>
        </div>
}