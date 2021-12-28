import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Demo from './Screens/Demo';
import MapComponent from './Screens/MapComponent';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MapComponent />
      {/* <Stack.Navigator
        screenOptions={{
          // headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'serif',
          },
        }}>
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen
          name="Maps"
          component={MapComponent}
          options={{title: "Map"}}
          // options={({ route }) => ({ title: route.params.name })}
          initialParams={{itemId: 20}}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};


export default App;
