import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {db} from "./firebase"
const AddPaper = () => {
  const [lecID, setLecID] = useState('');
  const [LecName, setLecName] = useState('');
  
  const [courseCode, setcourseCode] = useState('');
  
  const [CourseName,setCourseName] = useState('');
  


  const handleFormSubmit = () => {
    
    db.collection('town')
      .add({
        lecID,
        LecName,
        courseCode,
        CourseName
      })
      .then((docRef) => {
        console.log('Document written with ID:', docRef.id);
        Alert.alert("data added successfully!")

      })
      .catch((error) => {
        console.error('Error adding document:', error);
        Alert.alert("not add");
      });
    
  };
const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Paper Handover</Text>

     
      <View style={styles.formGroup}>
        <Text style={styles.label}>Lecturer ID</Text>
        <TextInput
          value={lecID}
          onChangeText={setLecID}
          style={styles.input}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}> Lecturer Name</Text>
        <TextInput
          value={LecName}
          onChangeText={setLecName}
          style={styles.input}
        />
      </View>

      

      <View style={styles.formGroup}>
        <Text style={styles.label}>Course Name</Text>
        <TextInput
          value={CourseName}
          onChangeText={setcourseCode}
          style={styles.input}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Course Code</Text>
        <TextInput
          value={courseCode}
          onChangeText={setcourseCode}
          style={styles.input}
          keyboardType="phone-pad"
        />
      </View>

      

     

      <TouchableOpacity onPress={handleFormSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
     backgroundColor:'#B9D1EB',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000',
  },
  input: {
    borderWidth: 1,
     borderColor: 'black',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#000000',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddPaper;
