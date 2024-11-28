import React from 'react';
import { View, Text } from 'react-native';

// 2. Komponen di React Native adalah elemen dasar yang digunakan untuk membangun antarmuka pengguna. Komponen dapat diibaratkan sebagai blok penyusun aplikasi. Setiap komponen dapat berupa:

// Komponen bawaan: Seperti View, Text, Image, dan Button, yang disediakan oleh React Native.
// Komponen buatan sendiri: Dibuat oleh pengembang, berupa fungsi atau kelas untuk mempermudah pengelolaan kode.
// Komponen dalam React Native bersifat reusable dan dapat menerima props untuk menyesuaikan perilakunya.

// 2. Perbedaan Functional dan Class Component
// Functional Component
// Dibuat menggunakan fungsi JavaScript biasa atau arrow function.
// Sederhana dan cocok untuk komponen yang hanya menerima props dan menampilkan UI.
// Menggunakan React Hooks seperti useState dan useEffect untuk mengelola state dan efek samping.
// Class Component
// Dibuat dengan mendefinisikan sebuah kelas yang mewarisi React.Component.
// Memiliki akses ke lifecycle methods seperti componentDidMount dan componentWillUnmount.
// Menggunakan state bawaan dan this.setState untuk mengelola data lokal.


// functional componenet
const HelloReactNative = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello React Native</Text>
    </View>
  );
};

export default HelloReactNative;

// class componenet
// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// class HelloReactNativeClass extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Hello React Native</Text>
//       </View>
//     );
//   }
// }

// export default HelloReactNativeClass;
