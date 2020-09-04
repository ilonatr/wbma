/* eslint-disable no-unused-vars */
import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import {AuthContext} from '../contexts/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import {postLogIn, checkToken, register} from '../hooks/APIhooks';
import FormTextInput from './FormTextInput';
import {useSignUpForm, handleInputChange} from '../hooks/RegisterHooks';

const RegisterForm = ({navigation}) => {
  const doRegister = async () => {
    try {
      const serverResponse = await register(inputs); // remember imports
      console.log(serverResponse);
    } catch (e) {
      console.log(e.message);
    }
  };

  const {inputs, handleInputChange} = useSignUpForm();
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
      <FormTextInput
        autoCapitalize="none"
        placeholder="email"
        onChangeText={(txt) => handleInputChange('email', txt)}
      />
      <FormTextInput
        autoCapitalize="none"
        placeholder="full name"
        onChangeText={(txt) => handleInputChange('full_name', txt)}
      />
    </View>
  );
};

RegisterForm.propTypes = {
  navigation: PropTypes.object,
};

export default RegisterForm;
