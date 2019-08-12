import React  from 'react';

const NotFound = () => {    //Created NotFound component and error message when seach not found with 404 No resusults
   return (

     <div className="photo-container">
        <h2>So sorry, something went wrong</h2>
        <ul>
           {/* Oh no, not found */}
           <li className="not-found">
           <h2>404</h2>
           <h3>No Results Found</h3>
              <p>You search did not return any results. Please try again.</p>
           </li>
        </ul>
     </div>
   );
}

                    
 export default NotFound;
                