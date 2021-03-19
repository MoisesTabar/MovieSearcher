import React, { Fragment, useState } from 'react';
import Search from './Search';
import Card from './Card';

function Movies(){
    const [ results, SetResults ] = useState([]);
    const [ noResults, SetNoResults ] = useState(false);
    
    /**
    * sets the state of the result state
    * @param {*} results takes the result prop from the Search component
    */
    const getResults = (results) => {
        SetNoResults({noResults: true});
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

    const renderInfo = () => {
        return results.length === 0 ? <p>No results</p> : renderResults()
    }

    return(
        <Fragment>
            <div className="Search-wrapper">
                <Search onResults={getResults}/>
            </div>
            <div>
                { noResults ? renderInfo() : <p>Search your favorite movie</p>}
            </div>
        </Fragment>
    );
}

export default Movies;