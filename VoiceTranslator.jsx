import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker"; // for dropdown list selection 
import Icon from "react-native-vector-icons/FontAwesome"; // for icons
import { t } from "react-native-tailwindcss";  // for tailwind styles

export default function VoiceTranslator({ navigation }) {  
  //console.log("Navigation Prop:", navigation);
  const [selectedLanguage1, setSelectedLanguage1] = useState("English");  
  const [selectedLanguage2, setSelectedLanguage2] = useState("Bengali");
  const [inputText, setInputText] = useState("I am listening...");

  return (         // styles
    <View style={[t.flex1, t.bgGray200, t.p4]}>   
      {/* Header */}
      <Text style={[t.text2xl, t.fontBold, t.mB4, t.mT8]}>
        Voice Translator
      </Text>

      {/* TextInput 1 = by Default Selectedlanguage1*/}
      <View
        style={[t.bgWhite, t.roundedLg, t.p4, t.border, t.borderBlue400, t.mB4]}
      >
        {/*Selectedlanguage1 = English*/}
        <Text style={[t.textGray600, t.mB2]}>{selectedLanguage1}</Text>  
        <TextInput 
          style={[t.textLg, t.textGray500]}
          value={inputText}  // input Text = I am listening.
          editable={false}
        />
      </View>

      {/* TextInput 2  = By default selectedlanguage2 = Bengali*/}
      <View style={[t.bgWhite, t.roundedLg, t.p4]}>
        <Text style={[t.textGray600, t.mB2]}>{selectedLanguage2}</Text>
        <TextInput
          style={[t.textLg, t.textGray500]}
          value=""
          placeholder="Translation appears here..."
          editable={false}
        />
      </View>

      {/* Language Picker and Buttons */}
      <View style={[t.flexRow, t.justifyBetween, t.itemsCenter, t.mT4]}>
        {/* Language Picker 1 = English*/}
        <Picker
          selectedValue={selectedLanguage1}
          onValueChange={(itemValue) => setSelectedLanguage1(itemValue)}
          style={{ width: 150 }}
        >
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Bengali" value="Bengali" />
          <Picker.Item label="Hindi" value="Hindi" />
        </Picker>

        {/* Middle Buttons = mic and close */}
        <View style={[t.flexRow, t.itemsCenter]}>
          <TouchableOpacity style={[t.bgBlue600, t.roundedFull, t.p3, t.mX2]}>
            <Icon name="microphone" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={[t.bgGray300, t.roundedFull, t.p3]}>
            <Icon name="times" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Language Picker 2 = Bengali*/}
        <Picker
          selectedValue={selectedLanguage2}
          onValueChange={(itemValue) => setSelectedLanguage2(itemValue)}
          style={{ width: 150 }}
        >
          <Picker.Item label="Bengali" value="bengali" />
          <Picker.Item label="Hindi"   value="hindi" />
          <Picker.Item label="English" value="english" />
        </Picker>
      </View>

      {/* Navigation Button to TextToVoice */}
      <TouchableOpacity
        style={[t.bgBlue600, t.p4, t.roundedLg, t.mT8, t.itemsCenter]}
        onPress={() => navigation.navigate("TextToVoice")}
      >
        <Text style={[t.textWhite, t.textLg]}>Go to Text to Voice</Text>
      </TouchableOpacity>
    </View>
  );
}
