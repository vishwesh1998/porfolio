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
            <p className='mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam quo consequuntur non in, neque dolorem modi molestiae eum est? Blanditiis, voluptatum eum magnam nisi dolorum doloribus, non suscipit nesciunt iste fugit tempore esse. Sapiente repellat tenetur corporis ipsa incidunt maxime accusamus doloribus sit quae. Quis error earum quisqu.</p>

            <h4 className='mt-5'>Technology Used</h4>
            <p className='mt-1'>HTML5, CSS3, Bootstrap4, React JS</p>

            <h4 className='mt-5'>GitHub Link</h4>
            <p className='mt-1'>https://github.com/vishwesh1998/creditCard</p>
        </div>
    </div>
    </div>

</div>
}