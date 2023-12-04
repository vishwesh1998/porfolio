import './card.css'

export default function Card(){
    return <div className="container-fluid cardBox">
    <div className="row mt-5 text-center">
    <div className="col-12">
    <h1>Credit Card Project Details</h1>
    </div>
    </div>
    <div className='container mt-5 cardInnerBox'>
    <div className='row text-center'>
        <div className='col-12'>
            <h4>Summary</h4>
            <p className='mt-1'>A Virtual Card Editor is a kind of card viewer, where anyone can fill the details and have a look on their favorite number card. Please click on the card for checking it's back side</p>

            <h4 className='mt-5'>Technology Used</h4>
            <p className='mt-1'>HTML5, CSS3, Bootstrap4, React JS</p>

            <h4 className='mt-5'>GitHub Link</h4>
            <p className='mt-1'>https://github.com/vishwesh1998/creditCard</p>

            <h4 className='mt-5'>Vercel Hosting</h4>
            <p className='mt-1'>https://credit-card-orpin.vercel.app/</p>
        </div>
    </div>
    </div>

</div>
}