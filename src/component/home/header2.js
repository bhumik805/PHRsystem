import { Navbar, Nav } from 'react-bootstrap'
import { Link,withRouter } from 'react-router-dom'
import { useContext } from 'react'
import { UserinfoContext } from '../../providers/userprovider'

const Header2 = (props) => {
  const activelink = (link) => {
    return link===props.match.url?"active":""
  }
  const [user] = useContext(UserinfoContext)
  return (
    <div id="header" className="fixed-top">
      <Navbar expand="lg" className="container" style={{ padding: "0px 1rem" }}>
        <Navbar.Brand className="logo"><Link to="/">PHR</Link></Navbar.Brand>
        {user.isAuthenticated ? <>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Link to="/reports" className="nav-link ">
              <span className={"headerlinks "+ activelink("/reports")}>Reports</span>
            </Link>
            <Link to="/profile" className="nav-link ">
              <span className={"headerlinks "+ activelink("/profile")}>Profile</span>
            </Link>
            <Link to="/logout" className="logoutbtn pl-lg-2">
              <button type="button" class="btn btn-outline-primary ">Logout</button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </> : <>
        <div className="ml-auto text-left">
          <Link to="/login" className="logoutbtn pl-lg-2">
            <button type="button" class="btn btn-outline-primary ">login</button>
          </Link>
          <Link to="/register" className="logoutbtn pl-lg-2">
            <button type="button" class="btn btn-outline-primary ">register</button>
          </Link>
        </div>
      </>}
      </Navbar></div>
  )
}

export default withRouter(Header2)