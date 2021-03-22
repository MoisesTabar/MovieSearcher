import dotenv from 'dotenv';
import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

dotenv.config();

function Description(props){
    const { id } = props.match.params;
    const [ desc, SetDesc ] = useState({});

    const displayDescription = async({ id }) => {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`;

        const request = await axios.get(url);
        const response = await request.data;

        SetDesc({ ...desc, ...response });
    }

    const backwardsButton = () => {
        window.history.back();
    }

    useEffect(() => {
        displayDescription({ id });
        return () => {
            SetDesc({});
        }
    }, []);

    const { Title, Metascore, Actors, Poster, Plot } = desc;

    return(
        <div>
            <button className="button is-info" onClick={backwardsButton}>Go back</button>
            <h2> <strong>Title: </strong> { Title }</h2>
            <img src={ Poster } alt={Title}/>
            <h3> <strong>Actors: </strong> { Actors }</h3>
            <p> <strong> Plot:  </strong> { Plot }</p>
            <p> <strong> Score: </strong> { Metascore }</p>
        </div>
    );
}

Description.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.object,
        isExact: PropTypes.bool,
        path: PropTypes.string,
        url: PropTypes.string
    })
}

export default Description;