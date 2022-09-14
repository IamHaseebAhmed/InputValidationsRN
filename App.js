// SignUp.js
import React from 'react';
import {StyleSheet, View, Text, StatusBar, Button} from 'react-native';
import {Formik, Field} from 'formik';
import {CustomInput} from './components/InputField';
import {signUpValidationSchema} from './components/InputField/validations';

const SignUp = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.signupContainer}>
        <Text>Sign Up Screen</Text>

        <Formik
          initialValues={{
            fullName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={signUpValidationSchema}
          onSubmit={values => console.log(values)}>
          {({handleSubmit, isValid}) => (
            <>
              <Field
                component={CustomInput}
                name="fullName"
                placeholder="Full Name"
                placeholderTextColor="green"
                selectionColor="red"
                keyboardType="number-pad"
              />
              <Field
                component={CustomInput}
                name="email"
                placeholder="Email Address"
                keyboardType="email-address"
              />
              <Field
                component={CustomInput}
                name="phoneNumber"
                placeholder="Phone Number"
                keyboardType="numeric"
              />
              <Field
                component={CustomInput}
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              <Field
                component={CustomInput}
                name="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry
              />

              <Button
                onPress={handleSubmit}
                title="SIGN UP"
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6',
  },
});
export default SignUp;
