import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <>
            {/* <div className="container-fluid bg-dark px-0">
            <div className="row g-0 d-none d-lg-flex">
                <div className="col-lg-6 ps-5 text-start">
                    <div className="h-100 d-inline-flex align-items-center text-light">
                        <span>Follow Us:</span>
                        <a className="btn btn-link text-light" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-link text-light" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-link text-light" href=""><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-link text-light" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="col-lg-6 text-end">
                    <div className="h-100 bg-secondary d-inline-flex align-items-center text-dark py-2 px-4">
                        <span className="me-2 fw-semi-bold"><i className="fa fa-phone-alt me-2"></i>Call Us:</span>
                        <span>+012 345 6789</span>
                    </div>
                </div>
            </div>
        </div> */}
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
                <a href="index.html" className="navbar-brand d-flex align-items-center">
                    <h1 className="m-0">Dairy Delights </h1>
                </a>
                <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to={'/'}>
                            <a href="" className="nav-item nav-link active">Home</a>
                        </Link>
                        <Link to={'/about'}>
                            <a href="" className="nav-item nav-link">About</a>
                        </Link>
                        <Link to={'/ser'}> <a href="" className="nav-item nav-link">Services</a></Link>
                        <Link to={'/Product'}>
                            <a href="" className="nav-item nav-link">Product</a>
                        </Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu bg-light m-0">
                                <Link to={'/gall'}>
                                    <a href="gallery.html" className="dropdown-item">Gallery</a>
                                </Link>
                                <Link to={'/feature'}>
                                    <a href="feature.html" className="dropdown-item">Features</a>
                                </Link>
                                <Link to={'/team'}>
                                    <a href="team.html" className="dropdown-item">OurTeam</a>
                                </Link>
                                <Link to={'/tes'}>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                </Link>
                                <Link to={'/404'}>
                                    {/* <a href="404.html" className="dropdown-item">404 Page</a> */}
                                </Link>
                            </div>
                        </div>
                        <Link to={'/contact'}>
                            <a className="nav-item nav-link">Contact</a>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/log'}>
                            {/* <a className="nav-item nav-link, style=">LogIn</a> */}
                            <a className="nav-item nav-link" style={{ color: 'black', fontWeight: 'bold' }}>LogIn</a>

                        </Link>
                    </div>
                    {/* <div>
                        <Link to={'/sign'}>
                            <a className="nav-item nav-link" style={{ color: 'black', fontWeight: 'bold' }}>SignUp</a>
                        </Link>
                        {/* <Link to="/sign" className="nav-item nav-link" style={{ color: 'black', fontWeight: 'bold' }}>Signup</Link> */}
                    {/* </div> */}
                    <div className="border-start ps-4 d-none d-lg-block">
                        <button type="button" className="btn btn-sm p-0"><i className="fa fa-search"></i></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav