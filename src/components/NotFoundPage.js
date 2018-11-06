import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (props) => (
    <div>
        <p>Oops! We did not find that in our kitchen.</p> 
        <Link to="/"> Go home!</Link>
    </div>
)

export default NotFoundPage;