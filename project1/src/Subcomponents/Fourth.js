import React from 'react'
import old from './image.png'
import beach from './beach.png'
import app from './app.png'
import google from './goog.png'
function Fourth() {
  return (
    <>
       <div className="container mt-5">
    <div className="row text-center">
    <div className="col-md-6 my-auto" >
            <h1 className='text-center' style={{fontWeight:"bold",fontFamily:"sans-serif"}}><strong>Improving your <br></br>travel experience</strong>
            </h1>
            <h6 className='text-center' style={{lineHeight:2,color:"gray"}}>Create custom landing pages with Omega that convert <br></br>
            more visitors that any website.With lots of unique blocks,<br></br>
            you can easily build a page without coding</h6><br/>
            <button className='btn btn-danger col-4'>Get this App</button>
</div>

           
    
        <div className="col-md-6">
            <img className="" src={old} width="369px" height="638px"/>
            
        </div>
       
        </div>
    </div>
    <div className='container-fluid'>
        <div className='row'>
        <div className='col-md-4'>
        </div>
        < img src={beach} width="1440px" height="715px" />
        </div>
    </div>

    <div className='container mt-5'>
        <div className='col-mx-auto'>
            <h1>Get the App Now</h1>
            <p>Create a custom landing pages with Omega that convert <br></br>
            more visitors that any website
            </p>

            <img src={app} width="189"height="60px"/>
            <img src={google} width="189"height="60px"/>
        </div>
    </div>
    
    </>
  )
}

export default Fourth