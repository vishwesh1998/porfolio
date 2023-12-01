import { Link } from 'react-router-dom'
import './about.css'

export default function About() {
    return <div className="container-fluid aboutBox">
        <div className="row text-center sectionOne">
            <div className='col-lg-12'>
                <h1 className='text-center mt-5'>Education Details</h1>
                <img src='img/about.png' className='img' />
            </div>
        </div>
        <br/><br/><br/>
        <div className="row milestone">
            <div className='col-lg-12'>
            <b>My Milestone's</b>
            </div>
        </div>
        <div className='row sectionTwo'>
        <hr/>
        <div className='col-lg-12 infoLine'>
        {/* <h1 className='text-left mt-4'>Education Details</h1> */}
        <div><br/><br/><br/><br/><br/><p>(2013-14) 10th Std, Excellence School, MP Board, 78%</p></div>
        <div><br/><br/><br/><br/><br/><p>(2015-16) 12th Std, Govt Higher Scd School, MP Board, 74%</p></div>
        <div><br/><br/><br/><br/><br/><p>B.E. (CSE) Indore Institute Of Science & Technology Indore, RGPV BPL, CGPA: 5.98 (2021)</p></div>
        <div><br/><br/><br/><br/><br/><p>Completed Web Development (Front-end) Training, CodeBetter, Indore, (Skills: HTML5, CSS3, Bootstrap4, Java Script, ES6, React, Redux) (2023)</p></div>
        <div><br/><br/><br/><br/><br/><p>Completed React JS Internship, CodeBetter, Indore (2023)</p></div>
        </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className='container-fluid tableBox'>
        <div className="row milestone">
            <div className='col-lg-12'>
            <b>Professional Trainig</b>
            </div>
        </div>
        <div className='row sectionThree mt-3 text-center' style={{marginLeft:'250px', width:'60vw'}}>
        <div className='col-lg-12'>
        <table className='table table-responsive table-dark table-hover'>
            <thead> 
                <th>S. no.</th>
                <th>Oraganization</th>
                <th>Designation</th>
                <th>Course</th>
                <th>Certificate</th>
            </thead>
            <tbody>
                <tr className='tabletr'>
                    <td>1</td>
                    <td>Universal Infomatics, Indore</td>
                    <td>Trainee</td>
                    <td>MERN Stack Development</td>
                    <td><Link style={{textDecoration:'none'}} to='/universalCertificate' className='tableLink'>Click Me</Link></td>
                </tr>
                <tr className='tabletr'>
                    <td>2</td>
                    <td>CodeBetter, Indore</td>
                    <td>Trainee</td>
                    <td>Front-end Development</td>
                    <td><Link style={{textDecoration:'none'}} to='/codeBetterCertificate' className='tableLink'>Click Me</Link></td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
        </div>
    </div>
}