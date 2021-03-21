import dotenv from 'dotenv';
import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

dotenv.config();

function Description(props){
    const { id } = props;
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
        displayDescription({ id })
    });

    const { Title, Metascore, Actors, Poster, Plot } = desc;

    return(
        <div>
            <button onClick={backwardsButton}>Go back</button>
            <img src={ Poster } alt={Title}/>
            <h3>{ Title }</h3>
            <h3>{ Actors }</h3>
            <p>{ Plot }</p>
            <p>{ Metascore }</p>

            <p>Detail page</p>
        </div>
    );
}

Description.propTypes = {
    id: PropTypes.string
}

export default Description;