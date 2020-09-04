/* eslint-disable no-unused-vars */
import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import {AuthContext, AuthProvider} from '../contexts/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import {postLogIn, checkToken} from '../hooks/APIhooks';
import FormTextInput from './FormTextInput';
import Login from '../views/Login';

const LoginForm = ({navigation}) => {
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);

  const doLogin = async () => {
    try {
      const userData = await postLogIn({
        username: 'ilonatr',
        password: 'salasana123',
      });
      console.log('user login success:', userData);
      setIsLoggedIn(true);
      await AsyncStorage.setItem('userToken', userData.token);
    } catch (e) {
      console.log('login error', e.message);
    }
    // navigation.navigate('Home');
  };

  return (
    <View>
      <FormTextInput
        autoCapitalize="none"
        placeholder="username"
        onChangeText={(txt) => handleInputChange('username', txt)}
      />
      <FormTextInput
        autoCapitalize="none"
        placeholder="password"
        onChangeText={(txt) => handleInputChange('password', txt)}
        secureTextEntry={true}
      />
      <Button title="Login!" onPress={doLogin} />
    </View>
  );
};

LoginForm.propTypes = {
  navigation: PropTypes.object,
};

export default LoginForm;
