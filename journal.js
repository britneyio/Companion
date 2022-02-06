import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, Button, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';


export default class Journal extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }




  render() {
    
    return (
    <ScrollView data-layer="87678d5a-975c-40d1-89e4-a77f5cca4048" style={styles.journal}>
        <View data-layer="b5abb970-e1b4-4681-890f-1a1623c7c33b" style={styles.journal_topMenu}>
            <View data-layer="b7492d47-9de7-4687-b5f4-e9e273a08efb" style={styles.journal_topMenu_rectangle1}></View>
            <Text data-layer="5a75fbef-bf92-426a-988b-41fd4b9c176b" style={styles.journal_topMenu_companion}>Companion</Text>
            <Text data-layer="550bb794-1a90-400d-9e30-b0e6712af836" style={styles.journal_topMenu_journald10a91c0}>JOURNAL</Text>
        </View>
        <Text data-layer="534c60dd-ca34-4ff0-a5e3-7b98e70cd9e6" style={styles.journal_todayIsXxxx20xx}>Today is xx/xx/20xx </Text>
        <Text data-layer="34f80922-6b1f-424c-8b42-9fe28c2a5258" style={styles.journal_youHavehaventWrittenToday}>You have/haven’t written today!</Text>
        <View data-layer="6ba14084-c58d-4023-85fc-e2613df9d46f" style={styles.journal_dailyPrompte9242fe5}>
            <View data-layer="d88612c3-efee-463a-b3ca-0e1d683fa2c9" style={styles.journal_dailyPrompte9242fe5_rectangle4e3978ce1}></View>
            <Text data-layer="f485dd14-0026-4fde-8a4d-c1dd8f6cefd7" style={styles.journal_dailyPrompte9242fe5_dailyPromptfe1ee261}>Daily Prompt</Text>
        </View>
        <View data-layer="b0ec54ec-cab2-44b7-b9dc-64f1d3c4ae05" style={styles.journal_dailyPrompt}>
            <View data-layer="30a6e939-f70e-4ddd-91da-44f86d646d2d" style={styles.journal_dailyPrompt_rectangle4}></View>
           <TouchableOpacity
           title=""
           onPress={() => this.props.navigation.navigate('Journalentry')}
           >
           <Text data-layer="4a424d9f-6e95-47ca-af6e-075c5f0299af" style={styles.journal_dailyPrompt_writeAnEntry}>Write an entry...</Text>
       </TouchableOpacity>
        </View>
        <Text data-layer="f932daf2-6272-4335-8aea-7ba09ba28e93" style={styles.journal_pastEntries}>Past Entries
</Text>
        <View data-layer="b4554fd7-52e2-4ee2-aae9-384f2c019940" style={styles.journal_rectangle5}></View>
        <View data-layer="95d32426-1d2a-4c27-8a55-137760a7bd1a" style={styles.journal_rectangle8}></View>

        {/* BOTTOM MENU STARTS HERE */}
        <View data-layer="96c1315a-afb6-4206-a035-ef146abb2d6f" style={styles.journal_bottomMenu}>
            <View data-layer="21a83397-35d5-4696-96fc-7dd21b249b71" style={styles.journal_bottomMenu_group1}>
                <View data-layer="12bf55ab-5c6a-47ec-996f-bf9d4f021890" style={styles.journal_bottomMenu_group1_rectangle3}></View>
            </View>
         <Svg data-layer="760ea0d3-6901-4f7b-b183-aadd2125f998" style={styles.journal_bottomMenu_iconSimpleLivejournal} preserveAspectRatio="none" viewBox="0 0 50 50" fill="rgba(247, 165, 102, 1)"><SvgPath d="M 37.6875 30.61666679382324 C 34.53749847412109 32 32.00833129882812 34.54375076293945 30.64374732971191 37.69791412353516 L 39.53958129882812 39.53749847412109 L 37.69374847412109 30.61666488647461 L 37.6875 30.61666488647461 Z M 5.15625 17.32708168029785 L 0 12.18749904632568 C 2.34375 6.743750095367432 6.699999332427979 2.375 12.13124942779541 0 L 12.14374923706055 0 L 17.28749847412109 5.131249904632568 C 20.13749694824219 3.899999856948853 23.27916526794434 3.212499856948853 26.58541297912598 3.212499856948853 C 39.51457977294922 3.212499856948853 49.99999618530273 13.68541622161865 49.99999618530273 26.60624885559082 C 49.99999618530273 39.52708053588867 39.51457977294922 50 26.58541679382324 50 C 13.64791584014893 50 3.166666507720947 39.53333282470703 3.166666507720947 26.60624885559082 C 3.166666507720947 23.29166793823242 3.906249761581421 20.18749809265137 5.149999618530273 17.33333206176758 L 24.19791793823242 36.32083129882812 C 26.54166603088379 30.87707901000977 30.9020824432373 26.50833129882812 36.32917022705078 24.13333129882812 L 17.29791641235352 5.133331775665283 L 17.28125 5.133331775665283 C 11.85208415985107 7.508331775665283 7.500000953674316 11.88333225250244 5.150001525878906 17.32083129882812 L 5.156250953674316 17.32708168029785 Z"  /></Svg>
            <TouchableOpacity title="" onPress={() => this.props.navigation.navigate('Hotline')}>  <Svg data-layer="b96aba4b-9626-4e71-b58d-ba70d1c5d7b8" style={styles.journal_bottomMenu_iconMaterialPhoneInTalk} preserveAspectRatio="none" viewBox="4.5 4.5 50 43.73907470703125" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 51.72222137451172 34.87435150146484 C 48.25 34.87435150146484 44.91666793823242 34.38836288452148 41.80555725097656 33.48928070068359 C 40.83333587646484 33.22198486328125 39.74999618530273 33.4163818359375 38.97222137451172 34.07247161865234 L 32.86111068725586 39.41835403442383 C 31.50900077819824 38.81650543212891 30.19880104064941 38.15211486816406 28.66407012939453 37.27260971069336 C 22.85543060302734 33.95019912719727 17.86755752563477 29.11906814575195 14.55555725097656 23.40499687194824 L 20.66666793823242 18.03481101989746 C 21.4444465637207 17.40302276611328 21.66666793823242 16.45534324645996 21.36111450195312 15.60486221313477 C 20.33333396911621 12.88332176208496 19.77777862548828 9.96738338470459 19.77777862548828 6.929947853088379 C 19.77777862548828 5.593477249145508 18.52777862548828 4.5 17.00000190734863 4.5 L 7.277777671813965 4.5 C 5.750000953674316 4.5 4.5 5.593477249145508 4.5 6.929947853088379 C 4.5 29.74715805053711 25.63888931274414 48.23906707763672 51.72222137451172 48.23906707763672 C 53.25000381469727 48.23906707763672 54.5 47.14559173583984 54.5 45.80912017822266 L 54.5 37.30429840087891 C 54.5 35.96782684326172 53.25000381469727 34.87435150146484 51.72222137451172 34.87435150146484 Z M 48.94444274902344 26.36953353881836 L 54.5 26.36953353881836 C 54.5 14.29269027709961 43.30555725097656 4.5 29.50000190734863 4.5 L 29.50000190734863 9.359896659851074 C 40.25 9.359896659851074 48.94444274902344 16.96563339233398 48.94444274902344 26.36953353881836 Z M 37.83333206176758 26.36953353881836 L 43.38888931274414 26.36953353881836 C 43.38888931274414 19.66287803649902 37.16666793823242 14.21979331970215 29.50000190734863 14.21979331970215 L 29.50000190734863 19.07968902587891 C 34.11111068725586 19.07968902587891 37.83333206176758 22.33581924438477 37.83333206176758 26.36953353881836 Z"  /></Svg> </TouchableOpacity>
            <TouchableOpacity title="" onPress={() => this.props.navigation.navigate('Home')}>  <Svg data-layer="c4666aca-a2f5-4b58-831d-e9962ad6d24b" style={styles.journal_bottomMenu_iconMetroHome} preserveAspectRatio="none" viewBox="2.570700168609619 2.861382246017456 50 50" fill="rgba(66, 66, 66, 1)"><SvgPath d="M 52.57070159912109 32.97177886962891 L 27.57070159912109 11.58220386505127 L 2.570700168609619 32.97188568115234 L 2.570700168609619 24.2509593963623 L 27.57070159912109 2.861382246017456 L 52.57070159912109 24.25106811523438 L 52.57070159912109 32.97177886962891 Z M 46.32070159912109 32.19439697265625 L 46.32070159912109 52.86138534545898 L 33.82070159912109 52.86138534545898 L 33.82070159912109 39.08339309692383 L 21.32069969177246 39.08339309692383 L 21.32069969177246 52.86138534545898 L 8.820699691772461 52.86138534545898 L 8.820699691772461 32.19439697265625 L 27.57070159912109 16.69416236877441 L 46.32070159912109 32.19439697265625 Z"  /></Svg> </TouchableOpacity>
          <TouchableOpacity title="" onPress={() => this.props.navigation.navigate('Chatbot')}>  <Svg data-layer="2381f487-d23d-4bdf-8a96-d399718a1727" style={styles.journal_bottomMenu_iconMaterialChatBubble} preserveAspectRatio="none" viewBox="3 3 50 50" fill="rgba(29, 29, 29, 1)"><SvgPath d="M 48 3 L 8 3 C 5.249999523162842 3 3 5.249999523162842 3 8 L 3 53 L 13 43 L 48 43 C 50.75 43 53 40.75 53 38 L 53 8 C 53 5.249999523162842 50.75 3 48 3 Z"  /></Svg> </TouchableOpacity>
          <TouchableOpacity title="" onPress={() => this.props.navigation.navigate('Blog')}>  <View data-layer="d289da19-6abe-4531-87ff-dded65444d07" style={styles.journal_bottomMenu_iconIonicLogoOctocat}>
                <Svg data-layer="bce6a312-4f73-4a5c-96ae-832920135557" style={styles.journal_bottomMenu_iconIonicLogoOctocat_path2} preserveAspectRatio="none" viewBox="10.251562118530273 20.21484375 4.50701904296875 6.22265625" fill="rgba(146, 146, 146, 1)"><SvgPath d="M 12.54374980926514 20.21484375 C 11.90390586853027 20.21484375 11.35546875 20.51015663146973 10.91249942779541 21.11484336853027 C 10.46953105926514 21.71249961853027 10.25156211853027 22.45078086853027 10.25156211853027 23.32265663146973 C 10.25156211853027 24.20156288146973 10.4765625 24.93984413146973 10.91249942779541 25.53750038146973 C 11.35546779632568 26.13515663146973 11.89687442779541 26.4375 12.54374980926514 26.4375 C 13.14140605926514 26.4375 13.66171836853027 26.13515663146973 14.09765625 25.53750038146973 C 14.54062461853027 24.93984413146973 14.75859355926514 24.20156288146973 14.75859355926514 23.32265663146973 C 14.75859355926514 22.45078086853027 14.53359317779541 21.71249961853027 14.09765625 21.11484336853027 C 13.65468788146973 20.51015663146973 13.14140605926514 20.21484375 12.54374980926514 20.21484375 Z"  /></Svg>
                <Svg data-layer="60f6253d-a1d7-468c-85d4-e4622ab746b2" style={styles.journal_bottomMenu_iconIonicLogoOctocat_path3} preserveAspectRatio="none" viewBox="21.241405487060547 20.21484375 4.51409912109375 6.22265625" fill="rgba(146, 146, 146, 1)"><SvgPath d="M 23.53359413146973 20.21484375 C 22.90078163146973 20.21484375 22.34531211853027 20.51015663146973 21.90234375 21.11484336853027 C 21.45937538146973 21.71249961853027 21.24140548706055 22.45078086853027 21.24140548706055 23.32265663146973 C 21.24140548706055 24.20156288146973 21.46640586853027 24.93984413146973 21.90234375 25.53750038146973 C 22.34531211853027 26.13515663146973 22.89374923706055 26.4375 23.53359413146973 26.4375 C 24.13125038146973 26.4375 24.65156364440918 26.13515663146973 25.09453201293945 25.53750038146973 C 25.53750038146973 24.93984413146973 25.75547027587891 24.20156288146973 25.75547027587891 23.32265663146973 C 25.75547027587891 22.45078086853027 25.53046989440918 21.71249961853027 25.09453201293945 21.11484336853027 C 24.65156173706055 20.51015663146973 24.13828086853027 20.21484375 23.53359413146973 20.21484375 Z"  /></Svg>
            </View></TouchableOpacity>
        </View>
    </ScrollView>
    );
  }
}

