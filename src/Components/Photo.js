 import React  from 'react';

const Photo = props => (
    <li className="container">
        <img src={props.url} alt="flicker img not found"/>
    </li>
);
export default Photo;
