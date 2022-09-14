import React from 'react';
import {
  TextInput,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
const {width} = Dimensions.get('screen');

export const InputField = ({
  initialValues,
  validationSchema,
  inputPlaceHolders,
  onPressSubmit,
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={values => onPressSubmit(values)}>
    {({handleChange, handleBlur, handleSubmit, values, errors}) => (
      <View>
        {Object.keys(initialValues).map((field, index) => {
          return (
            <View key={index} style={{marginBottom: 20}}>
              <Text style={{fontSize: 14, color: 'gray', marginBottom: 10}}>
                {field.toUpperCase()}
              </Text>
              <TextInput
                onChangeText={handleChange(field)}
                onBlur={handleBlur(field)}
                value={values[field]}
                style={{
                  backgroundColor: '#fff',
                  paddingVertical: 10,
                  width: width * 0.8,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#e1e1e1',
                  paddingHorizontal: 15,
                }}
                placeholder={inputPlaceHolders[field]}
              />
              <Text style={{color: 'red'}}>{errors[field]}</Text>
            </View>
          );
        })}
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            width: width * 0.8,
            backgroundColor: 'purple',
            alignItems: 'center',
            paddingVertical: 20,
            borderRadius: 6,
          }}>
          <Text style={{color: '#fff', fontSize: 18}}>Submit</Text>
        </TouchableOpacity>
      </View>
    )}
  </Formik>
);
