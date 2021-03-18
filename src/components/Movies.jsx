import React, { Fragment, useState } from 'react';
import Search from './Search';

function Movies(){
    const [ results, SetResults ] = useState([]);

    const getResults = (results) => {
        SetResults(results);
    }
  
    const renderResults = () => {
        return results.map(movie => {
            return(
                <p key={movie.imdbID}>{movie.Title}</p>
            );
        });
    }

    return(
        <Fragment>
            <div className="Search-wrapper">
                <Search onResults={getResults}/>
            </div>
            <div>
                { results.length === 0 ? <p>No results</p> : renderResults() }
            </div>
        </Fragment>
    );
}

export default Movies;