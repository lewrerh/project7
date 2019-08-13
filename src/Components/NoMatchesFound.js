import React from 'react';

// const NoMatchesFound = () => {   //Created NoMatchesFound with message for user if typing unsearchable fields
//     return (
//         // <div className="photo-container">
//         <div>
//             <h2>Sorry, there were no matches</h2>
//             {/* <ul>
//                 {/* <li className="not-found">
//                     <h2>404</h2>
//                     <h3>No Results Found</h3>
//                     <p>Your search did not return any results. Please try again.</p>
//                 </li>
//             </ul> */} */}
//         </div>
//     );
// }

// export default NoMatchesFound;

export default function NotFound({ history }) {
    return (
        <div>
            <h2>No Results Found</h2>
            <p>Sorry,.......</p>
        </div>
    )
}