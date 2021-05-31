import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import firebase from '../../firebase'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { UserinfoContext } from '../../providers/userprovider'
import Preloader from '../Preloader'
import {isValidEmail} from '../../Validation/validations'

export default (props) => {
  const [user, setUser] = useContext(UserinfoContext)
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [pass2, setPass2] = useState("")
  // const [displayName, setDisplayName] = useState("")
  const [creating, setCreating] = useState(false)
  const [invalidpass, seteInvalidpass] = useState("")
  const [invalidconfpass, setInvalidconfpass] = useState("")
  const [invalidemail,setInvalidemail] = useState("")
  
  const onSub = (e) => {
    e.preventDefault()

    if (!isValidEmail(email)) {
      setInvalidemail("Invalid email")
      return;
    }
    if (pass.length < 6) {
      seteInvalidpass("Password length less than 6")
      return;
    }
    if (pass === pass2) {
      setCreating(true)
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
          return firebase.auth().signInWithEmailAndPassword(email, pass)
        })
        // .then(() => {
        //   return firebase.auth().currentUser.updateProfile({ displayName })
        // })
        // .then(() => {
        //   return setUser(prev => ({ ...prev, displayName: displayName }))
        // })
        .then(() => {
          return firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set({ uid:firebase.auth().currentUser.uid, email:firebase.auth().currentUser.email })
        })
        .then(() => {
          return firebase.firestore().collection("accessdetails").doc(firebase.auth().currentUser.email).set({
            accessto: [],
            accesstouid: [],
            hasaccess: [],
            requests: []
          })
        })
        .then(() => {
          return props.history.push("/")
        })
        .catch((err) => {
          setCreating(false)
          if (err.code === "auth/email-already-in-use") {
            setInvalidemail("Email already exists")
          }
          else {
            console.log(err);
            alert("Try again")
          }
        })

    } else {
      setInvalidconfpass("Enter same password")
    }

  }
  return (
    <div>
      {creating ? <Preloader text="Creating Account" /> : <div className="limiter registerform login">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
            <form className="login100-form validate-form" onSubmit={onSub}>
              <span className="login100-form-title p-b-33">
                Account Register
					</span>
              
          <OverlayTrigger placement="bottom-end" overlay={
                  <Tooltip>{invalidemail}</Tooltip>
                }
                  show={invalidemail ? true : false}>
              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" placeholder="Email" onFocus={()=>setInvalidemail("")} onChange={(e) => setEmail(e.target.value)} required />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
                </div>
          </OverlayTrigger>
              {/* <div className="wrap-input100 validate-input">
                <input className="input100" type="text" placeholder="Displayname" onChange={(e) => setDisplayName(e.target.value)} required />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div> */}
            
              <OverlayTrigger placement="bottom-end" overlay={
                  <Tooltip>{invalidpass}</Tooltip>
                }
                  show={invalidpass ? true : false}>
              <div className="wrap-input100 rs1 validate-input">
                <input className="input100" type="password" placeholder="Password" onFocus={()=>seteInvalidpass("")} onChange={(e) => setPass(e.target.value)} required />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>
              </OverlayTrigger>

              <OverlayTrigger placement="bottom-end" overlay={
                  <Tooltip>{invalidconfpass}</Tooltip>
                }
                  show={invalidconfpass ? true : false}>
              <div className="wrap-input100 rs1 validate-input">
                <input className="input100" type="password" placeholder="Confirm password" onFocus={()=>setInvalidconfpass("")} onChange={(e) => setPass2(e.target.value)} required />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>
              </OverlayTrigger>
              <div className="container-login100-form-btn m-t-20">
                <button className="login100-form-btn">
                  Register
						</button>
              </div>



              <div className="text-center" style={{ marginTop: "8px" }}>
                <span className="txt1">
                  Already have an account?&nbsp;
						</span>

                <a className="txt2 hov1">
                  <Link to="/login">Login</Link>
                </a>
              </div>
            </form>
          </div>
        </div>
        </div>}

  
    </div>
  )
}