import React from 'react';
import Photo from './Photo';

const PhotoList = props => {

    const results = props.data;
    let photo = results.map(photo =>
        
        <Photo url={photo.images.fixed_height.url} key={photo.id} />
        );

    return (
        <ul className="photo-list">
           <Photo />
        </ul>
    );
};

//PhotoList.propTypes = {
    
//};

export default PhotoList;
