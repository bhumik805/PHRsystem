import "./tempcss/font-awesome-4.7.0/css/font-awesome.min.css" 
import "./tempcss/Linearicons-Free-v1.0.0/icon-font.min.css"
import "./tempcss/animate/animate.css"
import "./tempcss/css-hamburgers/hamburgers.min.css"
import "./tempcss/animsition/css/animsition.min.css"
import "./tempcss/select2/select2.min.css"
import "./tempcss/daterangepicker/daterangepicker.css"
import "./tempcss/util.css"
import "./tempcss/main.css"

import { Link } from 'react-router-dom'
import Topbar from '../home/topbar'
import Header2 from '../home/header2'
import Footer from '../home/footer'
import firebase from '../../firebase'
import { useState } from 'react'


const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 
  const submit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("")
        setPassword("")
        props.history.push("/")
      })
      .catch((err) => {
        console.log(err);
      })

  };

  return (
    <div>
      <div className="home">
        <Topbar />
        <Header2/>
      </div>
    <div className="limiter loginform login">
      <div className="container-login100 container-sm">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
          <form className="login100-form validate-form" onSubmit={submit}>
            <span className="login100-form-title p-b-33">
              Account Login
					</span>

            <div className="wrap-input100 validate-input">
              <input className="input100" type="text" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
              <span className="focus-input100-1"></span>
              <span className="focus-input100-2"></span>
            </div>

            <div className="wrap-input100 rs1 validate-input" required>
                <input className="input100" type="password" name="pass" value={password} placeholder="Password" password={password} onChange={(e) => setPassword(e.target.value)} required/>
              <span className="focus-input100-1"></span>
              <span className="focus-input100-2"></span>
            </div>

            <div className="container-login100-form-btn m-t-20">
              <button className="login100-form-btn">
                Sign in
						</button>
            </div>

              <div className="text-center" style={{marginTop:"8px"}}>
              <span className="txt1">
                Create an account?
						</span>

              <a className="txt2 hov1">
                <Link to="/register">Sign up</Link>
						</a>
            </div>
          </form>
        </div>
      </div>
      </div>
    
      <div className="home"><Footer /></div>
    </div>

    

  )
}

export {Login}