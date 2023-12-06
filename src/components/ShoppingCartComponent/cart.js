import './cart.css'

export default function Cart(){
    return <div className="container-fluid clinicBox">
        <div className="row mt-5 text-center">
        <div className="col-12">
        <h1>Shopping Cart Website Details</h1>
        </div>
        </div>
        <div className='container mt-5 clinicInnerBox'>
        <div className='row text-center'>
            <div className='col-12'>
                <h4>Summary</h4>
                <p className='mt-1'>A Demo Structure of Shopping Website, mainly I have focused the fuctionality inside it for managing the states. I have also used functions for manipulating the shopping items like adding to cart, delete the items, total price, quantity management etc. </p>

                <h4 className='mt-5'>Technology Used</h4>
                <p className='mt-1'>HTML5, CSS3, Bootstrap4, React JS, Redux, API's</p>

                <h4 className='mt-5'>GitHub Link</h4>
                <p className='mt-1'>https://github.com/vishwesh1998/add_to_cart_website</p>

                <h4 className='mt-5'>Vercel Hosting (Responsive Website)</h4>
                <p className='mt-1'> https://add-to-cart-website-sable.vercel.app/</p>
            </div>
        </div>
        </div>

    </div>
}