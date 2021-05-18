import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

const AccountCreation = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const [isLoading, toggleLoading] = useState(false);

  const updateSignUpDetails = (value: string, field: string): void => {
    setSignUpDetails((state) => ({
      ...state,
      [field]: value,
    }));
  };

  const createAcount = async (): Promise<void> => {
    toggleLoading(true);
    console.log(signUpDetails);
  };

  return (
    <View style={style.content}>
      <Input
        style={style.textInput}
        placeholder="Email"
        onChangeText={(value): void => updateSignUpDetails(value, 'email')}
      />
      <Input
        style={style.textInput}
        placeholder="Password"
        secureTextEntry
        onChangeText={(value): void => updateSignUpDetails(value, 'password')}
      />
      <Input
        style={style.textInput}
        placeholder="Confirm password"
        secureTextEntry
        onChangeText={(value): void =>
          updateSignUpDetails(value, 'passwordConfirmation')
        }
      />
      <Button
        title="Create account"
        onPress={createAcount}
        loading={isLoading}
        disabled={isLoading}
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

export default AccountCreation;
