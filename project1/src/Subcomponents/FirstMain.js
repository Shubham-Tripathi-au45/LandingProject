import React from 'react'
import photo from  './i-phone-body.jpg'
import logo from './path@2x.png'
function FirstMain() {
  return (
  <>
<div className="container">

    <div className="row text-center">
        <div className="col-md-6">
            <img className="" src={photo} width="250px"/>
            <h3 className="text-center"></h3>
        </div>
        <div className="col-md-6">
            <h1 className='text-center' style={{marginTop:"60px",marginRight:"200px"}}><strong>Travel the world<br></br>and meet new friends</strong>
            </h1>
            <h6 className='text-center' style={{marginTop:"20px",marginRight:"200px",lineHeight:2}}>Create custom landing pages with Omega that convert <br></br>
            more visitors that any website.With lots of unique blocks,<br></br>
            you can easily build a page without coding</h6>
            <div className="input-group mb-3 ">
  <input type="text" className="form-control mt-2 " placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append ">
    <button className="btn btn-danger mt-2"  type="button">I want to Join</button>
  </div>
</div>
                
            
        
        </div>


       
    </div>
    <div className="container-fluid"style={{height:"300px",backgroundColor:"blue"}}>
         <div style={{display:"flex", justifyContent:"space-around",marginTop:"40px"}}>

            <p style={{marginTop:"100px" ,marginLeft:"-40px" ,color:"white",lineHeight:2}}>
                <img src={logo}width="20px" height={"18px"}></img>
                <img src={logo}width="20px" height={"18px"}></img>
                <img src={logo}width="20px" height={"18px"}></img>
                <img src={logo}width="20px" height={"18px"}></img>
                <img src={logo}width="20px" height={"18px"}></img><br/>
                "OMG! I cannot believe that I have got a brand new<br/>
                landing page after getting Omega.It was super easy to <br/>
                edit and publish.Everyone should try it!"<br/>
                <p style={{color:"white",textAlign:"left",fontWeight:"bold"}}>ZEpline</p>
            </p>
            <p style={{marginTop:"100px" ,marginRight:"10px" ,color:"white",lineHeight:2}}>
            <img src={logo}width="20px" height={"18px"}></img>
                <img src={logo}width="20px" height={"18px"}></img>
                <img src={logo}width="20px" height={"18px"}></img>
                <img src={logo}width="20px" height={"18px"}></img>
                <img src={logo}width="20px" height={"18px"}></img><br/>
                "OMG! I cannot believe that I have got a brand new<br/>
                landing page after getting Omega.It was super easy to <br/>
                edit and publish.Everyone should try it!"<br/>

                <p style={{color:'white',textAlign:"left",fontWeight:"bold"}}>-Shubham Tripathi</p>
            </p>

         </div>
    </div>
</div>

  </>
  )
}
export default FirstMain