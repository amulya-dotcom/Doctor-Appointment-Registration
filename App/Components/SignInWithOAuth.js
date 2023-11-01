import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, Dimensions,Text, TouchableOpacity } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

 
WebBrowser.maybeCompleteAuthSession();
 
const SignInWithOAuth = () => {
  
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
     <TouchableOpacity
      onPress={ onPress}
        style={{padding:16,
        backgroundColor:'#000',
        borderRadius:90,
        alignItems:'center',
        marginTop:20,
        width:Dimensions.get('screen').width*0.8}}>
        <Text style={{fontSize:20,fontWeight:'900',color:'#fff'}}>SignUp</Text>
        </TouchableOpacity>
    
  );
}
export default SignInWithOAuth;