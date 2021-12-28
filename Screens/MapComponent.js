import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import {searchLocation} from '../Services/ApiService';

const MapComponent = ({navigation}) => {

  const [region, setRegion] = useState({
    lat: 7.8731,
    lng: 80.7718,
  });

  const [text, onChangeText] = useState();

  const delta = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onSubmit = query => {
    searchLocation(query)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      {/* Map View */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{latitude: region.lat, longitude: region.lng, ...delta}}
        // onPress={e => pressHandler(e)}
      >
        <Marker
          coordinate={{latitude: region.lat, longitude: region.lng}}></Marker>
      </MapView>


      {/* User Input */}
      <View style={styles.searchView}>
        <TextInput
          placeholder="Enter the city"
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TouchableOpacity onPress={() => onSubmit(text)}>
          <Icon name="search-outline" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchView: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
  },
});

export default MapComponent;




// useEffect(() => {
//   var location = 'jaipur';
//   axios
//     .get('https://maps.googleapis.com/maps/api/geocode/json', {
//       params: {
//         address: location,
//         key: 'AIzaSyAqTqXuRHOdBKs9Vmmqyrm966Lu-kGL7Qs',
//       },
//     })
//     .then(res => setRegion(res.data.results[0].geometry.location))
//     .catch(err => console.log(err));
// }, []);

// const pressHandler = e => {
//   setRegion(e.nativeEvent.coordinate);
//   console.log(e.nativeEvent.coordinate);
// };
