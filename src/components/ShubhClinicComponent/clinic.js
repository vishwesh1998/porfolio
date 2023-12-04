import './clinic.css'

export default function Clinic(){
    return <div className="container-fluid clinicBox">
        <div className="row mt-5 text-center">
        <div className="col-12">
        <h1>Shubh Clinic Website Details</h1>
        </div>
        </div>
        <div className='container mt-5 clinicInnerBox'>
        <div className='row text-center'>
            <div className='col-12'>
                <h4>Summary</h4>
                <p className='mt-1'>A Complete Front-end Of Doctor Clinic Management Website, where Doctor and their Receptionist can access their account and manage the clinic. I have used API's for managing the DataBase as well. Please have a look into the live hosted website by checking the vercel link, if blue icon is blinking while opening the vercel link, then kindly refresh to load it properly.</p>

                <h4 className='mt-5'>Technology Used</h4>
                <p className='mt-1'>HTML5, CSS3, Bootstrap4, React JS, Redux, API's</p>

                <h4 className='mt-5'>GitHub Link</h4>
                <p className='mt-1'>https://github.com/vishwesh1998/shubhClinic</p>

                <h4 className='mt-5'>Vercel Hosting</h4>
                <p className='mt-1'> https://shubh-clinic.vercel.app/</p>
            </div>
        </div>
        </div>

    </div>
}