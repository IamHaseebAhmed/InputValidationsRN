import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {InputField} from './components/InputField';
import {SignUpFormValidations} from './components/InputField/validations';

const App = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    'confirm password': '',
  });

  let inputPlaceHolders = {
    email: 'Enter your name',
    password: 'Enter your Password',
    'confirm password': 'Enter your confirm password',
  };

  let onPressSubmit = data => {
    console.log('Submitted Data: ', data);
  };

  return (
    <View style={styles.container}>
      <InputField
        initialValues={signUpForm}
        validationSchema={SignUpFormValidations}
        inputPlaceHolders={inputPlaceHolders}
        onPressSubmit={onPressSubmit}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#e1e1e1',
  },
});
