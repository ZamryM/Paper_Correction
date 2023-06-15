import * as React from 'react';
import {Text,View,Image,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const frontpage=()=>{
  const navigation=useNavigation();
  return(
    <View style={styles.container}>
    <ImageBackground style={{flex:1}}
    source={require('./books.jpg')}>
    <View style={{alignItems:'center',
  justifyContent:'center'}}>

    <Text style={{fontSize:30,fontWeight:'bold', color:'white',marginTop:100}}>Paper C&U System</Text>
    <Text style={{fontSize:15, color:'white',fontWeight:'bold'}}>UNIVERSITY OF VAVUNIYA</Text>
    </View>
    
    <View style={styles.contain}>
     
       <TouchableOpacity onPress={()=>navigation.navigate('AdminLogin')}>
  
       <Text style={styles.btn}>ADMIN</Text>
       </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
      <Text style={styles.btn}>USER</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
    
    
    
     
    
  );
}

const styles=StyleSheet.create({
container:{
  flex:1,
  flexDirection:'column'
  
},
contain:{
  alignItems:'center',
  justifyContent:'center',
  marginTop:250
},
btn:{
  marginBottom:20,
 backgroundColor:"#27374D",
    width:200,
    height:50,
    textAlign:"center",
    alignItems:"center",
    paddingTop:5,
    color:'white',
    fontWeight:'bold',
    fontSize:25,
    flexDirection:'row',
    borderRadius:30,
}
});
export default frontpage;