import React from 'react';
//import PhotoList from 'PhotoList';

const PhotoList = props => {
    return (
        <li>
            <img src={props.url} alt="" />
        </li>
    );
};

PhotoList.propTypes = {
    
};

export default PhotoList;
