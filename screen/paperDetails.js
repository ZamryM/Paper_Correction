import React, { useEffect,useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ImageBackground ,Alert,FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { db} from './firebase';

const paperDetails = () => {
   const [data, setData] = useState([]);
   const navigation=useNavigation();

  useEffect(() => {
    
    const fetchData = async () => {
      const snapshot = await db.collection('AddPaper').get();
      const fetchedData = snapshot.docs.map((doc) => doc.data());
      setData(fetchedData);
    };

    fetchData();
  }, []);
 


  const renderRow = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.lecID}</Text>
      <Text style={styles.tableCell}>{item.LecName}</Text>
      <Text style={styles.tableCell}>{item.courseCode}</Text>
      <Text style={styles.tableCell}>{item.CourseName}</Text>
      
    </View>
  );

  return (
    <View >
    <View style={styles.tableRow}>
        <Text style={styles.tableHeaderCell}>Lecturer ID</Text>
        <Text style={styles.tableHeaderCell}>Lecturer Name</Text>
        <Text style={styles.tableHeaderCell}>Course Code</Text>
        <Text style={styles.tableHeaderCell}>Course Name</Text>
        
        
      </View>
      <FlatList
        data={data}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
 
   
  tableRow: {
    flexDirection: 'row',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#000',
  },
  tableCell: {
    
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    
  },
  
});

export default paperDetails;
