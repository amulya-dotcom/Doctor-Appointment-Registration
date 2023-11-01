import { View, Text ,Image,StyleSheet, Touchable, TouchableNativeFeedbackComponent, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import doctor from './../../assets/images/doctor.png'
import Colors from '../../assets/Shared/Colors'
import { Button } from 'react-native'
import SignInWithOAuth from '../Components/SignInWithOAuth'

export default function LogIn() {
  return (
    <View style={{alignItems:'center',backgroundColor:Colors.LIGHT_GRAY}}>
      <Image source={doctor}
        style={styles.doctorImage}/>
      <View  style={{padding:25,alignItems:'center',
      marginTop:-10,
      borderTopLeftRadius:20,
      borderTopRightRadius:20}}>
        <Text  style={styles.heading}>Schedula - Pati</Text>
        <Text style={{textAlign:'center',padding:30}}>Book Your Appointments Now!!!</Text>
      <SignInWithOAuth/>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   doctorImage:{
   width:400,
   height:400,
   marginTop:70,
   objectFit:'fill',
   borderRadius:20,
   borderWidth:5,
   },
   heading:{
    fontSize:40,fontWeight:'bold'
   }
})

