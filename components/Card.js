import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Laptop from '../assets/Laptop.png';



const Card = ({name, price, wishlist,}) => {
    return (
    <TouchableOpacity style={styles.card}
    onPress={()=>{
        navigation.navigate("Cart")}}
        >
           
        <View style={styles.wishlist}>
            <AntDesign name="hearto" size={20} color={wishlist ? "#f17827" : "#a3a3a3"} style={{position: 'absolute', top: '50%', left:'50%', transform: [{translate: '-50%, -50%'}]}}/>
        </View>
        <Image source={Laptop} style={{width: 150, height: 100, marginTop: 30, marginBottom: 10}}/>
        <Text style={{color: 'rgba(0,0,0, .4)', fontWeight: 500, textAlign: 'center', fontSize: 17}}>{name} Laptops</Text>
        <Text style={{color: '#f17827', fontWeight: 700, fontSize: 17, textAlign: 'center'}}>$<Text style={{color: 'rgba(0,0,0, .8)', fontSize: 20}}>{price}</Text></Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        backgroundColor: '#e3e3e3',
        borderRadius: 10,
        width: 'fit-content',
        paddingHorizontal:  5,
        paddingVertical: 15

    },
    wishlist: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#fff',
        borderRadius: '50%',
        width: 35,
        height: 35,
    }
})
export default Card;