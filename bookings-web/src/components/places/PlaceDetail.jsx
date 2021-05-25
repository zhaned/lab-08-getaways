import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Place from './Place.jsx';
import { getPlaceById } from '../../services/placesApi';
import Loading from '../../components/loading/Loading';

const PlaceDetail = () => {
  const [place, setPlace] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    getPlaceById(params.id)
      .then(setPlace)
      .finally(() => setLoading(false));
  }, [])

  return (    
    <div>
      {loading ? <Loading /> : <Place {...place} />}
    </div>
  )
}

export default PlaceDetail;