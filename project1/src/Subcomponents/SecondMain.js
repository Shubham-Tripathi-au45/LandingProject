import React from 'react'
import pic from "./mobile.png"
function SecondMain() {
  return (
    <>
    <div className="container mt-5">
    <div className="row text-center">
    <div className="col-md-6 mt-5">
            <h1 className='text-center ms-auto' style={{fontWeight:"bold",fontFamily:"sans-serif"}}><strong>Making trip is fun <br></br>Travel with friends</strong>
            </h1>
            <h6 className='text-center' style={{marginTop:"20px",marginRight:"100px",lineHeight:2,color:"gray"}}>Create custom landing pages with Omega that convert <br></br>
            more visitors that any website.With lots of unique blocks,<br></br>
            you can easily build a page without coding</h6><br/>


            
            <div className='rounded-circle mb-5' style={{marginLeft:"100px"}}>1</div>
            <h5 style={{marginTop:"-40px",marginRight:"70px",fontWeight:"bold"}}>Find you Trip Partner</h5>
            <p style={{marginLeft:"px",color:"grey"}}>With lots of unique blocks, you can easily build<br/>
            a page without coding. Build your next landing page quickly
            </p>
          
           
            <div className='rounded-circle mb-5' style={{marginLeft:"100px",marginTop:"60px"}}>2</div>
            <h5 style={{marginTop:"-40px",marginRight:"70px",fontWeight:"bold"}}>Plan trip with easy steps</h5>
            <p style={{marginLeft:"px",color:"grey"}}>With lots of unique blocks, you can easily build<br/>
            a page without coding. Build your next landing page quickly
            </p>
          
    </div>
    
        <div className="col-md-6">
            <img className="" src={pic} width="369px" height="638px"/>
            
        </div>
       
        </div>
    </div>
    </>
  )
}

export default SecondMain