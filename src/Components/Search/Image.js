import React from 'react';

function Image(props) {
    // If image is unavailable use one that is generated by placeholder.com
    if (props.image === null)
    return (
        <div>
            <img className="imageResult" src="https://via.placeholder.com/500x281.jpg/313131/808080?text=TOO+BAD+SO+SAD+No-Images-Available" alt="Placeholder "></img>
        </div>
    )
    else {
    return (
        // return 500px backdrop image// didn't like the way the poster image looked (took too much vertical space)
        <div>
            <img className="imageResult" src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt={props.title}></img>
        </div>
    )
    }
}

export default Image;

