import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BookCard = ({ book }) => {
    return (
        <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src={book.image} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Author: {book.author}</Card.Text>
                <Card.Text>Price: ${book.price}</Card.Text>
                <Card.Text>{book.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Button variant="outline-secondary">View Details</Button>
                    <Button variant="outline-primary">Add to Cart</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default BookCard;
