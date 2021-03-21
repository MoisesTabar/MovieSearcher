import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

function Description(props){
    const displayDescription = async({ id }) => {
        
    }

    //we set a useEffect hook to set a functionality after the component is rendered
    useEffect(() => {
        const { id } = props;
        displayDescription(id);
    });

    return(
        <p>Detail page</p>
    );
}

Description.propTypes = {
    id: PropTypes.string
}

export default Description;