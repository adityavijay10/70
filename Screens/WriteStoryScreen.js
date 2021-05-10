import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
export default class WriteStoryScreen extends Component{
  render(){
    return(
      <View>
<Text style={styles.label}>TITLE</Text>
<TextInput
    style={styles.formTextInput}
    placeholder ={"TITLE"}
  />  
  <Text style={styles.label}>AUTHOR</Text>
  <TextInput
  style={styles.formTextInput}
  placeholder ={"AUTHOR"}
 
/>  
<Text style={styles.label}>Write story</Text>
  <TextInput
  style={styles.formTextInput}
  placeholder ={"Write story"}
   multiline={true}
/> 
<TouchableOpacity>
<Text style={styles.buttonText}>SUBMIT</Text>
</TouchableOpacity>
</View>
    )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6fc0b8"
  },
  formInput: {
    width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "grey",
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14)
  },
label: {
  fontSize: RFValue(13),
  color: "#717D7E",
  fontWeight: "bold",
  paddingLeft: RFValue(10),
  marginLeft: RFValue(20)
}
});
