import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Book = () => {
    const { bedType } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Hello, {loggedInUser.name}! Let's book a <b style={{ color: 'tomato' }}>{bedType} Room.</b></h1>
            <strong>Want a <Link to="/home"><b>Different room?</b></Link> </strong>
        </div>
    );
};

export default Book;