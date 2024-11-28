// FirstScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface FirstScreenProps {
  navigation: NavigationProp<any>; // Ganti 'any' dengan tipe yang lebih spesifik jika perlu
}

const FirstScreen: React.FC<FirstScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini adalah layar pertama.</Text>
      <Button
        title="Pindah ke Layar Kedua"
        onPress={() => alert(' MAAF AMAL IBADAH ANDA BELUM MEMENUHI SYARAT UNTUK PERGI KE HALAMAN 2 ')} // Pindah ke layar kedua
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default FirstScreen;

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { View, Text, Button } from 'react-native';
// import { NavigationProp } from '@react-navigation/native';


// type RootStackParamList = {
//   Home: undefined;
//   Second: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// type HomeScreenProps = {
//   navigation: NavigationProp<RootStackParamList, 'Home'>;
// };

// const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
//   return (
//     <View>
//       <Button
//         title="Ke Halaman Kedua"
//         onPress={() => navigation.navigate('Second')}
//       />
//     </View>
//   );
// };

// const SecondScreen: React.FC = () => {
//   return (
//     <View>
//       <Text>Selamat datang di halaman ini!</Text>
//     </View>
//   );
// };

// const App: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Halaman Utama' }} />
//         <Stack.Screen name="Second" component={SecondScreen} options={{ title: 'Halaman Kedua' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;