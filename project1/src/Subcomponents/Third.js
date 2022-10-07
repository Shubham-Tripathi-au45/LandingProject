import React from 'react'
import coco from './coco.png'
import girl from './girl.png'
import mount from './mountain.png'
import taj from './taj.png'
function Third() {
  return (
    <>
    <div className="container mt-5">
    <div className='row text-center'>
      
    {/* <div className=" d-flex justify-content-evenly"> */}
        <div className="col-md-2 d-flex flex-wrap justify-content-between">
        <img className="mb-1" src={girl} width="199px" height="279"/>
        <img className="" src={taj} width="198px" height="167"/>
        
    </div>
    
    <div className="col-md-2 d-flex flex-wrap justify-content-between">
    <img className="" src={mount} width="198px" height="167"/>
        <img className="" src={coco} width="199px" height="279"/>
    
    
    {/* </div> */}
   
    </div>
    <div className="col-md-6">
      {/* <div className='col-md-6'> */}
        <h1 className='text-center ml-2'><strong>See the world and <br></br>spend less always.</strong>
        </h1>
        <h6 className='text-center' style={{lineHeight:2,color:"grey"}}>Create custom landing pages with Omega that convert <br></br>
        more visitors that any website.With lots of unique blocks,<br></br>
        you can easily build a page without coding</h6>
        </div>
    </div>

       
   
    
    </div>
     
    {/* </div> */}
    </>
  )
}

export default Third