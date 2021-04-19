import {Route,Redirect} from 'react-router-dom'
import { UserinfoContext } from './providers/userprovider'
import { useContext} from 'react'



const PrivateRoute = ({ isauth, path,render}) => {
  if (isauth) {
    return <Route  path={path} render={render}  />
    
  } else if (path == "/") {
    return <Route path={path} render={render} />
  }
  else {
    return <Redirect to="/login"/>
  }
}

export default PrivateRoute