Journal.propTypes = {

}

Journal.defaultProps = {

}


const styles = StyleSheet.create({
  "journal": {
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
  "journal_topMenu": {
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
  "journal_topMenu_rectangle1": {
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
  "journal_topMenu_companion": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 25,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Lucida Calligraphy",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 151,
    "height": 34,
    "left": 120,
    "top": 49
  },
  "journal_topMenu_journald10a91c0": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Gill Sans",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 132,
    "height": 35,
    "left": 128,
    "top": 91
  },
  "journal_todayIsXxxx20xx": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 39,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Helvetica",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 347,
    "height": 39,
    "left": 19,
    "top": 179
  },
  "journal_youHavehaventWrittenToday": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 23,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Helvetica",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 319,
    "height": 23,
    "left": 29,
    "top": 244
  },
  "journal_dailyPrompte9242fe5": {
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
    "width": 342,
    "height": 157,
    "left": 27,
    "top": 289
  },
  "journal_dailyPrompte9242fe5_rectangle4e3978ce1": {
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
    "borderTopLeftRadius": 18,
    "borderTopRightRadius": 18,
    "borderBottomLeftRadius": 18,
    "borderBottomRightRadius": 18,
    "width": 342,
    "height": 157,
    "left": 0,
    "top": 0
  },
  "journal_dailyPrompte9242fe5_dailyPromptfe1ee261": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Helvetica",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 172,
    "height": 30,
    "left": 82,
    "top": 68
  },
  "journal_dailyPrompt": {
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
    "width": 342,
    "height": 59,
    "left": 27,
    "top": 460
  },
  "journal_dailyPrompt_rectangle4": {
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
    "borderTopLeftRadius": 18,
    "borderTopRightRadius": 18,
    "borderBottomLeftRadius": 18,
    "borderBottomRightRadius": 18,
    "width": 342,
    "height": 59,
    "left": 0,
    "top": 0
  },
  "journal_dailyPrompt_writeAnEntry": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Helvetica",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 209,
    "height": 30,
    "left": 67,
    "top": 19
  },
  "journal_pastEntries": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 23,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Helvetica",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 124,
    "height": 51,
    "left": 27,
    "top": 540
  },
  "journal_rectangle5": {
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
    "width": 122,
    "height": 162,
    "left": 29,
    "top": 571
  },
  "journal_rectangle8": {
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
    "width": 122,
    "height": 162,
    "left": 170,
    "top": 571
  },
  "journal_bottomMenu": {
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
    "height": 95,
    "left": 0,
    "top": 749
  },
  "journal_bottomMenu_group1": {
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
    "height": 95,
    "left": 0,
    "top": 0
  },
  "journal_bottomMenu_group1_rectangle3": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 390,
    "height": 95,
    "left": 0,
    "top": 0
  },
  "journal_bottomMenu_iconSimpleLivejournal": {
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
    "width": 50,
    "height": 50,
    "left": 14,
    "top": 22.43
  },
  "journal_bottomMenu_iconMaterialPhoneInTalk": {
    "opacity": 0.5,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 50,
    "height": 43.74,
    "left": 91.3,
    "top": 25.63
  },
  "journal_bottomMenu_iconMetroHome": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 50,
    "height": 50,
    "left": 170,
    "top": 22.5
  },
  "journal_bottomMenu_iconMaterialChatBubble": {
    "opacity": 0.5,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 50,
    "height": 50,
    "left": 249.15,
    "top": 26
  },
  "journal_bottomMenu_iconIonicLogoOctocat": {
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
    "width": 50,
    "height": 50,
    "left": 318,
    "top": 24
  },
  "journal_bottomMenu_iconIonicLogoOctocat_path2": {
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
    "width": 4.51,
    "height": 6.22,
    "left": 13.49,
    "top": 33.11
  },
  "journal_bottomMenu_iconIonicLogoOctocat_path3": {
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
    "width": 4.51,
    "height": 6.22,
    "left": 32.01,
    "top": 33.11
  },
  "journal_bottomMenu_iconIonicLogoOctocat_path4": {
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
    "width": 50,
    "height": 50,
    "left": 0,
    "top": 0
  }
});