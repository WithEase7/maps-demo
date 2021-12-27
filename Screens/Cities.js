import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const Cities = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Jaipur"
        onPress={() =>
          navigation.navigate('Login', {LATITUDE: 26.9124, LONGITUDE: 75.7873})
        }
      />
      <Button
        title="Delhi"
        onPress={() =>
          navigation.navigate('Login', {LATITUDE: 28.6139, LONGITUDE: 77.2090})
        }
      />
      <Button
        title="Chennai"
        onPress={() =>
          navigation.navigate('Login', {LATITUDE: 13.0827, LONGITUDE: 80.2707})
        }
      />
      <Button
        title="Indore"
        onPress={() =>
          navigation.navigate('Login', {LATITUDE: 22.7196, LONGITUDE: 75.8577})
        }
      />
      <Button
        title="Bangalore"
        onPress={() =>
          navigation.navigate('Login', {LATITUDE: 12.9716, LONGITUDE: 77.5946})
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
export default Cities;
