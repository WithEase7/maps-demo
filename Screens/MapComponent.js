import React, {useState, useEffect} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import axios from 'axios'

const MapComponent = ({navigation}) => {
  const [region, setRegion] = useState({
    latitude: 7.8731,
    longitude: 80.7718,
  });


  useEffect(() => {
    axios
      .get(
        'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCgXDnUfBl8wU1AfmgeZDLrRMkedRECIt0',
      )
      .then(res => console.log(JSON.stringify(res, null, 2)))
      .catch(err => console.log(err));
  }, []);

  
  const delta = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const pressHandler = e => {
    setRegion(e.nativeEvent.coordinate);
    console.log(e.nativeEvent.coordinate);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{...region, ...delta}}
        onPress={e => pressHandler(e)}>
        <Marker
          coordinate={{...region}}
        ></Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapComponent;
