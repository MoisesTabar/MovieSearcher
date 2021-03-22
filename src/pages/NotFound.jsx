import React from 'react';
import ToHome from '../components/ToHome';

function NotFound(){
    return(
        <article className="message is-danger">
            <div className="message-body">
                <h1 style={{color: 'red', fontSize: 30}}>404!</h1>
                 Sorry, this movie was not found.😞
                <ToHome />
            </div>
        </article>
    );
}

export default NotFound;