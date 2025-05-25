import React from 'react'

function Services() {
  return (
    <div>

{/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center py-5">
            <h1 class="display-3 text-white mb-4 animated slideInDown">Services</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Services</li>
                </ol>
            </nav>
        </div>
    </div>
  
    {/* <!-- Service Start --> */ 
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                <p className="section-title bg-white text-center text-primary px-3">Our Services</p>
                <h1 className="mb-5">Services That We Offer For Entrepreneurs</h1>
            </div>
            <div className="row gy-5 gx-4">
                <div className="col-lg-4 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item d-flex h-100">
                        <div className="service-img">
                            <img className="img-fluid" src="/assets/img/service-1.jpg" alt=""/>
                        </div>
                        <div className="service-text p-5 pt-0">
                            <div className="service-icon">
                                <img className="img-fluid rounded-circle" src="/assets/img/service-1.jpg" alt=""/>
                            </div>
                            <h5 className="mb-3">Best Animal Selection</h5>
                            <p className="mb-4">We raise high-yielding cows and buffaloes known for quality milk. Our animals are well-fed, disease-free, and regularly monitored by experts.</p>
                            <a className="btn btn-square rounded-circle" href=""><i className="bi bi-chevron-double-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item d-flex h-100">
                        <div className="service-img">
                            <img className="img-fluid" src="/assets/img/service-2.jpg" alt=""/>
                        </div>
                        <div className="service-text p-5 pt-0">
                            <div className="service-icon">
                                <img className="img-fluid rounded-circle" src="/assets/img/service-2.jpg" alt=""/>
                            </div>
                            <h5 className="mb-3">Breeding & Veterinary</h5>
                            <p className="mb-4">Our veterinary team ensures healthy breeding, timely vaccinations, and medical care — ensuring happy, healthy animals year-round.</p>
                            <a className="btn btn-square rounded-circle" href=""><i className="bi bi-chevron-double-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item d-flex h-100">
                        <div className="service-img">
                            <img className="img-fluid" src="/assets/img/service-3.jpg" alt=""/>
                        </div>
                        <div className="service-text p-5 pt-0">
                            <div className="service-icon">
                                <img className="img-fluid rounded-circle" src="/assets/img/service-3.jpg" alt=""/>
                            </div>
                            <h5 className="mb-3">Care & Milking</h5>
                            <p className="mb-4">Our veterinary team ensures healthy breeding, timely vaccinations, and medical care — ensuring happy, healthy animals year-round.</p>
                            <a className="btn btn-square rounded-circle" href=""><i className="bi bi-chevron-double-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    /* <!-- Service End -->


    <!-- Features Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title bg-white text-start text-primary pe-3">Why Us!</p>
                    <h1 className="mb-4">Few Reasons Why People Choosing Us!</h1>
                    <p className="mb-4">At Dairy Delights, we combine traditional dairy practices with modern hygiene to deliver pure, nutritious milk every day</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Clean, chemical-free milk directly from farms</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Trusted by hundreds of local families</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Trusted by hundreds of local familiest</p>
                    {/* <a className="btn btn-secondary rounded-pill py-3 px-5 mt-3" href="">Explore More</a> */}
                </div>
                <div className="col-lg-6">
                    <div className="rounded overflow-hidden">
                        <div className="row g-0">
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="text-center bg-primary py-5 px-4">
                                    <img className="img-fluid mb-4" src="/assets/img/experience.png" alt=""/>
                                    <h1 className="display-6 text-white" data-toggle="counter-up">5</h1>
                                    <span className="fs-5 fw-semi-bold text-secondary">Years Experience</span>
                                </div>
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                <div className="text-center bg-secondary py-5 px-4">
                                    <img className="img-fluid mb-4" src="/assets/img/award.png" alt=""/>
                                    <h1 className="display-6" data-toggle="counter-up">50</h1>
                                    <span className="fs-5 fw-semi-bold text-primary">Award Winning</span>
                                </div>
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="text-center bg-secondary py-5 px-4">
                                    <img className="img-fluid mb-4" src="/assets/img/animal.png" alt=""/>
                                    <h1 className="display-6" data-toggle="counter-up">500</h1>
                                    <span className="fs-5 fw-semi-bold text-primary">Total Animals</span>
                                </div>
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                                <div className="text-center bg-primary py-5 px-4">
                                    <img className="img-fluid mb-4" src="/assets/img/client.png" alt=""/>
                                    <h1 className="display-6 text-white" data-toggle="counter-up">1000</h1>
                                    <span className="fs-5 fw-semi-bold text-secondary">Happy Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services