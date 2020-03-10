import React from "react";
import DogBreedImages from "./DogBreedImages.js";

/** Dog Breed Images Container Component */
class DogBreedImagesContainer extends React.Component {
    state = { images: null };

    updateImages(images) {
        this.setState({ images: images });
    }

    render() {
        const { breed } = this.props.match.params;
        return (<DogBreedImages breed={breed} images={this.state.images} />);
    }

    componentDidMount() {
        const breed = this.props.match.params.breed;
        fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
            .then(http_response => http_response.json())
            .then(data => this.updateImages(data.message))
            .catch(console.error);
    }
}

export default DogBreedImagesContainer;