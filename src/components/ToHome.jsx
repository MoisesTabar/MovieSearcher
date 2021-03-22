import React from 'react';
import { Link } from 'react-router-dom';

function ToHome(){
    return(
        <Link to='/'>
            <div className='Back-Button'>
                <button className="button is-danger">Go back to home page</button>
            </div>
        </Link>
    )
}

export default ToHome;