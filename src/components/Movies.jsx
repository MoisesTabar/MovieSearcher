import React, { Fragment, useState } from 'react';
import Search from './Search';
import Card from './Card';
import Description from '../pages/Description';

function Movies(){
    const [ results, SetResults ] = useState([]);
    const [ noResults, SetNoResults ] = useState(false);

    //verify the existant url to redirect to the detail page
    const url = new URL(document.location);
    const hasId = url.searchParams.has('id')
    
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
                            <Card id={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster}/>
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

    //if the id of the poster is available return the description page
    if(hasId){
        return(
            <Description id={url.searchParams.get('id')}/>
        );
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