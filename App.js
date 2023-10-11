import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import desafio1 from './pages/desafio1';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

export default function App() {

  const [dummy, setDummy] = useState(false);

  Font.loadAsync({
    'sourcecodepror':require('./src/assets/fonts/SourceCodePro-Regular.ttf'),
    'sourcecodeprob':require('./src/assets/fonts/SourceCodePro-Bold.ttf')

  }).then(() => {
    setDummy(true);
  })

  if(!dummy){
    return(
      <AppLoading />
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Carteira de Uber" screenOptions={{headerShown:false}} >
        <Stack.Screen name="Carteira de Uber" component={desafio1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}