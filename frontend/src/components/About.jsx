import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
            {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" role="status" style={{width: '3rem', height: '3rem'}}></div>
        </div> */}
        {/* <!-- Spinner End --> */}


      


        {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center py-5">
                <h1 className="display-3 text-white mb-4 animated slideInDown">About Us</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </div>
        {/* <!-- Page Header End --> */}


        {/* <!-- About Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="row g-2">
                            <div className="col-6 position-relative wow fadeIn" data-wow-delay="0.7s">
                                <div className="about-experience bg-secondary rounded">
                                    <h1 className="display-1 mb-0">5</h1>
                                    <small className="fs-5 fw-bold">Years Experience</small>
                                </div>
                            </div>
                            <div className="col-6 wow fadeIn" data-wow-delay="0.1s">
                                <img className="img-fluid rounded" src="/assets/img/service-1.jpg"/>
                            </div>
                            <div className="col-6 wow fadeIn" data-wow-delay="0.3s">
                                <img className="img-fluid rounded" src="/assets/img/service-2.jpg"/>
                            </div>
                            <div className="col-6 wow fadeIn" data-wow-delay="0.5s">
                                <img className="img-fluid rounded" src="/assets/img/service-3.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <p className="section-title bg-white text-start text-primary pe-3">About Us</p>
                        <h2 className="mb-4">Know About Our Dairy Farm & Our History</h2>
                        <p className="mb-4">Our dairy farm has been delivering fresh, pure milk to local communities for over 5 years. We believe in maintaining traditional values while adopting modern hygienic methods to ensure the best quality. From grazing cows and buffaloes in open green pastures to hand-checking each milk batch for purity, our process is transparent and trusted. We take pride in offering farm-fresh cow, buffalo, and goat milk — chemical-free, antibiotic-free, and packed with nutrition</p>
                        <div className="row g-5 pt-2 mb-5">
                            <div className="col-sm-6">
                                <img className="img-fluid mb-4" src="/assets/img/service.png" alt=""/>
                                <h5 className="mb-3">Dedicated Services</h5>
                                <span>We ensure daily doorstep delivery of fresh milk through our trained delivery team. Reliable, hygienic, and always on time — our service is trusted by hundreds of families</span>
                            </div>
                            <div className="col-sm-6">
                                <img className="img-fluid mb-4" src="/assets/img/product.png" alt=""/>
                                <h5 className="mb-3">Organic Products</h5>
                                <span>Our milk and dairy products come from naturally fed animals, free from chemicals and preservatives. We deliver pure, farm-fresh nutrition to your home.</span>
                            </div>
                        </div>
                        {/* <a className="btn btn-secondary rounded-pill py-3 px-5" href="">Explore More</a> */}
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}


        {/* <!-- Banner Start --> */}
        <div className="container-fluid banner my-5 py-5" data-parallax="scroll" data-image-src="/assets/img/banner.jpg">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                        <div className="row g-4 align-items-center">
                            <div className="col-sm-4">
                                <img className="img-fluid rounded" src="/assets/img/banner-1.jpg" alt=""/>
                            </div>
                            <div className="col-sm-8">
                                <h2 className="text-black mb-3">We Sell Best Dairy Products</h2>
                                <p className="text-black mb-4">We offer farm-fresh cow, buffalo, and goat milk along with paneer, ghee, and curd — all produced using clean and natural practices</p>
                                {/* <a className="btn btn-secondary rounded-pill py-2 px-4" href="">Read More</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="row g-4 align-items-center">
                            <div className="col-sm-4">
                                <img className="img-fluid rounded" src="/assets/img/banner-2.jpg" alt=""/>
                            </div>
                            <div className="col-sm-8">
                                <h2 className="text-black mb-3">We Deliver Fresh Mild Worldwide</h2>
                                <p className="text-black mb-4">Our hygienically processed milk is delivered fresh daily to homes, hotels, and businesses — trusted by families across regions</p>
                                {/* <a className="btn btn-secondary rounded-pill py-2 px-4" href="">Read More</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Banner End --> */}


        {/* <!-- Team Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                    <p className="section-title bg-white text-center text-primary px-3">Our Team</p>
                    <h1 className="mb-5">Experienced Team Members</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item rounded p-4">
                            <img className="img-fluid rounded mb-4" src="/assets/img/team-1.jpg" alt=""/>
                            <h5>Adam Crew</h5>
                            <p className="text-primary">Founder</p>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item rounded p-4">
                            <img className="img-fluid rounded mb-4" src="/assets/img/team-2.jpg" alt=""/>
                            <h5>Doris Jordan</h5>
                            <p className="text-primary">Veterinarian</p>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item rounded p-4">
                            <img className="img-fluid rounded mb-4" src="/assets/img/team-3.jpg" alt=""/>
                            <h5>Jack Dawson</h5>
                            <p className="text-primary">Farmer</p>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}


    </>
  )
}

export default About