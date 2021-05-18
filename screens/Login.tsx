import React, { useState } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../StyleSheet';

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  const [isLoading, toggleLoading] = useState(false);
  const { navigate } = useNavigation();

  const [error, updateError] = useState('');

  const updateLoginDetails = (value: string, field: string): void => {
    setLoginDetails((state) => ({
      ...state,
      [field]: value,
    }));
  };

  const login = async (): Promise<void> => {
    toggleLoading(true);
    const { email, password } = loginDetails;
    if (email && password) {
      console.log(email);
      console.log(password);
    } else {
      toggleLoading(false);
      updateError('Please enter your email and password.');
    }
  };

  return (
    <View style={style.content}>
      {!error ? <Text h1>Login</Text> : <Text>{error}</Text>}
      <Input
        style={style.textInput}
        placeholder="Email"
        onChangeText={(value): void => updateLoginDetails(value, 'email')}
      />
      <Input
        style={style.textInput}
        placeholder="Password"
        secureTextEntry
        onChangeText={(value): void => updateLoginDetails(value, 'password')}
      />
      <Button
        title="Login"
        onPress={login}
        loading={isLoading}
        disabled={isLoading}
      />
      <Button
        title="Create an account"
        onPress={(): void => {
          navigate('Account Creation');
        }}
        buttonStyle={{
          backgroundColor: theme.colors.info,
        }}
        containerStyle={{
          margin: 25,
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textInput: {
    color: 'white',
   },
});

export default Login;
