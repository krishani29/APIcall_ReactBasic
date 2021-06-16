import React from 'react';

function movie(props) {
    return (
        <div>
         <ul>
             <li>{props.name}</li>
             <li>{props.price}</li><hr/>
         </ul>
            
        </div>
    );
}

export default movie;