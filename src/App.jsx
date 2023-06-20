import { useState } from 'react'
import reactLogo from './assets/icon.png'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="container">
    <div className="row">
    <div className="col-md-10 offset=md-1">
    <div className="row">
    <div className="col-md-5 register-left">
        <img src={reactLogo} alt=""/>
         <h3>Join Us</h3>
         <p>Subscribe Easy Tutorials YouTube Channel to watch more videos</p>
         <button type="button" className="btn btn-primary">About Us</button>
    </div>
    <div className="col-md-7 register-right">
        <h2>Register Here</h2>
        <div className="register-form">
          <div className="form-group">
          <input type="text" className="form-control" 
          placeholder="Name" pattern="[A-Za-z\s]{2,}" title="name can only be a alphabet" required/>
          </div>         
          <div className="form-group">
          <input type="text" className="form-control" 
          placeholder="Username" required/>
          </div>          
          <div class="form-group">
          <input type="Email" className="form-control" 
          placeholder="Email" pattern="[a-zA-Z0-9\-]{4,10}[@][a-z]+[\.][a-z]{2,3}" required/>
          </div>  
          <div className="form-group">
          <input type="Password" className="form-control" 
          placeholder="Password" pattern="(?=.*\d)(/=.*[a-z])(?=.*[A-Z]).{8,}"
          title="must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
          </div>
          <input type="submit" value="Register" className="btn btn-primary"/>
          </div>
    </div>
    </div>
    </div>
    </div>
   
</div>
    </>
  )
}

export default App
