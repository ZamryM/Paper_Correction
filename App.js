import * as React from 'react';
import login from './screen/login';
import signup from './screen/signup';
import adminLogin from './screen/adminLogin';
import frontpage from './screen/frontpage';
import AdminDash from './screen/AdminDash';
import AddLecturer from './screen/AddLecturer';
import AddSubject from './screen/AddSubject';
import lecDetails from './screen/lecDetails';
import subDetails from './screen/subDetails';
import home from './screen/home';
import AddPaper from './screen/AddPaper';
import RePaper from './screen/RePaper';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack=createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator>
   <Stack.Screen name="Frontpage" component={frontpage}/>
   <Stack.Screen name="Login" component={login}/>
   <Stack.Screen name="AdminLogin" component={adminLogin}/>
     <Stack.Screen name="Signup" component={signup}/>
    <Stack.Screen name="AdminDash" component={AdminDash}/>
<Stack.Screen name="AddLecturer" component={AddLecturer}/>
<Stack.Screen name="AddSubject" component={AddSubject}/>
<Stack.Screen name="lecDetails" component={lecDetails}/>
<Stack.Screen name="subDetails" component={subDetails}/>
<Stack.Screen name="home" component={home}/>
<Stack.Screen name="AddPaper" component={AddPaper}/>

<Stack.Screen name="RePaper" component={RePaper}/>







     </Stack.Navigator>
     </NavigationContainer>
  );
}
