import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start mt-5">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Bookstore</h5>
                        <p>Find your next great BOOKS with us.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#" className="text-dark">Privacy Policy</a></li>
                            <li><a href="#" className="text-dark">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Follow Us</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#" className="text-dark">Facebook</a></li>
                            <li><a href="#" className="text-dark">Twitter</a></li>
                            <li><a href="#" className="text-dark">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3">
                &copy; 2024 Bookstore
            </div>
        </footer>
    );
};

export default Footer;
