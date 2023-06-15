import  React,{useState} from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet,TextInput,Alert,ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase';

const signup=()=>{
  const [lecID, setLecID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation=useNavigation();

 const handleSignup = () => {
   
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
       
        userCredential.user.updateProfile({
          displayName: lecID,
        });
      })
      .catch((error) => {
       
        console.log('Signup error:', error);
      });

    
    setLecID('');
    setEmail('');
    setPassword('');
  };
  return(
    <View style={styles.container}>
    <ImageBackground style={{flex:1}}
    source={require('./books.jpg')}>
    <View style={styles.contain}>
    <View style={{alignItems:"center"}}>
    <Image source={require('./uov.png')} style={{width:150,height:150,marginTop:30,marginBottom:5}}/>
    </View>

    <Text style={{fontWeight:"bold",textAlign:"center",marginBottom:40,fontSize:25,color:'white'}} >UOV Paper Correction</Text>
    <TextInput style={styles.input}
    placeholder="Lecturer ID "
    onChangeText={lecID=>setLecID(lecID)}
    defaultValue={lecID}
    returnKeyType="go">
    </TextInput>

    <TextInput style={styles.input}
    placeholder="Email"
    onChangeText={email=>setEmail(email)}
    defaultValue={email}
    returnKeyType="go">
    </TextInput>

    <TextInput style={styles.input}
    secureTextEntry={true}
    placeholder="password"
    onChangeText={password=>setPassword(password)}
    defaultValue={password}
     returnKeyType="go"
    >
    </TextInput>
    
    
   
    <TouchableOpacity>
    <Text style={styles.buttonText} onPress={handleSignup}>Signup</Text>
    </TouchableOpacity>
    <Text style={styles.bt}>Already Registered!
    <Text>    </Text>
     <TouchableOpacity
    onPress={()=>navigation.navigate('Login')}>
     <Text style={styles.buttonText}>Login</Text>      
    
    </TouchableOpacity>
    </Text>
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
    borderRadius:10,
    color:"black",
    opacity:50,
    
     padding:5,
    fontSize:18,
  
  },
  buttonText:{
    fontSize:18,
    color:"black",
    fontWeight:'bold'
  },
  bt:{
    fontSize:12,
    color:'black',
    textAlign:"center",
    alignItems:"center"
  }


});


export default signup;