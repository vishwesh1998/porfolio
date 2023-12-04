import './dummyJSON.css'

export default function DummyJSON(){
    return <div className="container-fluid dummyBox">
    <div className="row mt-5 text-center">
    <div className="col-12">
    <h1>Dummy JSON Project Details</h1>
    </div>
    </div>
    <div className='container mt-5 dummyInnerBox'>
    <div className='row text-center'>
        <div className='col-12'>
            <h4>Summary</h4>
            <p className='mt-1'>A Front-end Website, where I have fetched the data from dummyJSON website and manipulated the data using React JS functionality</p>

            <h4 className='mt-5'>Technology Used</h4>
            <p className='mt-1'>HTML5, CSS3, Bootstrap4, React JS, Axios, Dummy JSON Data Calling</p>

            <h4 className='mt-5'>GitHub Link</h4>
            <p className='mt-1'>https://github.com/vishwesh1998/JSON_data_fetching</p>
        </div>
    </div>
    </div>

</div>
}