import { Link } from 'react-router-dom'
import { useState , useContext } from 'react'
import firebase from '../../firebase'
import Header2 from '../home/header2'
import Topbar from '../home/topbar'
import Footer from '../home/footer'
import { UserinfoContext } from '../../providers/userprovider'

export default (props) => {
  const [user, setUser] = useContext(UserinfoContext)
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [pass2, setPass2] = useState("")
  const [displayName, setDisplayName] = useState("")
  const onSub = (e) => {
    e.preventDefault()
    if (pass === pass2) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
          return firebase.auth().signInWithEmailAndPassword(email, pass)
        })
        .then(() => {
          return firebase.auth().currentUser.updateProfile({ displayName })
        })
        .then(() => {
          return setUser( prev=>({...prev,displayName:displayName}))
        })
        .then(() => {
          return firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set({ displayName })
        })
        .then(() => {
          return firebase.firestore().collection("accessdetails").doc(email).set({
            accessto: [],
            accesstouid: [],
            hasaccess: [],
            requests:[]
          })
        })
        .then(() => {
          return props.history.push("/")
        })
        .catch((err) => {
          console.log(err);
        })
        
    } else {
      alert("Password did not match!!! Please enter same password ")
    }

  }
  return (
    <div>
      <div className="home">
        <Topbar />
        <Header2/>
      </div>
      <div className="limiter registerform login">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
            <form className="login100-form validate-form" onSubmit={onSub}>
              <span className="login100-form-title p-b-33">
                Account Register
					</span>

              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>
              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" placeholder="Displayname" onChange={(e) => setDisplayName(e.target.value)} required />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="wrap-input100 rs1 validate-input">
                <input className="input100" type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} required />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="wrap-input100 rs1 validate-input">
                <input className="input100" type="password" placeholder="Confirm password" onChange={(e) => setPass2(e.target.value)} required />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="container-login100-form-btn m-t-20">
                <button className="login100-form-btn">
                  Register
						</button>
              </div>



              <div className="text-center" style={{marginTop:"8px"}}>
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
      </div>
      <div className="home"><Footer /></div>
    </div>
  )
}