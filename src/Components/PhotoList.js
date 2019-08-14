import React from 'react';
import Photo from './Photo';
import NoMatchesFound from'./NoMatchesFound';

const PhotoList = props => {

    const results = props.data;
    // Generate a url mapping for all the photos in results
    let photos; 
      if (results.length > 0 ) {
        photos = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />);
        
      } else {
        photos = <NoMatchesFound />
      }
    
      

    // Return the photo list
    return (
        <div className="photo-container">
           <h2>{props.match.params.query}</h2>
            <ul>
                {photos}
            </ul>
        </div>
    );
}

export default PhotoList;

