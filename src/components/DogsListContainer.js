import React from "react";
import DogsList from "./DogsList.js";

/** Dogs List Container Component */
class DogsListContainer extends React.Component {
    state = { dogBreeds: [] }

    updateBreeds(breeds) {
        this.setState({ dogBreeds: breeds });
    }

    render() {
        // return DogsList instance
        return <DogsList dogBreeds={this.state.dogBreeds} />
    }

    componentDidMount() {
        // HTTP response in JSON format
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(http_response => http_response.json())
            .then(json_data => {
                this.displayFetchedData(json_data);
                const breeds = Object.keys(json_data.message);
                this.updateBreeds(breeds);
            })
            .catch(console.error);
    }

    displayFetchedData(fetched_data) {
        console.log('fetch data: ', fetched_data);
        if (fetched_data != null) {
            console.log('fetch status: ', fetched_data.status);
            if (fetched_data.status === 'success') {
                console.log('fetch message:\n', fetched_data.message);
            }
        }
    }
}

export default DogsListContainer;