import React from 'react';

const NoMatchesFound = () => {
    return (
        <div className="photo-container">
            <h2>Sorry there were no matches</h2>
            <ul>
                <li className="not-found">
                    <h2>404</h2>
                    <h3>No Results Found</h3>
                    <p>Your search did not return any results. Please try again.</p>
                </li>
            </ul>
        </div>
    );
}

export default NoMatchesFound;