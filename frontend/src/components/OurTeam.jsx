import React from 'react'

function OurTeam() {
    return (
  <>
   {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-3 text-white mb-4 animated slideInDown">Our Team</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Our Team</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Team Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"500px"}}>
                <p className="section-title bg-white text-center text-primary px-3">Our Team</p>
                <h1 className="mb-5">Experienced Team Members</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item rounded p-4">
                        <img className="img-fluid rounded mb-4" src="assets/img/team-1.jpg" alt=""/>
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
                        <img className="img-fluid rounded mb-4" src="assets/img/team-2.jpg" alt=""/>
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
                        <img className="img-fluid rounded mb-4" src="assets/img/team-3.jpg" alt=""/>
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

export default OurTeam