import React from 'react'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
        <div className='container'>
        <div className="navbar-brand">Omega</div>

        
<div className="dropdown col-md-6 d-flex justify-content-around">
  <h6 className= "dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'red'}}>
    Demo
  </h6>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
  <h6>Pages</h6>
  <h6>Support</h6>
  <button className='btn btn-danger' >Get this App</button>
  </div>
  </div>
             </nav>


        </>
  )
}

export default Navbar