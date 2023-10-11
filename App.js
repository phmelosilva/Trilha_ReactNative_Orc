import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import desafio1 from './src/views/desafio1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Carteira de Uber" screenOptions={{headerShown:false}} >
        <Stack.Screen name="Carteira de Uber" component={desafio1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}