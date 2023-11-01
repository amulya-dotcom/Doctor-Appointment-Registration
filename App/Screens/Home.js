import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';

export default function Home({}) {
  const { isLoaded,signOut } = useAuth();
  return (
    <View>
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
        </View>

    <Button title='SignOut' onPress={()=>signOut()} ></Button>
      {/* <Text style={{marginTop:50,fontWeight:400}}> Please Click On The Button To SignOut</Text> */}
    </View>
  )
}