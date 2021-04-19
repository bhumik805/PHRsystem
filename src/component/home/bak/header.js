import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { UserinfoContext } from '../../../providers/userprovider'

const Header = (props) => {

  const [user] = useContext(UserinfoContext)
  const Loginbtn = () => {
    const text = user.displayName ? user.displayName : "login"
    const link = () => {
      if (text === "login") {
          return "/login"
      } else {
          return "/profile"
        }
    }

    if (!props.show) {
      return (
        <Link to={link}>
          <span style={{
            display: "inline-block",
            width: "120px",
            fontSize: "20px",
            borderRadius: "3px",
            color: "white",
            textAlign: 'center'
          }}><button type="button" class="btn btn-outline-primary" style={{ width: "100%" }}>{text}</button></span></Link>)
    }
    else {
      return null
    }
      
    
  }



  return (
    <header id="header" className="fixed-top" style={{ padding: "18px 0px !important"  }}>
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto" style={{
            fontSize: "40px"
          }}><Link to="/" style={{fontSize:"30px"}}>PHR</Link></h1>
        <Loginbtn />
        </div>
      </header>
  )
}

//  {/* <!-- .nav-menu --> */}
//       {/* <!-- <a href="#appointment" className="appointment-btn scrollto">Make an Appointment</a> --> */}
//       {/* <!-- Uncomment below if you prefer to use an image logo -->
//         <!-- <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> --> */}

export default Header