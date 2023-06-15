import  React,{useState} from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,TextInput,Alert,ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const adminLogin=()=>{
  const[username,setText]=useState('');
  const[password,setText1]=useState('');
  const navigation=useNavigation();
  return(
    <View style={styles.container}>
    <ImageBackground style={{flex:1}}
    source={require('./books.jpg')}>
    <View style={styles.contain}>
    <View style={{alignItems:"center"}}>
    <Image source={require('./uov.png')} style={{width:150,height:150,marginTop:30,marginBottom:5}}/>
    </View>
    <Text style={{fontWeight:"bold",textAlign:"center",marginBottom:50,fontSize:25,color:'white'}} >UOV Paper Correction</Text>
    <TextInput style={styles.input}
    placeholder="username"
    onChangeText={username=>setText(username)}
    defaultValue={username}
    returnKeyType="go">
    </TextInput>

    <TextInput style={styles.input}
    secureTextEntry={true}
    placeholder="password"
    onChangeText={password=>setText1(password)}
    defaultValue={password}
     returnKeyType="go"
    >
    </TextInput>
    
    
   
    <TouchableOpacity
    style={styles.buttonContainer}
    onPress={() => {
      var uname=username;
      var pword=password;

       if(username=="admin" && pword=="Abc@123"){
        Alert.alert('successfully logged in!!');
        navigation.navigate('AdminDash')
          
        }
      else{
        Alert.alert("Incorrect username or Password");
      }
      setText('');
      setText1('');
    }}>
    <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    
    </View>
  </ImageBackground>

    </View>
  );
}


const styles=StyleSheet.create({
  
  container:{
    flex:1,
   
  },
  contain:{
     justifyContent:'center',
    alignItems:'center',
  },
  input:{
    height:40,
     backgroundColor:'#E0AF10',
    marginTop:10,
    marginBottom:30,
    width:300,
    borderRadius:12,
    color:"black",
    padding:10,
    fontSize:18
  
  },
  buttonText:{
    textAlign:"center",
     alignItems:"center",
    color:"white",
     padding:5,
    fontSize:18,
    fontWeight:'bold'
    

  },
  buttonContainer:{
    backgroundColor:"#800000",
    width:200,
    height:40,
    textAlign:"center",
    alignItems:"center",
    paddingTop:5,
    borderRadius:15,
    marginTop:10

  }

});


export default adminLogin;