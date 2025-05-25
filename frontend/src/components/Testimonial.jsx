import React from 'react'

const Testimonial = () => {
  return (
 <>
  
  {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-3 text-white mb-4 animated slideInDown">Testimonial</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Testimonial</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}
    {/* <!-- Testimonial Start --> */}
    <div className="container-xxl py-5"/>
        <div className="container"/>
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                <p className="section-title bg-white text-center text-primary px-3">Testimonial</p>
                <h1 className="mb-5">What People Say About Our Dairy Farm</h1>
            </div>
            <div className="row g-5 align-items-center">
                <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="testimonial-img">
                        <img className="img-fluid animated pulse infinite" src="assets/img/testimonial-1.jpg" alt=""/>
                        <img className="img-fluid animated pulse infinite" src="assets/img/testimonial-2.jpg" alt=""/>
                        <img className="img-fluid animated pulse infinite" src="assets/img/testimonial-3.jpg" alt=""/>
                        <img className="img-fluid animated pulse infinite" src="assets/img/testimonial-4.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item">
                            <img className="img-fluid mb-3" src="assets/img/testimonial-1.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <h5>Client Name</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                        <div className="testimonial-item">
                            <img className="img-fluid mb-3" src="assets/img/testimonial-2.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <h5>Client Name</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                        <div className="testimonial-item">
                            <img className="img-fluid mb-3" src="assets/img/testimonial-3.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <h5>Client Name</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                        <div className="testimonial-item">
                            <img className="img-fluid mb-3" src="assets/img/testimonial-4.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <h5>Client Name</h5>
                            <span className="text-primary">Profession</span>
                        </div>
                    </div>
                </div>
            </div>
       
    
    {/* <!-- Testimonial End --> */}
  </>
  )
}

export default Testimonial