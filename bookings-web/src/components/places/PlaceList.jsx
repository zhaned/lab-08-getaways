import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';
import './PlaceList.css';
import { Link } from 'react-router-dom';

const PlaceList = ({ places }) => {
  return places.map((place) => (
    <Link key={place.id} to={`/getaways/${place.id}`}>
      <Place {...place} />
    </Link>
  ));
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      pricePerNight: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      imageThumbnail: PropTypes.string.isRequired,
      maxGuests: PropTypes.number.isRequired,
      petFriendly: PropTypes.bool.isRequired,
      pool: PropTypes.bool.isRequired,
      wifi: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default PlaceList;
