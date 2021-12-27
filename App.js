import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
import {Image, View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const Header = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%'}}>
      <TextInput
        placeholder="Enter the city"
        style={{color: 'black', fontSize: 15}}
        onChangeText={e=>console.log(e)}
      />
      <TouchableOpacity>
        <Icon name="search-outline" size={25} />
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'serif',
          },
        }}>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: "Map"}}
          // options={({ route }) => ({ title: route.params.name })}
          // options={{headerTitle: () => <LogoTitle />}}
          initialParams={{itemId: 20}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function LogoTitle() {
  return (
    // <Image
    //   style={{width: 300, height: 50}}
    //   source={require('./assets/images/talltree.jpg')}
    // />
    <View>
      <Text>Login</Text>
    </View>
  );
}

export default App;
