import React, { useState } from 'react';
import NavbarComponent from './components/Navbar';
import CarouselComponent from './components/Carousel';
import BookList from './components/BookList';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div>
            <NavbarComponent />
            <CarouselComponent />
            <BookList />
            <Footer />
            <ContactModal show={showModal} handleClose={handleClose} />
            <button className="btn btn-primary" onClick={handleShow}>
                Contact Us
            </button>
        </div>
    );
};

export default App;
