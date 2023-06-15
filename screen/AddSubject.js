import React, { useEffect,useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ImageBackground ,Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { db } from './firebase';

const AddSubject = () => {
  const [courseCode, setcourseCode] = useState('');
  const [name, setName] = useState('');
 
   const handleRegistration = () => {
    db.collection('AddSubject')
      .add({
        courseCode,
        name
        
      })
      .then((docRef) => {
        console.log('Document written with ID:', docRef.id);
        Alert.alert("Course added successfully!")

      })
      .catch((error) => {
        console.error('Error adding document:', error);
        Alert.alert("Data not added")
      });
  };
const navigation=useNavigation();
  return (
    <View style={styles.container}>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Course Code</Text>
        <TextInput
          value={courseCode} 
          onChangeText={setcourseCode}
          style={styles.input}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>


      <TouchableOpacity onPress={handleRegistration} style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#B9D1EB',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  
  formGroup: {
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom:2,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddSubject;