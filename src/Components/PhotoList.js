import React from 'react';
import Photo from './Photo';

const PhotoList = (props) => {

    const results = props.data;
    //Generate a url mapping for all the photos in results
    let photo = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
        );
      
        //Return the photo list
    return (
        <div className="photo-container">
         <ul className="photo-list">
           {photo}
         </ul>
        </div>
    );
};

//PhotoList.propTypes = {
    
//};

export default PhotoList;
