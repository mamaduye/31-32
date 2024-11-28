// AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from '../../../MPA-pertemuan-5-main/app/(tabs)/UTS5/5'; // Pastikan path ini sesuai
import SecondScreen from './6'; // Pastikan path ini sesuai

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
  );
};

export default AppNavigator;