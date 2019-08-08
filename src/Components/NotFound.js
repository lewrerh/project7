import React, { PureComponent } from 'react';

const NotFound = () => {
    return (
        
   //  <ul>
   //   <li className="not-found">
   //    <h2>404</h2>
   //      <p>So sorry, something went wrong</p>
   //   </li>
   //  </ul>
      <div class="photo-container">
         <h2>So sorry, something went wrong</h2>
         <ul>
            {/* Oh no, not found */}
            <li class="not-found">
            <h2>404</h2>
            <h3>No Results Found</h3>
               <p>You search did not return any results. Please try again.</p>
            </li>
         </ul>
      </div>
    );
    }
                    
 export default NotFound;
                