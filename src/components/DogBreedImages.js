import React from "react";
import { Link } from "react-router-dom";

function DogBreedImages(props) {
    const { breed, images } = props;
    return (
        <div className="dog-breed-images">
            <h1>Dogs Breed Images</h1>
            <p>These are the {breed} dog images.</p>
            <Link to="/">Go back to the index page.</Link>
            <div>
                {images && images.map(imageURL => <img src={imageURL} alt='Dog' />)}
                {!images && 'Loading images...'}
            </div>

        </div>
    );
}

export default DogBreedImages;