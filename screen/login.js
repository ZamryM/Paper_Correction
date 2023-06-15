import  React,{useState} from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,TextInput,Alert,ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase';

const login=()=>{
  const[email,setText]=useState('');
  const[password,setText1]=useState('');
  const navigation=useNavigation();
  const handleLogin = () => {
     firebase
    .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User logged in successfully!');
        Alert.alert('sucess!!!')
        navigation.navigate('home');

      })
      .catch((error) => {
         console.log('Signup error:', error);
         Alert.alert('not sucesss!!!')
      });
      setText('');
      setText1('');
      
  };

  return(
    <View style={styles.container}>
    <ImageBackground style={{flex:1}}
    source={require('./correctio.jpg')}>
    <View style={styles.contain}>
    <View style={{alignItems:"center"}}>
    <Image source={require('./uov.png')} style={{width:150,height:150,marginTop:30,marginBottom:5}}/>
    </View>
    <Text style={{fontWeight:"bold",textAlign:"center",marginBottom:40,fontSize:25,color:'black'}} >UOV Paper Correction</Text>
    <TextInput style={styles.input}
    placeholder="Email"
    onChangeText={email=>setText(email)}
    defaultValue={email}
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
    
    
   <View style={styles.main}>
    <TouchableOpacity
    style={styles.buttonContainer}
    
  >
    <Text style={styles.buttonText} onPress={handleLogin}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttonContainer}
     onPress={()=>navigation.navigate('Signup')}>
    <Text style={styles.buttonText}>Signup</Text>
    
    </TouchableOpacity>
    
    </View>
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
     backgroundColor:'#A8BFD8',
    marginTop:10,
    marginBottom:30,
    width:300,
    borderRadius:12,
    color:"black",
    
    padding:10,
    fontSize:18,
     
  
  },
  buttonText:{
    
    textAlign:"center",
     alignItems:"center",
    color:"white",
     paddingTop:5,
     fontSize:18,
     fontWeight:'bold'
    
  },
  buttonContainer:{
    backgroundColor:"#27374D",
    width:100,
    height:40,
    textAlign:"center",
    alignItems:"center",
    paddingTop:5,
    borderRadius:12,
    marginTop:18,
    marginRight:10

  },
  main:{
     flex: 1,
    flexDirection: "row",
     marginTop:18,
    alignItems:'center',
    justifyContent: "space-around"
  }

});


export default login;