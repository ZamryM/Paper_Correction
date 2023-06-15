import  React,{useState} from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,TextInput,Alert,ImageBackground,Button,onPressLearnMore,tabBarIcon,TabIcon,ScrollView,FontAwesomeIcon,Icon} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase';


const home=()=>{
const navigation=useNavigation();

  return(
    
  
    <View style={styles.container}>
    <ImageBackground style={{flex:1}}
    source={require('../book1.jfif')}>
    <View style={styles.contain}>
  
    <ScrollView horizontal>
      <View style={styles.container}>

        

        <TouchableOpacity onPress={() => navigation.navigate('AddPaper')}>
          <Image
            source={require('./3.jpg')}
            style={styles.image}
          />
          <Button title="Add Paper"  
          style={styles.button}/>
        </TouchableOpacity>

        
      </View>
    </ScrollView>
    
    
    <ScrollView horizontal>
          <View style={styles.container}>
          

        <TouchableOpacity onPress={() => navigation.navigate('RePaper')}>
          <Image
            source={require('./1.jpg')}
            style={styles.image}
          />
          <Button title="Receive Paper"  
          style={styles.button}/>
        </TouchableOpacity>

      </View>
    </ScrollView>

      
    </View>
    </ImageBackground>
     </View>
    
    
    
  );
}


const styles=StyleSheet.create({
  
  container:{
    flex:2,
   flexDirection: 'row',
    backgroundColor:"white",
  marginTop:18,
  color:'#662D8C'
  },
  
 
  image: {
    width: 400,
    height: 200,
    marginRight: 9,
    marginLeft: 9, 
  },
 button:{
   color:'#9DB2BF'
 },
  

});

export default home;
