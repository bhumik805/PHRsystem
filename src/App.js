import './App.css';

import Home from './component/home/home'

import {Login} from './component/loginregister/login'
import Register from './component/loginregister/register'
import Profile2 from './component/user/profile/Profile2'
import ManageReport from './component/user/reports/ManageReport'
import PrivateRoute from './privateroute'
import Preloader from './component/Preloader'
import Logout from './component/loginregister/Logout'

import {useContext} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { UserinfoContext } from './providers/userprovider'

function App() {

  const [user,setUser] = useContext(UserinfoContext)
  return (
    <BrowserRouter>
      <div className="App">
        {user.loading ? <Preloader text="Loading ..."/> : <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute isauth={user.isAuthenticated} path="/profile" render={() => <Profile2 uid={user.uid} />} />
          <PrivateRoute isauth={user.isAuthenticated} path="/reports" render={() => <ManageReport uid={user.uid} email={ user.email }/>} />
          <PrivateRoute isauth={user.isAuthenticated} path="/logout" render={()=><Logout/>} />
          <PrivateRoute isauth={user.isAuthenticated} path="/" render={() => <Home isauth={user.isAuthenticated}/>} />
        </Switch>
        }
      </div>
    </BrowserRouter>
  )
}

export default App;
