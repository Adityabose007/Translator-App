import React, { useState } from "react";
import {
  View, // body 
  Text,  // text 
  TouchableOpacity,   //for Clickable.
  TextInput,  //for user input of text
  ScrollView,  //for speak button
} from "react-native";
import { t } from "react-native-tailwindcss"; //tailwind styles
import RNPickerSelect from "react-native-picker-select";  // drop down components approach
import { Speech } from "expo-speech";   //for text to speech 

export default function TextToVoice({ navigation }) {
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(null);

  const voiceOptions = [                          //array of objects
    { label: "Bengali", value: "bengali" },  
    { label: "Hindi", value: "hindi" },
    { label: "English", value: "english" },
  ];

  
  const speakText = async () => {          // deafult alert
    if (text.trim() === "") {
      alert("Please enter some text.");
      return;
    }
    if (!selectedVoice) {                  // deafult alert
      alert("Please select a voice.");
      return;
    }
    setIsSpeaking(true);            //deafult checking
    await Speech.speak(text, {
      rate: 0.75, // Adjust rate as needed
      voice: selectedVoice === "default" ? undefined : selectedVoice,
    });
    setIsSpeaking(false);
  };

  return (        // page style
    <View style={[t.flex1, t.justifyCenter, t.itemsCenter, t.bgGray100]}>        
      <Text style={[t.text3xl, t.fontBold, t.mB8]}>Text to Voice</Text>
      <View style={[t.wFull, t.pX4, t.mB8]}>

        <RNPickerSelect     //input voice selection 
          onValueChange={(value) => setSelectedVoice(value)}
          items={voiceOptions}
          placeholder={{ label: "Select a voice", value: null }}
          style={{
            inputIOS: [t.borderT2, t.borderGray300, t.roundedLg, t.p4, t.mB4],
            inputAndroid: [
              t.borderT2,
              t.borderGray300,
              t.roundedLg,
              t.p4,
              t.mB4,
            ],
          }}
        />

        <TextInput                 //input text selection 
          value={text}
          onChangeText={setText}
          placeholder="Enter text to speak"
          style={[t.borderT2, t.borderGray300, t.roundedLg, t.p4, t.mB4]}
        />

        <RNPickerSelect       //output voice selection
          onValueChange={(value) => setSelectedVoice(value)}
          items={voiceOptions}
          placeholder={{ label: "Select a voice", value: null }}
          style={{
            inputIOS: [t.borderT2, t.borderGray300, t.roundedLg, t.p4, t.mB4],
            inputAndroid: [
              t.borderT2,
              t.borderGray300,
              t.roundedLg,
              t.p4,
              t.mB4,
            ],
          }}
        />
      </View>

      <TouchableOpacity  //Speak button
        onPress={speakText}
        disabled={isSpeaking}
        style={[
          t.bgBlue500,
          t.p4,
          t.roundedLg,
          t.itemsCenter,
          t.mB4,
          isSpeaking && t.opacity50,
        ]}
      >
        <Text style={[t.textWhite, t.textLg]}>Speak</Text>
      </TouchableOpacity>
      <ScrollView style={[t.wFull, t.pX4]}>
        <Text style={[t.textGray700, t.mT4]}>{text}</Text>
      </ScrollView>
    </View>
  );
}
