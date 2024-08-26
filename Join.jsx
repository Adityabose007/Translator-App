//This file is for join voice-Text and Text-voice

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack"; 
import VoiceTranslator from "./VoiceTranslator";
import TextToVoice from "./TextToVoice";

const Stack = createStackNavigator();       // create stack

export default function App() {         // first navigator = voiceTranslator
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VoiceTranslator">   
        <Stack.Screen name="VoiceTranslator" component={VoiceTranslator} />
        <Stack.Screen name="TextToVoice" component={TextToVoice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
