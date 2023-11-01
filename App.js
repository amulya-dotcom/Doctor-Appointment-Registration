import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaViewComponent, StyleSheet, Text, View } from 'react-native';
import LogIn from './App/Screens/LogIn';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import SignInWithOAuth from './App/Components/SignInWithOAuth';
import Home from './App/Screens/Home';




export default function App() {
  return (
    <ClerkProvider publishableKey={"pk_test_ZG9taW5hbnQtaGlwcG8tMTIuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
    <SafeAreaView style={styles.container}>
    <SignedIn>
     <Home/>
        </SignedIn>
        <SignedOut>
       <LogIn/>
        </SignedOut>
     
    </SafeAreaView>
  </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
