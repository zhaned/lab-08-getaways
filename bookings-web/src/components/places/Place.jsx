import React from 'react';
import PropTypes from 'prop-types';

const Place = ({
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  return (
    <ul>
      <img src={image} alt={name}/>
      <img src={imageThumbnail} alt={name}/>
      <li>{name}</li>
      <li className='description'>{description}</li>
      <li>{location}</li>
      <li>{pricePerNight}</li>
      <li>{maxGuests}</li>
      <li>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
      {pool ? <li>Has a Pool!</li> : null}
      {wifi ? <li>Free Wifi</li> : null}
    </ul>
  );
};

Place.propTypes = {
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
};

export default Place;
