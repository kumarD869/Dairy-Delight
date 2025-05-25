import React from "react"
import { Link } from "react-router-dom"
export default function Home(){
    return(
        <>
            {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" role="status" style={{width: '3rem', height: '3rem'}}></div>
            </div> */}
            {/* <!-- Spinner End --> */}


            {/* <!-- Carousel Start --> */}
            <div className="container-fluid px-0 mb-5">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="/assets/img/carousel-1.jpg" alt="Image"/>
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-8 text-start">
                                            <p className="fs-4 text-white">Welcome to our dairy farm</p>
                                            <h1 className="display-1 text-white mb-5 animated slideInRight">The Farm of Dairy products</h1>
                                            {/* <a href="" className="btn btn-secondary rounded-pill py-3 px-5 animated slideInRight">Explore More</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="/assets/img/carousel-2.jpg" alt="Image"/>
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-end">
                                        <div className="col-lg-8 text-end">
                                            <p className="fs-4 text-white">Welcome to our dairy farm</p>
                                            <h1 className="display-1 text-white mb-5 animated slideInRight">Best Organic Dairy Products</h1>
                                            <a href="" className="btn btn-secondary rounded-pill py-3 px-5 animated slideInLeft">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}


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
                            <p className="mb-4">Our dairy farm has been delivering fresh, pure milk to local communities for over 5 years. We believe in maintaining traditional values while adopting modern hygienic methods to ensure the best quality. From grazing cows and buffaloes in open green pastures to hand-checking each milk batch for purity, our process is transparent and trusted. We take pride in offering farm-fresh cow, buffalo, and goat milk — chemical-free, antibiotic-free, and packed with nutrition</p>
                            <div className="row g-5 pt-2 mb-5">
                                <div className="col-sm-6">
                                    <img className="img-fluid mb-4" src="/assets/img/service.png" alt=""/>
                                    <h5 className="mb-3">Dedicated Services</h5>
                                    <span>We ensure daily doorstep delivery of fresh milk through our trained delivery team. Reliable, hygienic, and always on time — our service is trusted by hundreds of families</span>
                                </div>
                                <div className="col-sm-6">
                                    <img className="img-fluid mb-4" src="/assets/img/product.png" alt="/"/>
                                    <h5 className="mb-3">Organic Products</h5>
                                    <span>Our milk and dairy products come from naturally fed animals, free from chemicals and preservatives. We deliver pure, farm-fresh nutrition to your home.</span>
                                </div>
                            </div>
                            {/* <a className="btn btn-secondary rounded-pill py-3 px-5" href="">Explore More</a> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Features Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="section-title bg-white text-start text-primary pe-3">Why Us!</p>
                            <h1 className="mb-4">Few Reasons Why People Choosing Us!</h1>
                            <p className="mb-4">At Dairy Delights, we combine traditional dairy practices with modern hygiene to deliver pure, nutritious milk every day</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Clean, chemical-free milk directly from farms</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Trusted by hundreds of local families</p>
                            <p><i className="fa fa-check text-primary me-3"></i>Trusted by hundreds of local families</p>
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
            {/* <!-- Features End --> */}


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
                                    <p className="text-black mb-4">We offer farm-fresh cow, buffalo, and goat milk along with paneer, ghee, and curd — all produced using clean and natural practices</p>
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
                                    <h2 className="text-black mb-3">We Deliver Fresh Mild </h2>
                                    <p className="text-black mb-4">Our hygienically processed milk is delivered fresh daily to homes, hotels, and businesses — trusted by families across regions</p>
                                    {/* <a className="btn btn-secondary rounded-pill py-2 px-4" href="">Read More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner End --> */}


            {/* <!-- Service Start --> */}
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
                                    <p className="mb-4">We raise high-yielding cows and buffaloes known for quality milk. Our animals are well-fed, disease-free, and regularly monitored by experts.</p>
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
                                    <p className="mb-4">Our veterinary team ensures healthy breeding, timely vaccinations, and medical care — ensuring happy, healthy animals year-round.</p>
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
                                    <p className="mb-4">We follow hygienic, gentle milking methods and proper animal care to maintain milk purity and animal comfort.</p>
                                    <a className="btn btn-square rounded-circle" href=""><i className="bi bi-chevron-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


            {/* <!-- Gallery Start --> */}
            <div className="container-xxl py-5 px-0">
                <div className="row g-0">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="row g-0">
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-5.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="/assets/img/gallery-5.jpg" alt=""/>
                                </a>
                            </div>
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-1.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="/assets/img/gallery-1.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="row g-0">
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-2.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="/assets/img/gallery-2.jpg" alt=""/>
                                </a>
                            </div>
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-6.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="/assets/img/gallery-6.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="row g-0">
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-7.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="/assets/img/gallery-7.jpg" alt=""/>
                                </a>
                            </div>
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-3.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="/assets/img/gallery-3.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="row g-0">
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-4.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="/assets/img/gallery-4.jpg" alt=""/>
                                </a>
                            </div>
                            <div className="col-12">
                                <a className="d-block" href="img/gallery-8.jpg" data-lightbox="gallery">
                                    <img className="img-fluid" src="/assets/img/gallery-8.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Gallery End --> */}


            {/* <!-- Product Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                        <p className="section-title bg-white text-center text-primary px-3">Our Products</p>
                        <h1 className="mb-5">Our Dairy Products For Healthy Living</h1>
                    </div>
                    <div className="row gx-4">
                        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="product-item">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/assets/img/product-1.jpg" alt=""style={{ height: "300px", width: "100%", objectFit: "" }}/>
                                    <div className="product-overlay">
                                        <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-link"></i></a>
                                        <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-cart"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5" href="">Cow Milk</a>
                                    <span className="text-primary me-1">50₹/1kg</span>
                                    <span className="text-decoration-line-through">60₹/1kg</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="product-item">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/assets/img/goat.png" alt=""style={{ height: "300px", width: "100%", objectFit: "" }}/>
                                    <div className="product-overlay">
                                        <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-link"></i></a>
                                        <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-cart"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5" href="">Goat Milk</a>
                                    <span className="text-primary me-1">300₹/1kg</span>
                                    <span className="text-decoration-line-through">400₹/1kg</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="product-item">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/assets/img/product-3.jpg" alt=""style={{ height: "300px", width: "110%", objectFit: "" }}/>
                                    <div className="product-overlay">
                                        <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-link"></i></a>
                                        <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-cart"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5" href="">Dairy Products</a>
                                    {/* <span className="text-primary me-1"><h5>comming soon</h5></span>
                                    <span className="text-decoration-line-through"></span> */}
                                    <h4>coming soon</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="product-item">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/assets/img/buffelo.png" alt=""style={{ height: "300px", width: "110%", objectFit: "" }}/>
                                    <div className="product-overlay">
                                        <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-link"></i></a>
                                        <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-cart"></i></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <a className="d-block h5" href="">Buffalo Milk</a>
                                    <span className="text-primary me-1">60₹/1kg</span>
                                    <span className="text-decoration-line-through">70₹/1kg</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Product End --> */}


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


            {/* <!-- Testimonial Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                        <p className="section-title bg-white text-center text-primary px-3">Testimonial</p>
                        <h1 className="mb-5">What People Say About Our Dairy Farm</h1>
                        <p>We follow hygienic, gentle milking methods and proper animal care to maintain milk purity and animal comfort</p>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="testimonial-img">
                                <img className="img-fluid animated pulse infinite" src="/assets/img/testimonial-1.jpg" alt=""/>
                                <img className="img-fluid animated pulse infinite" src="/assets/img/testimonial-2.jpg" alt=""/>
                                <img className="img-fluid animated pulse infinite" src="/assets/img/testimonial-3.jpg" alt=""/>
                                <img className="img-fluid animated pulse infinite" src="/assets/img/testimonial-4.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="testimonial-item">
                                    <img className="img-fluid mb-3" src="/assets/img/testimonial-1.jpg" alt=""/>
                                    <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <h5>Client Name</h5>
                                    <span className="text-primary">Profession</span>
                                </div>
                                <div className="testimonial-item">
                                    <img className="img-fluid mb-3" src="/assets/img/testimonial-2.jpg" alt=""/>
                                    <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <h5>Client Name</h5>
                                    <span className="text-primary">Profession</span>
                                </div>
                                <div className="testimonial-item">
                                    <img className="img-fluid mb-3" src="/assets/img/testimonial-3.jpg" alt=""/>
                                    <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <h5>Client Name</h5>
                                    <span className="text-primary">Profession</span>
                                </div>
                                <div className="testimonial-item">
                                    <img className="img-fluid mb-3" src="/assets/img/testimonial-4.jpg" alt=""/>
                                    <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                                    <h5>Client Name</h5>
                                    <span className="text-primary">Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}


    </>
    )
}