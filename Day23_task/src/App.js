import './App.css';
import {useState} from "react"
const Product=[
  {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name:"Fancy Product",
      price:["$40.00", "$80.00"],
      button:"Add to Cart",
      rating:false,
      sale:false
  },
  {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name:"Special Item",
      price:["$40.00" , "$80.00"],
      button:"Add to Cart",
      rating:true,
      sale:true
  },
  {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name:"Sale Item",
      price:["$40.00" , "$80.00"],
      button:"Add to Cart",
      rating:false,
      sale:true
  },
  {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name:"Popular Item",
      price:["$40.00" , "$80.00"],
      button:"Add to Cart",
      rating:true,
      sale:false
  },
  {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name:"Sale Item",
      price:["$40.00" , "$80.00"],
      button:"Add to Cart",
      rating:false,
      sale:true
  },
  {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name:"Fancy Product",
      price:["$40.00" , "$80.00"],
      button:"Add to Cart",
      rating:false,
      sale:false
  },
  {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name:"Special Item",
      price:["$40.00","$80.00"],
      button:"Add to Cart",
      rating:true,
      sale:true
  },
  {
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name:"Popular Item",
      price:["$40.00" , "$80.00"],
      button:"Add to Cart",
      rating:true,
      sale:false
  }
]

function App() {
  const [cartcount, setcartcount]=useState(0)
  return (
    <div className="App">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartcount}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    {Product.map((e,i)=><Card key={i} Product={e} setcartcount1={setcartcount} cartcount1={cartcount} />)}
    </div>
            </div>
        </section>
      
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright & copy; Your Website 2023</p></div>
        </footer>
    </div>
  );
}

export default App;
function Card({Product,setcartcount1,cartcount1}){
  const[addedToCart, setaddedToCart]=useState(false)
  const styles={
    top:"0.5rem",
    right:"0.5rem"
  }
return(
  <div className="col mb-5">
  <div className="card h-100">
   {Product.sale? <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>:<div></div> }

      <img className="card-img-top" src={Product.image} alt="..." />
      <div className="card-body p-4">
          <div className="text-center">
              <h5 className="fw-bolder"> {Product.name} </h5>
             {Product.rating? <div className="d-flex justify-content-center small text-warning mb-2">
                 <div className="bi-star-fill"></div>
                 <div className="bi-star-fill"></div>
                 <div className="bi-star-fill"></div>
                 <div className="bi-star-fill"></div>
                 <div className="bi-star-fill"></div>
              </div>: <div></div> }
            {Product.sale? <div><span className="text-muted text-decoration-line-through">{Product.price[0]}</span>  {Product.price[1]}</div>: <span> {Product.price[0]}- {Product.price[1]} </span>}
              
             
          </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">{addedToCart?<button className="btn btn-outline-dark mt-auto" disabled >{Product.button}</button>:<button onClick={()=>{setaddedToCart(!addedToCart) ;setcartcount1(cartcount1+1)}} className="btn btn-outline-dark mt-auto"  >{Product.button}</button>}</div>
          <br/>
            <div>{addedToCart?<button onClick={()=>{setaddedToCart(!addedToCart); setcartcount1(cartcount1-1)}} className="btn btn-outline-dark mt-auto"  >remove from cart?</button>:<div></div>}</div>
      </div>
  </div>
</div>
)
}