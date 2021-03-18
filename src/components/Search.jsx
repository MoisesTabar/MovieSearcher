import React, { useState } from 'react';
import axiosClient from '../config/axios.config';

function Search(props){

    const [input, SetInput] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        const request = await axiosClient.get(input);
        const response = await request.data;

        const { Search, TotalResults } = response;
        const { onResults } = props;

        console.log({Search, TotalResults});

        onResults(Search);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input className="input" onChange={ e => SetInput(e.target.value) }type="text" placeholder="Search your favorite movies"/>
                </div>
                <div className="control">
                    <button className="button is-info"> Search </button>
                </div>
            </div>
        </form>
    );
}

export default Search;