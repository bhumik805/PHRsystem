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
import firebase from '../../firebase'
import { useState } from 'react'
import { isValidEmail } from '../../Validation/validations'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Preloader from '../Preloader'


const Login = (props) => {
  const [email, setEmail] = useState("")
  const [invalidemail, setInvalidEmail] = useState("")
  const [password, setPassword] = useState("")
  const [invalidPass, setInvalidPass] = useState("")
  const [loading,setLoading] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setInvalidEmail("Enter valid email")
      return;
    };
    setLoading(true)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("")
        setPassword("")
        props.history.push("/")
      })
      .catch((err) => {
        
        if (err.code == "auth/user-not-found") {
          setInvalidEmail("User not found")
        }
        else if(err.code=="auth/wrong-password")
        {
          alert("Invalid credentials")
        }
        else {
          console.log(err);
          alert("Error try again")
        }
        setLoading(false)
      })
  };

  return (
    <div>
      {loading ? <Preloader text="Logging in" /> :
        <div className="limiter loginform login">
          <div className="container-login100 container-sm">
            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
              <form className="login100-form validate-form" onSubmit={submit}>
                <span className="login100-form-title p-b-33">
                  Account Login
					</span>

                <OverlayTrigger placement="bottom-end" overlay={
                  <Tooltip>{invalidemail}</Tooltip>
                }
                  show={invalidemail ? true : false}>
                  <div className="wrap-input100 validate-input">
                    <input className="input100" type="text" name="email" placeholder="Email" value={email} onFocus={() => setInvalidEmail("")} onChange={(e) => setEmail(e.target.value)} required />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom-end" overlay={
                  <Tooltip>{invalidPass}</Tooltip>
                }
                  show={invalidPass ? true : false}>
                  <div className="wrap-input100 rs1 validate-input" required>
                    <input className="input100" type="password" name="pass" value={password} placeholder="Password" onFocus={() => setInvalidPass("")} password={password} onChange={(e) => setPassword(e.target.value)} required />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                  </div>
                </OverlayTrigger>
                <div className="container-login100-form-btn m-t-20">
                  <button className="login100-form-btn">
                    Sign in
						</button>
                </div>

                <div className="text-center" style={{ marginTop: "8px" }}>
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
        </div>}


    </div>



  )
}

export { Login }