import { Route,Switch } from 'react-router-dom'
import Viewreport from './viewreports'
import Topbar from '../../../home/topbar'
import Header from '../../../home/header'
import Onereports from '../onereports'

export default () => {
  return (
    <div>
      <div className="home">
        <Topbar />
        <Header />
      </div>
      
      <Switch>
        <Route path="/reports/1" component={Onereports} />
        <Route path="/reports" component={Viewreport} />
      </Switch>

    </div>
  )

}