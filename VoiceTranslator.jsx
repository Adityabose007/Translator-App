import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { t } from 'react-native-tailwindcss';


export default function VoiceTranslator({ navigation }) {
console.log('Navigation Prop:', navigation);  /// error prone part
  const [selectedLanguage1, setSelectedLanguage1] = useState("English");
  const [selectedLanguage2, setSelectedLanguage2] = useState("French");
  const [inputText, setInputText] = useState("I am listening...");

  return (
    <View style={[t.flex1, t.bgGray200, t.p4]}>
      {/* Header */}
      <Text style={[t.text2xl, t.fontBold, t.mB4, t.mT8]}>Voice Translator</Text>

      {/* TextInput 1 */}
      <View style={[t.bgWhite, t.roundedLg, t.p4, t.border, t.borderBlue400, t.mB4]}>
        <Text style={[t.textGray600, t.mB2]}>{selectedLanguage1}</Text>
        <TextInput
          style={[t.textLg, t.textGray500]}
          value={inputText}
          editable={false}
        />
      </View>

      {/* TextInput 2 */}
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
        {/* Language Picker 1 */}
        <Picker
          selectedValue={selectedLanguage1}
          onValueChange={(itemValue) => setSelectedLanguage1(itemValue)}
          style={{ width: 150 }}
        >
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Spanish" value="Spanish" />
          <Picker.Item label="German" value="German" />
        </Picker>

        {/* Middle Buttons */}
        <View style={[t.flexRow, t.itemsCenter]}>
          <TouchableOpacity style={[t.bgBlue600, t.roundedFull, t.p3, t.mX2]}>
            <Icon name="microphone" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={[t.bgGray300, t.roundedFull, t.p3]}>
            <Icon name="times" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Language Picker 2 */}
        <Picker
          selectedValue={selectedLanguage2}
          onValueChange={(itemValue) => setSelectedLanguage2(itemValue)}
          style={{ width: 150 }}
        >
          <Picker.Item label="French" value="French" />
          <Picker.Item label="Italian" value="Italian" />
          <Picker.Item label="Chinese" value="Chinese" />
        </Picker>
      </View>

      {/* Navigation Button to TextToVoice */}
      <TouchableOpacity
        style={[t.bgBlue600, t.p4, t.roundedLg, t.mT8, t.itemsCenter]}
        onPress={() => navigation.navigate('TextToVoice')}
      >
        <Text style={[t.textWhite, t.textLg]}>Go to Text to Voice</Text>
      </TouchableOpacity>

    </View>
  );
}



