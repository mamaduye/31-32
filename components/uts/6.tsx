import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selamat datang ke layar kedua!</Text>
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
    color: 'green',
  },
});

export default SecondScreen;
