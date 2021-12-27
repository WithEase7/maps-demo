import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  Button,
} from 'react-native';

const Home = ({navigation}) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const textChange = val => {
    setUserName(val);
  };
  const passwordChange = val => {
    setPassword(val);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#01BF71'} />

        <Text style={styles.text1}>Login to My App</Text>

        {/* Below are text inputs*/}
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={val => textChange(val)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={val => passwordChange(val)}
        />

        {/* Login-SignUp buttons */}
        <View style={styles.btnview}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate('Login', {
                // itemId: 2345,  check initialParams in Login Screen in App.js 
                demoText: 'anything you want here',
              })
            }>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => alert(`${username} and ${password}`)}>
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01BF71',
  },
  text1: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'NunitoSans-Bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    marginBottom: 10,
    paddingLeft: 15,
    backgroundColor: 'white',
  },
  btnview: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btnText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: 'black',
  },
});

export default Home;
