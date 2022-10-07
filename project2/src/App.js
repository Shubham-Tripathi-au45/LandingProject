import logo from './logo.svg';
import './App.css';
import {useFormik} from 'formik'
import { signUpSchema } from './Schemas';
const initialValues={
  name:"",
  company:"",
  password:"",
  checkbox:"",
}
function App() {

const {values,errors, touched,handleBlur,handleChange,handleSubmit}=useFormik({
  initialValues:initialValues,
  validationSchema:signUpSchema,
  onSubmit:(values) =>{
    console.log(values)
  }
})
console.log(errors)



  return (
    <div classNameName="App">
     <div className='container-fluid text-center'>
      
     <h5>Omega</h5>
     </div>
     <div className="row  d-flex align-items-center justify-content-center" style={{marginTop:"100px",marginLeft:"10px"}}>
      <div className='col-md-6 text-center d-flex justify-content-center'>
        <form onSubmit={handleSubmit} style={{border:"1px groove",borderRadius:"10px", padding:"50px",width:"400px",height:"500px"}}>
        <h1>Sign Up</h1>
        <p style={{color:'grey'}}>No credit required</p>
          <div className='form-group'>
            <input className='form-control'type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}placeholder='Email'/>
          </div>
          
          {errors.email && touched.email ?( <p className='error'>{errors.email}</p>):null}
          <div className='form-group'>
            <input className='form-control'type="text" name="company"value={values.company} onChange={handleChange} onBlur={handleBlur} placeholder='Company Name'/>
          </div>
          {errors.company && touched.company ?( <p className='error'>{errors.company}</p>):null}
          <div className='form-group'>
            <input className='form-control'type="password" name="password"value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Password'/>
          </div>
         {errors.password && touched.password ?( <p className='error'>{errors.password}</p>):null}
          <div className="form-group form-check">
    <input type="checkbox" name='checkbox'value={values.checkbox}onChange={handleChange} onBlur={handleBlur} className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">I agree all <a href="#">Terms and Conditions</a></label>
  </div>
  {errors.checkbox && touched.checkbox ?( <p className='error'>{errors.checkbox}</p>):null}
  <button className='btn btn-danger p-3 col-8' type='submit'>Get Started</button>
  <p style={{color:'grey',marginTop:"8px"}}>Already have a account <a href="#">Sign In</a></p>

          </form>
     </div>
     </div>
     
    </div>
        
    
  );
}

export default App;
