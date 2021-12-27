import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const Login = ({route, navigation}) => {
  const {itemId, demoText} = route.params;
  const [region, setRegion] = useState({
    latitude: 7.8731,
    longitude: 80.7718,
    // latitudeDelta: 0.0922,
    // longitudeDelta: 0.0421
  });

  const cities = {
    jaipur: {
      latitude: 26.9124,
      longitude: 75.7873,
    },
    delhi: {
      latitude: 28.6139,
      longitude: 77.209,
    },
    chennai: {
      latitude: 13.0827,
      longitude: 80.2707,
    },
    indore: {
      latitude: 22.7196,
      longitude: 75.8577,
    },
    bangalore: {
      latitude: 12.9716,
      longitude: 77.5946,
    },
  };
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
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        initialRegion={{...region, ...delta}}
        onPress={e => pressHandler(e)}>
        <Marker
          coordinate={{...region}}
          title={'San Francisco'}
          // image={require('../assets/images/map_marker.png')}
        ></Marker>
      </MapView>
      {/* <Text>Login page</Text>
      <Text>{`itemId: ${itemId}`}</Text>
      <Text>{demoText}</Text>
      <Icon name="md-menu" size={30}/> */}
      {/* <Button
        title="Go to home screen"
        onPress={() => navigation.popToTop('Home')} //Another alternative is navigation.navigate('Home') but we can't use push as it pushes home screen again to the stack which we don't want.
      /> */}
      {/* <Button
        title="Update the title"
        onPress={() => navigation.setOptions({headerTitleStyle: {fontFamily: 'OpenSans-Bold'}})}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Login;
