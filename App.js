import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import desafio1 from './pages/desafio1_carteira';
import desafio2 from './pages/desafio2_componentes';
import React, { useState, useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Carteira de Uber" screenOptions={{headerShown:false}} >
        {/* <Stack.Screen name="Carteira de Uber" component={desafio1} /> */}
        <Stack.Screen name="Avaliação de Comidas" component={desafio2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}