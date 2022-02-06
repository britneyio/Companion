import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Journalentry extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="297d79be-273f-4abd-973e-797d99c2f5e6" style={styles.journalentry}>
        <View data-layer="9a55297b-837e-4a40-837a-49fdd5d90e52" style={styles.journalentry_topMenu}>
            <View data-layer="ab8c8c57-f20e-4c97-82f3-38b81b124b53" style={styles.journalentry_topMenu_rectangle1}></View>
            <Text data-layer="abd2fb46-5e23-4f2d-9f69-f87fdcea17e3" style={styles.journalentry_topMenu_companion}>Companion</Text>
            <Text data-layer="308b330b-cccb-4cc3-b0bd-335c72482384" style={styles.journalentry_topMenu_journal}>JOURNAL</Text>
        </View>
        <View data-layer="9f030b0f-18fa-43ef-a215-e668e8fe102a" style={styles.journalentry_journalTopBack}>
            <TouchableOpacity title="" onPress={() => this.props.navigation.navigate('Journal')}>  <Svg data-layer="422bc78f-b821-4474-b99c-56c1d1fb0670" style={styles.journalentry_journalTopBack_path9} preserveAspectRatio="none" viewBox="0 0 390 95" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 0 0 L 390 0 L 390 95 L 0 95 L 0 0 Z"  /></Svg></TouchableOpacity>
            <Text data-layer="5a0717b5-e63d-4c21-8aeb-173ef4c4c47c" style={styles.journalentry_journalTopBack_titleOfJournalEntry}>Title of Journal entry</Text>
            <Text data-layer="2a63349a-34e1-4b61-b3ff-0acfb2425b5a" style={styles.journalentry_journalTopBack_date}>Date
</Text>
            <Svg data-layer="d7a74a64-480b-4091-b8ad-ebfd7e332783" style={styles.journalentry_journalTopBack_iconOpenArrowCircleLeft} preserveAspectRatio="none" viewBox="0 0 36 36" fill="rgba(141, 141, 141, 1)"><SvgPath d="M 18 0 C 8.055000305175781 0 0 8.055000305175781 0 18 C 0 27.94499969482422 8.055000305175781 36 18 36 C 27.94499969482422 36 36 27.94499969482422 36 18 C 36 8.055000305175781 27.94499969482422 0 18 0 Z M 18 4.5 L 18 13.5 L 31.5 13.5 L 31.5 22.5 L 18 22.5 L 18 31.5 L 4.5 18 L 18 4.5 Z"  /></Svg>
        </View>
    </ScrollView>

      // <TextInput
      // value={note}
      // onChangeText={setNote}
      // style={{ color: "#fff", fontSize: 22 }}
      // multiline={true}
      // autoFocus
      // selectionColor="#fff"
      // />
    );
  }
}

Journalentry.propTypes = {

}

Journalentry.defaultProps = {

}


const styles = StyleSheet.create({
  "journalentry": {
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
  "journalentry_topMenu": {
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
  "journalentry_topMenu_rectangle1": {
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
  "journalentry_topMenu_companion": {
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
  "journalentry_topMenu_journal": {
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
    "width": 140,
    "height": 33,
    "left": 125,
    "top": 92
  },
  "journalentry_journalTopBack": {
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
    "height": 125,
    "left": 0,
    "top": 132
  },
  "journalentry_journalTopBack_path9": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 390,
    "height": 95,
    "left": 0,
    "top": 0
  },
  "journalentry_journalTopBack_titleOfJournalEntry": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(141, 141, 141, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": ".AppleSystemUIFont",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 263,
    "height": 35,
    "left": 64,
    "top": 11
  },
  "journalentry_journalTopBack_date": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(141, 141, 141, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": ".AppleSystemUIFont",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 61,
    "height": 70,
    "left": 64,
    "top": 48
  },
  "journalentry_journalTopBack_iconOpenArrowCircleLeft": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 36,
    "height": 36,
    "left": 14,
    "top": 30
  }
});