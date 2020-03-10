import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/** Dogs List Presentational Component */
class DogsList extends React.Component {
    static propTypes = { dogBreeds: PropTypes.array.isRequired }

    renderDogBreed(breed) {
        return (
            <li key={breed}>
                <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
            </li>
        );
    }

    render() {
        const { dogBreeds } = this.props;
        return (
            <div className='dogs-list'>
                <h1>Dogs List</h1>
                {/** If this.state.dogBreeds is null then display 'Loading Pages...' */}
                {dogBreeds === [] && 'Loading Page...'}
                {dogBreeds.length &&
                    <ul style={{listStyleType: 'none'}}>
                        {dogBreeds.map(this.renderDogBreed)}
                    </ul>
                }
            </div>
        )
    }
}

export default DogsList;