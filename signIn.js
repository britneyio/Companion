import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class SignIn extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }



  render() {
    
    return (
    <ScrollView data-layer="36f28e1a-19c0-4f28-a127-b13c86d89278" style={styles.signIn}>
        <View data-layer="1bc52e58-0cc2-4123-9181-c2f11221d7e1" style={styles.signIn_rectangle18}></View>
        <View data-layer="96a9fcbe-2a21-47b8-b805-715241c5b28e" style={styles.signIn_rectangle19}></View>
        <Text data-layer="da5f6ac2-7602-4643-9bac-fabe62d4b9a5" style={styles.signIn_name}>Name</Text>
        <Text data-layer="86a21c8e-e421-4f3c-9eb3-c67e801cfab6" style={styles.signIn_password}>Password:</Text>
        <TouchableOpacity title="" onPress={() => this.props.navigation.navigate('Home')}>  <View data-layer="0dd97d94-20b2-47fc-93ba-08bccd19a1f0" style={styles.signIn_button}>
            <View data-layer="f6088554-f223-47cd-ba5f-72111078cbde" style={styles.signIn_button_rectangle20}></View>
            <Text data-layer="21cf9928-9a7b-4a3b-843d-04dcfab91f30" style={styles.signIn_button_signInf3db28e6}>Sign In</Text>
        </View></TouchableOpacity>
        <View data-layer="159540e1-6888-4136-98f9-b2791dd89869" style={styles.signIn_topMenu}>
            <View data-layer="da96baba-633a-45a2-a58b-6b45e2c854b3" style={styles.signIn_topMenu_rectangle1}></View>
            <Text data-layer="990d0424-f5cd-4af2-a68a-b7afb748f610" style={styles.signIn_topMenu_companion}>Companion</Text>
            <Text data-layer="37bdd420-d98d-4244-a341-40277f877b78" style={styles.signIn_topMenu_welcomeBack}>WELCOME BACK</Text>
        </View>
    </ScrollView>
    );
  }
}

SignIn.propTypes = {

}

SignIn.defaultProps = {

}


const styles = StyleSheet.create({
  "signIn": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(235, 210, 178, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 390,
    "height": 844,
    "left": 0,
    "top": 0
  },
  "signIn_rectangle18": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 276,
    "height": 57,
    "left": 57,
    "top": 288
  },
  "signIn_rectangle19": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 276,
    "height": 57,
    "left": 57,
    "top": 438
  },
  "signIn_name": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 77,
    "height": 35,
    "left": 57,
    "top": 243
  },
  "signIn_password": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 131,
    "height": 35,
    "left": 57,
    "top": 392
  },
  "signIn_button": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 221,
    "height": 83,
    "left": 85,
    "top": 539
  },
  "signIn_button_rectangle20": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(242, 143, 107, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 22,
    "borderTopRightRadius": 22,
    "borderBottomLeftRadius": 22,
    "borderBottomRightRadius": 22,
    "width": 221,
    "height": 83,
    "left": 0,
    "top": 0
  },
  "signIn_button_signInf3db28e6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 88,
    "height": 35,
    "left": 62,
    "top": 25
  },
  "signIn_topMenu": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 390,
    "height": 132,
    "left": 0,
    "top": 0
  },
  "signIn_topMenu_rectangle1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(252, 171, 110, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 390,
    "height": 132,
    "left": 0,
    "top": 0
  },
  "signIn_topMenu_companion": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Arial",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 153,
    "height": 33,
    "left": 104,
    "top": 48
  },
  "signIn_topMenu_welcomeBack": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 246,
    "height": 33,
    "left": 72,
    "top": 92
  }
});