import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Uts from '../../../components/uts//2' ;
import UTs from '../../../components/uts/3';
import Uts5 from '../UTS5/5'

const Communication =() => {
    const [totalProduct, setTotalProduct] = useState(0);
    return (
        <View style={styles.container}>
            <Uts />
            <UTs />
        </View>
    )
}

export default Communication;

const styles = StyleSheet.create({
    container: { padding: 20},
    textTitle: { textAlign: 'center'}
});