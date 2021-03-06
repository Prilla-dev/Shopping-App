import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Login from './Login';
import Laptop from '../assets/Laptop.png';
import { Ionicons, FontAwesome, AntDesign, MaterialIcons, } from "@expo/vector-icons";


//const Welcome = props => {
    export default function Welcome({ navigation }){
    return (
        <View style ={{backgroundColor: "white", flex: 1,}}>
        <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#ff8400",
          alignItems: "center",
          paddingTop: 15,
          paddingBottom: 10,
          paddingHorizontal: 15,
        }}
      >
        <Ionicons name="arrow-back-outline" size={24} color="white" />
        <Text style={{color: "white", fontWeight: "bold", fontSize: 15}}>WELCOME</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
        </View>
        </View>
        <ImageBackground
        
        
        style = {styles.img}
        source = {Laptop}
        //source ={{uri: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60=" }
        >
            
        

 
        
            <View style={{flex:1,alignItems:"center", justifyContent:"center"}}>
            
            <Text style={{color:"orange",fontSize:50,fontWeight:"800",paddingRight:20}}>Prilla's <Text style={{color:"#004D4D",fontSize:50,fontWeight:"800",paddingRight:40,}}>Shoppify</Text></Text>
       
           <TouchableOpacity style={{
                backgroundColor:'#e3e3e3',
                padding:10, 
                borderRadius:10,
                paddingHorizontal:40, 
               marginTop:20}}>
                <Text style={{fontSize:17,alignText:'center'}}>Because you're worth it</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{
             backgroundColor:"white",
                padding:10, 
               borderRadius:10,
                paddingHorizontal:60, 
               marginTop:20}}>

                 <TouchableOpacity
                 onPress={()=>{
                     navigation.navigate("Login")
                }}
                 >
           <Text style={{fontSize:17, fontWeight:"800", color:"black"}}>Get Started</Text>

             </TouchableOpacity>
             </TouchableOpacity>

                 </View>




    </ImageBackground>
    </View>
    )
    }

const styles = StyleSheet.create({
   img:{flex:1}

  
  
});



 