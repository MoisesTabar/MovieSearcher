import React, { Fragment, useState } from 'react';
import Search from './Search';
import Card from './Card';

function Movies(){
    const [ results, SetResults ] = useState([]);
    
    /**
    * sets the state of the result state
    * @param {*} results takes the result prop from the Search component
    */
    const getResults = (results) => {
        SetResults(results);
    }
    
    /**
    * displays the results of the api compsumption
    * @returns JSX Card component containing the movie title, year and poster
    */
    const renderResults = () => {
        return (
            <div className="Movies-list">
            {
                results.map(movie => {
                    return(
                        <div className="Movies-item" key={movie.imdbID}>
                            <Card title={movie.Title} year={movie.Year} poster={movie.Poster}/>
                        </div>
                    );
                })
            }
            </div>
        );
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