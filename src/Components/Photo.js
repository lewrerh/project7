 import React  from 'react';
// import PhotoItem from './PhotoItem';

//import React, { Component } from 'react';

const Photo = props => (
    <li className="container">
        <img src={props.url} alt=""/>
    </li>
);
export default Photo;
