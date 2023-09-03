import React from 'react';
import { Link } from 'react-router-dom';

function BackComponent() {
    return (
        <>
            <Link to="/">
                <button className="btn btn-outline-dark" style={{marginLeft: '10px', borderRadius: '20px'}}>Cancel</button>
            </Link>
        </>
    )
}

export default BackComponent
