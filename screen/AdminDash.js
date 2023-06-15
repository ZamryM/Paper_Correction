import  React,{useState} from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,TextInput,Alert,ImageBackground,Button,onPressLearnMore,tabBarIcon,TabIcon,ScrollView,FontAwesomeIcon,Icon} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase';


const AdminDash=()=>{
const navigation=useNavigation();
const handleLogout = () => {
      Alert.alert("Logged Out!");
      navigation.navigate('Frontpage')
   
};
  return(
    
  
    <View style={styles.container}>
    <ImageBackground style={{flex:1}}
    source={require('../book1.jfif')}>
    <View style={styles.contain}>
  
    <ScrollView horizontal>
      <View style={styles.container}>

        <TouchableOpacity onPress={() => navigation.navigate('AddLecturer')}>
          <Image
            source={require('./lecturer.jpg')}
            style={styles.image}
          />
          <Button title="Add Lecturer"  
          style={styles.button}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('lecDetails')}>
          <Image
            source={require('./lec1.jpeg')}
            style={styles.image}
          />
          <Button title="Lecturer Details"  
          style={styles.button}/>
        </TouchableOpacity>

        
      </View>
    </ScrollView>
    
    
<ScrollView horizontal>
      <View style={styles.container}>

        

        <TouchableOpacity onPress={() =>navigation.navigate('AddSubject') }>
          <Image
            source={require('./sub.jpg')}
            style={styles.image}
            
          />
          <Button title="Add Subject"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>navigation.navigate('subDetails')}>
          <Image
            source={require('./subject.jpeg')}
            style={styles.image}
          />
          <Button title="Subject Details"  
          style={styles.button}/>
        </TouchableOpacity>
 
        
      </View>
    </ScrollView>
      <ScrollView horizontal>
      <View style={styles.container}>

        

        <TouchableOpacity onPress={() =>navigation.navigate('AddPaper') }>
          <Image
            source={require('./1.jpg')}
            style={styles.image}
            
          />
          <Button title="Add Paper"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>navigation.navigate('paperDetails')}>
          <Image
            source={require('./2.jpg')}
            style={styles.image}
          />
          <Button title="Paper Details"  
          style={styles.button}/>
        </TouchableOpacity>
 
        
      </View>
    </ScrollView>
      
   <TouchableOpacity onPress={handleLogout} style={styles.button1}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
     </View>
    
    
    
  );
}


const styles=StyleSheet.create({
  
  container:{
    flex:2,
   flexDirection: 'row',
    backgroundColor:"#27374D",
  marginTop:18,
  color:'#662D8C'
  },
  
 
  image: {
    alignItems:'center',
    width: 150,
    height: 150,
    marginRight: 9,
    marginLeft: 9, 
  },
 button:{
   color:'#9DB2BF'
 },
button1: {
    backgroundColor: '#A459D1',
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  

});

export default AdminDash;
