import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HorizontalButtons = () => {
  return (
    <View style={styles.container}>
      {/* Tombol biru */}
      <View style={styles.buttonContainer}>
        <Button title="Tombol Biru" color="#0000FF" onPress={() => alert('Tombol Biru Ditekan')} />
      </View>
      {/* Tombol hijau */}
      <View style={styles.buttonContainer}>
        <Button title="Tombol Hijau" color="#008000" onPress={() => alert('Tombol Hijau Ditekan')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arah horizontal
    justifyContent: 'space-around', // Jarak merata
    alignItems: 'center', // Tengah secara vertikal
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    flex: 1, // Tombol mengambil ruang sama besar
    marginHorizontal: 10, // Jarak antar tombol
  },
});

export default HorizontalButtons;
