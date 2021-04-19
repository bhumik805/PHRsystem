
import Contactform from './form'
export default () => {
  

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Feedback</h2>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info" style={{ textAlign: "left" }}>
              

              <div className="email">

                <h4>Email:</h4>
                <p><a>bhumiksanchaniya@gmail.com</a></p>
              </div>

              <div className="phone">

                <h4>Call:</h4>
                <p><a href="tel:+919662557775">+91 9662557775</a></p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

              <Contactform/>
          </div>

        </div>

      </div>
    </section>
  )
}

