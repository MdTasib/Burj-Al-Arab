import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Book = () => {
    const { bedType } = useParams();
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Let's book a <b style={{ color: 'tomato' }}>{bedType} Room.</b></h1>
            <strong>Want a <Link to="/home"><b>Different room?</b></Link> </strong>
        </div>
    );
};

export default Book;