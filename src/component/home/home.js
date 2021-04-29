

import "./tempcss/bootstrap/css/bootstrap.min.css" 
import "./tempcss/icofont/icofont.min.css" 
import "./tempcss/boxicons/css/boxicons.min.css" 
import "./tempcss/venobox/venobox.css" 
import "./tempcss/animate.css/animate.min.css" 
import "./tempcss/remixicon/remixicon.css" 
import "./tempcss/owl.carousel/assets/owl.carousel.min.css" 
import "./tempcss/datepicker/css/bootstrap-datepicker.min.css" 
import "./tempcss/style.css" 


import Topbar from './topbar'
import Mainbody from './mainbody'
import Contact from './contact'
import Footer from './footer'
import Header2 from './header2'


const home = (props) => {
  return (
    <div className="home">
      <Mainbody isAuthenticated={ props.isauth }/>
      <Contact />
    </div>

  )
}


export default home