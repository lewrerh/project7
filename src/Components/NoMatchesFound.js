import React from 'react';

const NoMatchesFound = props => {   //Created NoMatchesFound with message for user if typing unsearchable fields
    return (
        <div>
            <h1>404</h1>
            <h2>No Results Found</h2>
            <p>Sorry, try again</p>
        </div>
    );
}

export default NoMatchesFound;