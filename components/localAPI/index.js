import React, { useState } from 'react';
import {Button, StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import { TextInput } from 'react-native';

const Item =() => {
    return (
        <View style={styles.itemContainer}>
         <Image source={{uri: 'https://i.pinimg.com/736x/6e/89/fa/6e89faaffc9ff42df7167c60abf6775c.jpg'}} style={styles.avatar} />
               <View style={styles.desc}>
                    <Text style={styles.descName}>Nama Lengkap</Text>
                    <Text style={styles.descEmail}>Email</Text>
                    <Text style={styles.descBidang}>Bidang</Text>
               </View>
               <Text style={styles.delete}>X</Text>
        </View>
    )
}

const LocalAPI = () => {
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [bidang,setBidang]= useState("");

    const submit =() => {
        const data = {
            name,
            email,
            bidang,
        }
        console.log('data sebelum dikirim: ',data);
    }

    return (
        <ScrollView>
          <View style={styles.container}>
                <Text style={styles.textTitle}> Local API (JSON Server)</Text>
                <Text>Maukkan Tretan Rukun Sejahtera</Text>
                <TextInput placeholder= "Nama Lengkap" style={styles.input} value={name} onChangeText={(value) => setName(value)} />
                <TextInput placeholder= "Email" style={styles.input} value={email} onChangeText={(value) => setEmail(value)} />
                <TextInput placeholder= "Bidang" style={styles.input} value={bidang} onChangeText={(value) => setBidang(value)} />
                <Button title="Simpan" onPress={submit} />
                <View style={styles.line} />
                <Item />
                <Item />
                <Item />
                <Item />  
        
         </View>
     </ScrollView>
    )
}

export default LocalAPI

const styles = StyleSheet.create({
    container: {padding: 50},
    textTitle: {textAlign: 'center', marginBottom: 20},
    line     : {height: 2, backgroundColor: 'blue', marginVertical:20},
    input    : {borderWidth:2, marginBottom: 20, borderRadius: 40, paddingHorizontal: 18},
    avatar   : {width: 80, height: 80, borderRadius: 80},
    itemContainer : {flexDirection: 'row', marginBottom:20},
    desc     : {marginLeft: 18, flex: 1},
    descName : {fontSize: 20, fontWeight: 'bold'},
    descEmail : {fontSize: 16},
    descBidang : {fontSize:12, marginTop:8},
    delete: {fontSize: 20, fontWeight: "bold", color: 'red'}
})