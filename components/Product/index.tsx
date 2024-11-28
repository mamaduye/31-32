import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, GestureResponderEvent} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const Product =(props: { onButtonPress: ((event: GestureResponderEvent) => void) | undefined; }) => {
    return (
        <View 
        style={styles.wrapper}>
            <Image
                source={{ uri : 'https://i.pinimg.com/736x/58/fa/32/58fa3253f95ec83f0eb57ee204ed1163.jpg'}}
                style={styles.imageProduct}    
            />
            <Text style={styles.productName}>
                New Macbook pro 2019
            </Text>
            <Text 
                style={styles.productPrice}>
                    Rp. 25.000.000
            </Text>
            <Text style={styles.location}>
                Jawir Barat
            </Text>
            <TouchableOpacity onPress={props.onButtonPress}>
                <View 
                    style ={styles.buttonWrapper}>
                        <Text 
                            style={styles.buttonText}>
                                BELI
                        </Text>
                </View>
            </TouchableOpacity>
    </View>  
    )
}

export default Product

const styles = StyleSheet.create({
    wrapper: {
        padding:12,
        backgroundColor:'#F2F2F2',
        width:212,
        borderRadius:8,
    },
    imageProduct: {
        width:188, 
        height:107, 
        borderRadius:8
    },
    productName :{
        fontSize:14, 
        fontWeight: 'bold', 
        marginTop:16,
    },
    productPrice:{
        fontSize: 12,
        fontWeight: 'bold',
        color: 'F2994A',
        marginTop: 12,
    },
    location:{
        fontSize:12, 
        fontWeight: '300', 
        marginTop: 12,
    },
    buttonWrapper:{
        backgroundColor: 'red',
        paddingVertical: 6,
        borderRadius: 25,
        marginTop: 20,
    },
    buttonText:{
        fontSize:14,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    },
})
 