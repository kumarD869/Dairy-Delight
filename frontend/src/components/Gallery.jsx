import React from 'react'

function Gallery() {
  return (<>
    {/* // <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-3 text-white mb-4 animated slideInDown">Gallery</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Gallery</li>
                </ol>
            </nav>
        </div>
    </div>
   
    {/* // <!-- Gallery Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                <p className="section-title bg-white text-center text-primary px-3">Gallery</p>
                <h1 className="mb-5">Explore Our Dairy Farm Gallery</h1>
            </div>
            <div className="row g-0">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-0">
                        <div className="col-12">
                            <a className="d-block" href="img/gallery-5.jpg" data-lightbox="gallery">
                                <img className="img-fluid" src="assets/img/gallery-5.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="col-12">
                            <a className="d-block" href="img/gallery-1.jpg" data-lightbox="gallery">
                                <img className="img-fluid" src="assets/img/gallery-1.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="row g-0">
                        <div className="col-12">
                            <a className="d-block" href="img/gallery-2.jpg" data-lightbox="gallery">
                                <img className="img-fluid" src="assets/img/gallery-2.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="col-12">
                            <a className="d-block" href="img/gallery-6.jpg" data-lightbox="gallery">
                                <img className="img-fluid" src="assets/img/gallery-6.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-0">
                        <div className="col-12">
                            <a className="d-block" href="img/gallery-7.jpg" data-lightbox="gallery">
                                <img className="img-fluid" src="assets/img/gallery-7.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="col-12">
                            <a className="d-block" href="img/gallery-3.jpg" data-lightbox="gallery">
                                <img className="img-fluid" src="assets/img/gallery-3.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="row g-0">
                        <div className="col-12">
                            <a className="d-block" href="img/gallery-4.jpg" data-lightbox="gallery">
                                <img className="img-fluid" src="assets/img/gallery-4.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="col-12">
                            <a className="d-block" href="img/gallery-8.jpg" data-lightbox="gallery">
                                <img className="img-fluid" src="assets/img/gallery-8.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // {/* <!-- Gallery End --> */}
    </>
  )
}

export default Gallery