const home = () => {
    return (

        <div>
            
            <div id="topbar" class="d-none d-lg-flex align-items-center fixed-top">
                <div class="container d-flex">
                    <div class="contact-info mr-auto">
                        <i class="icofont-envelope"></i> <a href="mailto:contact@example.com">personalhealthrecord@gmail.com</a>
                        <i class="icofont-phone"></i> +91 9662735361
                        <i class="icofont-google-map"></i> Parul University,Vadodara
                    </div>
                    <div class="social-links">
                        <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
                        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
                        <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
                        <a href="#" class="skype"><i class="icofont-skype"></i></a>
                        <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <h1 class="logo mr-auto"><a href="index.html">Personal Health Records </a></h1>
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    {/* <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

                    <nav class="nav-menu d-none d-lg-block">
                        <ul>
                            <li class="active"><a href="#">Home</a></li>
                            {/* <!-- <li><a href="#About">About</a></li>--> */}
                            <li><a href="#Features">Features</a></li>
                            <li><a href="#Reports">Reports</a></li>
                            <li><a href="#Hospital">Hospital</a></li>
                            <li><a href="#Medical Shop">Medical Shop</a></li>
                            <li><a href="#Blood Bank">Blood Bank</a></li>

                        </ul>
                    </nav>
                    {/* <!-- .nav-menu --> */}

                    {/* <!-- <a href="#appointment" class="appointment-btn scrollto">Make an Appointment</a> --> */}

                </div>
            </header>
            {/* <div id="preloader"></div>
            <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a> */}
            <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
            <section id="hero" class="d-flex align-items-center">
                <div class="container">
                    <h1>Welcome to PHR</h1>
                    <h2>Your Health Is Our Priority :)</h2>
                </div>
            </section>
            <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
            <main id="main">


                <section id="why-us" class="why-us">
                    <div class="container">

                        <div class="row">
                            <div class="col-lg-4 d-flex align-items-stretch">
                                <div class="content">
                                    <h3>Why Choose PHr?</h3>

                                    <p>1. Upload and store important documents and scanned images in your Document Library.</p>
                                    <p>2. Track your lab results over time.</p>
                                    <p>3.Easy to find nearest Hospital,Medical Shop,BloodBank to your current location.</p>
                                    <p>4.Easy to use and fast in processes.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <hr />
                <section class="text-gray-700 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="text-center mb-20" id="Features">
                            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Features</h1>
                            {/* <!-- <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> --> */}
                        </div>
                        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" id="Reports">
                            <div class="p-2 sm:w-1/2 w-full">
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Add Medical Reports</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/2 w-full">
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">View Medical Reports</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/2 w-full">
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Delete Medical Reports</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/2 w-full">
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Find Nearest Hospitals</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/2 w-full">
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Take Appointment</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/2 w-full">
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Find Nearest Medical Shops</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/2 w-full">
                                <div class="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Find Nearest Blood Banks</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> --> */}
                    </div>
                </section>
                <hr />



                <section id="Reports" class="services">
                    <div class="container">
                        <div class="section-title">
                            <h2>Reports</h2>
                            <p>You can Add ,View and Delete your Medical Reports from following functions. </p>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="icon-box">
                                    <div class="icon"><i class="icofont-heart-beat"></i></div>
                                    <h4><a href="{% url 'upload' %}">Add Reports</a></h4>
                                    <p>Add Your New Medical Reports </p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div class="icon-box">
                                    <div class="icon"><i class="icofont-drug"></i></div>
                                    <h4><a href="{% url 'viewAll' %}">View All Reports </a></h4>
                                    <p>View All Your Added Medical Reports </p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div class="icon-box">
                                    <div class="icon"><i class="icofont-dna-alt-2"></i></div>
                                    <h4><a href="">Delete  Reports</a></h4>
                                    <p> Delete Your Medical Reports</p>
                                </div>
                            </div>
                            <hr />

                            {/* <!-- ======= Hospital Section ======= --> */}


                            <section id="Hospital" class="services">
                                <div class="container">

                                    <div class="section-title">
                                        <h2>Hospital</h2>
                                        <h5>You can find nearest Hospital to your current location and also take appointment to that particular hospital by just doing one click.</h5>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                            <div class="icon-box">
                                                <div class="icon"><i class="icofont-heart-beat"></i></div>
                                                <h4><a href="{% url 'hospitals' %}">Search Nearest Hospital</a></h4>
                                                <p>You can find Nearest Hospital from your current location</p>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                            <div class="icon-box">
                                                <div class="icon"><i class="icofont-drug"></i></div>
                                                <h4><a href="">Take Appoinment </a></h4>
                                                <p>You Can Take Appoinment To Doctor </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                            <hr />

                            <section id="Medical Shop" class="services">
                                <div class="container">
                                    <div class="section-title">
                                        <h2>Medical Shop</h2>
                                        <p>
                                            You can find nearest Medical Shop From your current location.This function is very easy to use and simple.This feature is very useful when you move to a new place.
         </p>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-20 col-md-25 d-flex align-items-stretch">
                                            <div class="icon-box">
                                                <div class="icon"><i class="icofont-heart-beat"></i></div>
                                                <h4><a href="">Search Nearest Medical Shop</a></h4>
                                                <h6>You can find Nearest Medical Shop from your current location</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <hr />


                            <section id="Blood Bank" class="services">
                                <div class="container">
                                    <div class="section-title">
                                        <h2>Blood Bank</h2>
                                        <p>
                                            You can find nearest Blood Bank From your current location.This function is very easy to use and simple.This feature is very useful when you move to a new place and also in critical situations you can easily find nearest blood bank from your current location.
                                        </p>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-20 col-md-25 d-flex align-items-stretch">
                                            <div class="icon-box">
                                                <div class="icon"><i class="icofont-heart-beat"></i></div>
                                                <h4><a href="">Search Nearest Blood Bank</a></h4>
                                                <h6>You can find Nearest Blood Bank from your current location</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <hr />


                            <section id="testimonials" class="testimonials">
                                <div class="container">

                                    <div class="owl-carousel testimonials-carousel">

                                        <div class="testimonial-wrap">
                                            <div class="testimonial-item">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/330px-Mahatma-Gandhi%2C_studio%2C_1931.jpg" class="testimonial-img" alt="" />
                                                <h3>Mahatma Gandhi</h3>
                                                <h4>Leader</h4>
                                                <p>
                                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                        It is health that is real wealth and not pieces of gold and silver.
                                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                                </p>
                                            </div>
                                        </div>

                                        <div class="testimonial-wrap">
                                            <div class="testimonial-item">
                                                <img src="http://blogs.nature.com/news/files/2012/10/Specter3001.jpg" class="testimonial-img" alt="" />
                                                <h3>Arlen Specter</h3>
                                                <h4>US Senator</h4>
                                                <p>
                                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                    There's nothing more important than our good health - that's our principal capital asset.
                                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                                </p>
                                            </div>
                                        </div>

                                        <div class="testimonial-wrap">
                                            <div class="testimonial-item">
                                                <img src="https://www.onthisday.com/images/people/thomas-carlyle-medium.jpg" class="testimonial-img" alt="" />
                                                <h3>Thomas Carlyle</h3>
                                                <h4>Philosopher</h4>
                                                <p>
                                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                        He who has health, has hope; and he who has hope, has everything.
                                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                                </p>
                                            </div>
                                        </div>

                                        <div class="testimonial-wrap">
                                            <div class="testimonial-item">
                                                <img src="https://i.harperapps.com/authors/8670/x500.JPG" class="testimonial-img" alt="" />
                                                <h3>Anne Wilson Schaef</h3>
                                                <h4>psychologist</h4>
                                                <p>
                                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                        Good health is not something we can buy. However, it can be an extremely valuable savings account.
                                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                                </p>
                                            </div>
                                        </div>

                                        <div class="testimonial-wrap">
                                            <div class="testimonial-item">
                                                <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwOTEwMjE3NzQy/paul-walker-21044993-1-402.jpg" class="testimonial-img" alt="" />
                                                <h3>Paul Walker</h3>
                                                <h4>Actor</h4>
                                                <p>
                                                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                                        You know, all that really matters is that the people you love are happy and healthy. Everything else is just sprinkles on the sundae.
                                                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <hr />
                            <section id="Contact Us" class="services">
                                <div class="container">
                                    <div class="section-title">
                                        <h2>Contact Us</h2>
                                        <p>If You Face Any Issues Please Contact Us!</p>
                                    </div>
                                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                                        <div class="flex flex-wrap -m-2">
                                            <div class="p-2 w-1/2">
                                                <div class="relative">
                                                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                                    <input type="text" id="name" name="name" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            <div class="p-2 w-1/2">
                                                <div class="relative">
                                                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                                    <input type="email" id="email" name="email" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            <div class="p-2 w-full">
                                                <div class="relative">
                                                    <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                                    <textarea id="message" name="message" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                                </div>
                                            </div>
                                            <div class="p-2 w-full">
                                                <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                <hr />

            </main>
            <footer id="footer">

                <div class="container d-md-flex py-4">

                <div class="mr-md-auto text-center text-md-left">
                    <div class="copyright">
                    &copy; Copyright <strong><span>PHR</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                    </div>
                </div>
                <div class="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                </div>
                </div>
            </footer>
        </div>

    )
}

export default home