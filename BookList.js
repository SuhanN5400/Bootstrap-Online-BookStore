import React from 'react';
import BookCard from './BookCard';

const books = [
    {
        image: 'https://m.media-amazon.com/images/I/715jjfXVBlL._SY466_.jpg' ,
        title: 'Black Forest: A Horror Novel',
        author: 'Shane Lee',
        price: 450,
        description: 'Black Forest: A Horror Novel" is a chilling tale of a group of friends who uncover ancient, malevolent secrets hidden within a dark and mysterious forest.',
    },
    {
        image: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-10/5/15/asset/buzzfeed-prod-web-05/sub-buzz-13709-1538769599-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto' ,
        title: ' Pet Sematary by Stephen King',
        author: 'Stephen King',
        price: 850,
        description: 'Pet Sematary by Stephen King is a haunting story about a familys discovery of a burial ground with the power to bring the dead back to life, with terrifying consequences',
    },
];

const BookList = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                {books.map((book, index) => (
                    <div className="col-md-4" key={index}>
                        <BookCard book={book} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
