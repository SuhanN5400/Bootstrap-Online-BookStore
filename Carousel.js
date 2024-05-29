import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/81S7YQAl96L._SY466_.jpg"
                    alt="First slide"
                    style={{ height: '300px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Assassin's Code: A Joe Ledger Novel: 4 (Joe Ledger, 4)</h3>
                    <p>Best seller of the month.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/91dEy+olIsL._SY466_.jpg"
                    alt="Second slide"
                    style={{ height: '300px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Journey to Munich: A Maisie Dobbs Novel</h3>
                    <p>Top-rated book of the year.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/81b1PP4RK1L._SY466_.jpg"
                    alt="Third slide"
                    style={{ height: '300px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>hat Night: Four Friends, Twenty Years</h3>
                    <p>Highly recommended by readers.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;
