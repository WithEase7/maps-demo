import axios from 'axios';

export const searchLocation = async location => {
  const resp = await axios.get(
    'https://maps.googleapis.com/maps/api/geocode/json',
    {
      params: {
        address: location,
        key: 'AIzaSyAqTqXuRHOdBKs9Vmmqyrm966Lu-kGL7Qs',
      },
    },
  );
  return resp.data.results[0].geometry.location;
};
