import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default (props) => {
  const [link,setLink] = useState("/register")
  useEffect(() => {
    setLink(() => {
      return props.isAuthenticated?"/reports":"/register"
    })
  },[[props.isAuthenticated]])
  return (
    <main>
      <section id="hero" className="d-flex align-items-center text-left">
        {/* <img src={bgimg} alt="" style={ bgimgstyle }/> */}
        <div className="container">
          <h1>Welcome to Personal Health Record</h1>
          <h2>Your health is our priority</h2>
          <Link to={link} className="btn-get-started scrollto">Get Started</Link>
        </div>
      </section>
      {/* Why us */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center align-items-stretch">
              <div className="content">
                <h3>Why Choose PHR?</h3>
                <p style={{ fontSize: "14px" }}>
                  1. Upload and store important documents and scanned images in your Document Library.
                <br />
                2. Track your lab results over time.
                {/* <br /> */}
                {/* 3. Easy to find nearest Hospital,Medical Shop,BloodBank to your current location. */}
                <br />
                3. Easy to use and fast in processes.
              </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End why us section */}

      {/* About us section */}
      <section id="about" className="about">
        <div className="container-fluid">

          <div className="row">
            <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch">
              <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
            </div>

            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h3>What is PHR?</h3>
              <p>PHR(Private Health Record) is a project that helps you keep track of your health records and medical history by storing them easily and on remote cloud server.</p>

              <div className="icon-box">
                <div className="icon"><i className="icofont-tools"></i></div>
                <h4 className="title"><a href="">Front-end technologies</a></h4>
                <p className="description">I have used HTML,CSS,Javascript(ES6) <br />
                  CSS framworks - Bootstrap,Material-UI components <br />
                  Javascript library - React
                </p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="icofont-tools"></i></div>
                <h4 className="title"><a href="">Back-end technologies</a></h4>
                <p className="description">For backend firebase services are used
                <br />1. For authentication and autherization firebase auth and rules are used so your data is much secured by google it self.
                <br/>2. For storage fibase-firestore is used and rules are implemented in such a way no one else can access your data  
                <br />3. This website is hosted by <a href="https://www.netlify.com/" target="_blank">Netlify.com </a>
                </p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="icofont-tools"></i></div>
                <h4 className="title"><a href="">Developer</a></h4>
                <p className="description">Developed solely by <a href="https://www.linkedin.com/in/bhumik-s-44972516b/" target="_blank"> Bhumik Sanchaniya.</a></p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="icofont-tools"></i></div>
                <h4 className="title"><a href="">Special thanks and credits</a></h4>
                <p className="description">Thanks to <a href="https://www.linkedin.com/in/rushi-bhadeshiya-648b861b6/" target="_blank">Rushi Bhadeshiya</a> for bringing up this amazing idea and giving me permission to work up on it.
                <br />
                  
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
      {/* End about us section */}

      {/* Counter section */}
      {/* <section id="counts" class="counts">
        <div class="container">
          <div class="row">

            <div class="col-lg-6 col-md-6">
              <div class="count-box">
                <i class="icofont-doctor-alt"></i>
                <span data-toggle="counter-up">85</span>
                <p>Reports</p>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 ">
              <div class="count-box">
                <i class="icofont-laboratory"></i>
                <span data-toggle="counter-up">8</span>
                <p>Users</p>
              </div>
            </div>

          </div>
        </div>
      </section> */}
      {/* End counter section */}

      {/* Features section */}
      <section id="Features" class="services">
        <div class="container">

          <div class="section-title">
            <h2>Features</h2>
            <p>Listed some of the features this website provides. <br/> <small>Note: Some of the features are not implemented yet but they might be implemented based on the growth.</small></p>
          </div>

          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="icon-box">
                <div class="icon"><i class="icofont-heart-beat"></i></div>
                <h4><a href="">Reports</a></h4>
                <p>You can add reports, delete reports. You can allow other people to see your report. You can also request access to other people's reports</p>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 d-flex align-items-stretch">
              <div class="icon-box">
                <div class="icon"><i class="icofont-drug"></i></div>
                <h4><a href="">Hospitals</a></h4>
                <p>It directly lists nearby Hospitals using google maps api. <br/><small>This feature is implemented yet.</small></p>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* End features section */}

      {/* FAQ section */}
      {/* <section id="faq" class="faq section-bg">
        <div class="container">

          <div class="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div class="faq-list">
            <ul>
              <li data-aos="fade-up">
                <a data-toggle="collapse" class="collapse" href="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-1" class="collapse show" data-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="100">
                <a data-toggle="collapse" href="#faq-list-2" class="collapsed">Feugiat scelerisque varius morbi enim nunc? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-2" class="collapse" data-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="200">
                <a data-toggle="collapse" href="#faq-list-3" class="collapsed">Dolor sit amet consectetur adipiscing elit? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-3" class="collapse" data-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="300">
                <a data-toggle="collapse" href="#faq-list-4" class="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-4" class="collapse" data-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <a data-toggle="collapse" href="#faq-list-5" class="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-5" class="collapse" data-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                </p>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </section> */}
      {/* End FAQ section */}

      {/* Contact section */}

      {/* End contact section */}

    </main>
  )
}