import React from 'react';
import PropTypes from 'prop-types'

function Card(props){
    const { poster, title, year } = props
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={poster} alt="Movie poster"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                </div>
            </div>
            <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{year}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string
}

export default Card;