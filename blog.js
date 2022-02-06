import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Blog extends Component {

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
    <ScrollView data-layer="ad6ccc08-ed5c-4826-8512-776aa8bf60a0" style={styles.blog}>
        <View data-layer="506cb854-9190-4708-9932-cdf7773cb428" style={styles.blog_topMenu}>
            <View data-layer="bf6da977-57e5-4359-a5b6-7ee3955d2e93" style={styles.blog_topMenu_rectangle1}></View>
            <Text data-layer="a111163c-91fd-457d-a36e-8070f135b908" style={styles.blog_topMenu_companion}>Companion</Text>
            <Text data-layer="b6ce24ed-1fc5-4165-8897-ed013e99e466" style={styles.blog_topMenu_wellnessBlog}>WELLNESS BLOG</Text>
        </View>
        <Text data-layer="03e91c41-f9fd-457e-a6e0-2ef8fd6bd74d" style={styles.blog_mentalHealthResources}>Mental Health Resources
</Text>
        <View data-layer="0d4af475-f794-486a-bb2f-109ee454bbb9" style={styles.blog_healtharticlef3f7394e}>
            <Svg data-layer="0a4c943a-6e38-475a-911c-a1a1d5c07e54" style={styles.blog_healtharticlef3f7394e_path11e514026a} preserveAspectRatio="none" viewBox="0 0 210 264" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 14.0625 0 L 195.9375 0 C 203.7040100097656 0 210 6.715728759765625 210 15 L 210 249 C 210 257.2842712402344 203.7040100097656 264 195.9375 264 L 14.0625 264 C 6.295995712280273 264 0 257.2842712402344 0 249 L 0 15 C 0 6.715728759765625 6.295995712280273 0 14.0625 0 Z"  /></Svg>
            <Text data-layer="ff86a54f-f9fa-4ba1-b300-8495ffbad546" style={styles.blog_healtharticlef3f7394e_waysToChangeTheWayYouThinkInAPositiveWay}>Ways to change the way you think in a positive way</Text>
        </View>
        <View data-layer="56308e9f-ab06-4161-8ee5-f9c4ac159a71" style={styles.blog_healtharticle75aea276}>
            <Svg data-layer="74d173a8-7cac-497e-beec-666e760b88c2" style={styles.blog_healtharticle75aea276_path111437517e} preserveAspectRatio="none" viewBox="0 0 124 120" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.303570747375488 0 L 115.6964263916016 0 C 120.2823638916016 0 124 3.052603960037231 124 6.818181991577148 L 124 113.1818237304688 C 124 116.9474029541016 120.2823638916016 120 115.6964263916016 120 L 8.303570747375488 120 C 3.7176353931427 120 0 116.9474029541016 0 113.1818237304688 L 0 6.818181991577148 C 0 3.052603960037231 3.7176353931427 0 8.303570747375488 0 Z"  /></Svg>
            <View data-layer="11d80202-17ee-4ab3-998f-6812643bba86" style={styles.blog_healtharticle75aea276_component171}>
                <Text data-layer="f5635400-5de8-47b3-9bc4-b88884fd8684" style={styles.blog_healtharticle75aea276_component171_howToStayProductiveWhenTired}>How to stay 
productive when tired?</Text>
            </View>
        </View>
        <View data-layer="31221cbe-c74f-4e70-abb4-62a0d7dbb0d2" style={styles.blog_healtharticle5a9f738b}>
            <Svg data-layer="08fb2cc7-c72c-4764-a24a-ac9aa904f94a" style={styles.blog_healtharticle5a9f738b_path11bf468592} preserveAspectRatio="none" viewBox="0 0 124 124" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 8.303570747375488 0 L 115.6964263916016 0 C 120.2823638916016 0 124 3.154357433319092 124 7.045454502105713 L 124 116.9545440673828 C 124 120.8456420898438 120.2823638916016 124 115.6964263916016 124 L 8.303570747375488 124 C 3.7176353931427 124 0 120.8456420898438 0 116.9545440673828 L 0 7.045454502105713 C 0 3.154357433319092 3.7176353931427 0 8.303570747375488 0 Z"  /></Svg>
            <Text data-layer="ce0b7818-33e3-45f6-8c58-8725c35f56ac" style={styles.blog_healtharticle5a9f738b_cuteCats}>Cute Cats</Text>
        </View>
        <View data-layer="08f0ab08-a94b-47c8-a851-fa53c8c8f23b" style={styles.blog_healtharticle}>
            <Svg data-layer="80cf3ad2-d11f-4ce5-8d60-a64db8edba09" style={styles.blog_healtharticle_path11} preserveAspectRatio="none" viewBox="0 0 349 229" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 23.37053680419922 0 L 325.6294555664062 0 C 338.5366516113281 0 349 5.825386047363281 349 13.0113639831543 L 349 215.9886322021484 C 349 223.1746215820312 338.5366516113281 229 325.6294555664062 229 L 23.37053680419922 229 C 10.46334552764893 229 0 223.1746215820312 0 215.9886322021484 L 0 13.0113639831543 C 0 5.825386047363281 10.46334552764893 0 23.37053680419922 0 Z"  /></Svg>
            <Text data-layer="79406e9c-1f99-49ef-b062-e8987fa9d730" style={styles.blog_healtharticle_maintainingYourMentalHealthandHabitsThatWillHelpYouBoostIt}>Maintaining your mental health
and habits that will help you boost it.</Text>
        </View>

        {/* BOTTOM MENU BEGINS HERE */}
        <View data-layer="77bcf236-d30f-4c57-857b-480bf2f66da4" style={styles.blog_bottomMenu}>
            <View data-layer="dbc043a4-fb54-4a10-b98d-3e4653fa534e" style={styles.blog_bottomMenu_rectangle3}></View>
            <TouchableOpacity title="" onPress={() => this.props.navigation.navigate('Journal')}>  <Svg data-layer="2598d7e2-b82e-42a4-9141-d888ec023d83" style={styles.blog_bottomMenu_iconSimpleLivejournal} preserveAspectRatio="none" viewBox="0 0 50 50" fill="rgba(141, 141, 141, 1)"><SvgPath d="M 37.6875 30.61666679382324 C 34.53749847412109 32 32.00833129882812 34.54375076293945 30.64374732971191 37.69791412353516 L 39.53958129882812 39.53749847412109 L 37.69374847412109 30.61666488647461 L 37.6875 30.61666488647461 Z M 5.15625 17.32708168029785 L 0 12.18749904632568 C 2.34375 6.743750095367432 6.699999332427979 2.375 12.13124942779541 0 L 12.14374923706055 0 L 17.28749847412109 5.131249904632568 C 20.13749694824219 3.899999856948853 23.27916526794434 3.212499856948853 26.58541297912598 3.212499856948853 C 39.51457977294922 3.212499856948853 49.99999618530273 13.68541622161865 49.99999618530273 26.60624885559082 C 49.99999618530273 39.52708053588867 39.51457977294922 50 26.58541679382324 50 C 13.64791584014893 50 3.166666507720947 39.53333282470703 3.166666507720947 26.60624885559082 C 3.166666507720947 23.29166793823242 3.906249761581421 20.18749809265137 5.149999618530273 17.33333206176758 L 24.19791793823242 36.32083129882812 C 26.54166603088379 30.87707901000977 30.9020824432373 26.50833129882812 36.32917022705078 24.13333129882812 L 17.29791641235352 5.133331775665283 L 17.28125 5.133331775665283 C 11.85208415985107 7.508331775665283 7.500000953674316 11.88333225250244 5.150001525878906 17.32083129882812 L 5.156250953674316 17.32708168029785 Z"  /></Svg></TouchableOpacity>
            <TouchableOpacity title="" onPress={() => this.props.navigation.navigate('Hotline')}>  <Svg data-layer="a8d2b7b0-10db-4e08-8d65-2c6d7bb24080" style={styles.blog_bottomMenu_iconMaterialPhoneInTalk} preserveAspectRatio="none" viewBox="4.5 4.5 50 43.73907470703125" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 51.72222137451172 34.87435150146484 C 48.25 34.87435150146484 44.91666793823242 34.38836288452148 41.80555725097656 33.48928070068359 C 40.83333587646484 33.22198486328125 39.74999618530273 33.4163818359375 38.97222137451172 34.07247161865234 L 32.86111068725586 39.41835403442383 C 31.50900077819824 38.81650543212891 30.19880104064941 38.15211486816406 28.66407012939453 37.27260971069336 C 22.85543060302734 33.95019912719727 17.86755752563477 29.11906814575195 14.55555725097656 23.40499687194824 L 20.66666793823242 18.03481101989746 C 21.4444465637207 17.40302276611328 21.66666793823242 16.45534324645996 21.36111450195312 15.60486221313477 C 20.33333396911621 12.88332176208496 19.77777862548828 9.96738338470459 19.77777862548828 6.929947853088379 C 19.77777862548828 5.593477249145508 18.52777862548828 4.5 17.00000190734863 4.5 L 7.277777671813965 4.5 C 5.750000953674316 4.5 4.5 5.593477249145508 4.5 6.929947853088379 C 4.5 29.74715805053711 25.63888931274414 48.23906707763672 51.72222137451172 48.23906707763672 C 53.25000381469727 48.23906707763672 54.5 47.14559173583984 54.5 45.80912017822266 L 54.5 37.30429840087891 C 54.5 35.96782684326172 53.25000381469727 34.87435150146484 51.72222137451172 34.87435150146484 Z M 48.94444274902344 26.36953353881836 L 54.5 26.36953353881836 C 54.5 14.29269027709961 43.30555725097656 4.5 29.50000190734863 4.5 L 29.50000190734863 9.359896659851074 C 40.25 9.359896659851074 48.94444274902344 16.96563339233398 48.94444274902344 26.36953353881836 Z M 37.83333206176758 26.36953353881836 L 43.38888931274414 26.36953353881836 C 43.38888931274414 19.66287803649902 37.16666793823242 14.21979331970215 29.50000190734863 14.21979331970215 L 29.50000190734863 19.07968902587891 C 34.11111068725586 19.07968902587891 37.83333206176758 22.33581924438477 37.83333206176758 26.36953353881836 Z"  /></Svg></TouchableOpacity>
            <TouchableOpacity title="" onPress={() => this.props.navigation.navigate('Home')}>  <Svg data-layer="5e4f24d2-e157-4914-bbc8-a441f012b79b" style={styles.blog_bottomMenu_iconMetroHome} preserveAspectRatio="none" viewBox="2.570700168609619 2.861382246017456 50 50" fill="rgba(66, 66, 66, 1)"><SvgPath d="M 52.57070159912109 32.97177886962891 L 27.57070159912109 11.58220386505127 L 2.570700168609619 32.97188568115234 L 2.570700168609619 24.2509593963623 L 27.57070159912109 2.861382246017456 L 52.57070159912109 24.25106811523438 L 52.57070159912109 32.97177886962891 Z M 46.32070159912109 32.19439697265625 L 46.32070159912109 52.86138534545898 L 33.82070159912109 52.86138534545898 L 33.82070159912109 39.08339309692383 L 21.32069969177246 39.08339309692383 L 21.32069969177246 52.86138534545898 L 8.820699691772461 52.86138534545898 L 8.820699691772461 32.19439697265625 L 27.57070159912109 16.69416236877441 L 46.32070159912109 32.19439697265625 Z"  /></Svg></TouchableOpacity>
            <TouchableOpacity title="" onPress={() => this.props.navigation.navigate('Chatbot')}>  <Svg data-layer="0ab3b709-896f-4173-8924-5312bf5e5b1c" style={styles.blog_bottomMenu_iconMaterialChatBubble} preserveAspectRatio="none" viewBox="3 3 50 50" fill="rgba(29, 29, 29, 1)"><SvgPath d="M 48 3 L 8 3 C 5.249999523162842 3 3 5.249999523162842 3 8 L 3 53 L 13 43 L 48 43 C 50.75 43 53 40.75 53 38 L 53 8 C 53 5.249999523162842 50.75 3 48 3 Z"  /></Svg></TouchableOpacity>
 <View data-layer="d720c2b6-1c52-4976-8027-957a0581560c" style={styles.blog_bottomMenu_iconIonicLogoOctocat}>
                <Svg data-layer="f6570d0b-5512-4f90-be98-f7ee46207114" style={styles.blog_bottomMenu_iconIonicLogoOctocat_path2} preserveAspectRatio="none" viewBox="10.251562118530273 20.21484375 4.5069580078125 6.22265625" fill="rgba(247, 165, 102, 1)"><SvgPath d="M 12.54374980926514 20.21484375 C 11.90390586853027 20.21484375 11.35546875 20.51015663146973 10.91249942779541 21.11484336853027 C 10.46953105926514 21.71249961853027 10.25156211853027 22.45078086853027 10.25156211853027 23.32265663146973 C 10.25156211853027 24.20156288146973 10.4765625 24.93984413146973 10.91249942779541 25.53750038146973 C 11.35546779632568 26.13515663146973 11.89687442779541 26.4375 12.54374980926514 26.4375 C 13.14140605926514 26.4375 13.66171836853027 26.13515663146973 14.09765625 25.53750038146973 C 14.54062461853027 24.93984413146973 14.75859355926514 24.20156288146973 14.75859355926514 23.32265663146973 C 14.75859355926514 22.45078086853027 14.53359317779541 21.71249961853027 14.09765625 21.11484336853027 C 13.65468788146973 20.51015663146973 13.14140605926514 20.21484375 12.54374980926514 20.21484375 Z"  /></Svg>
                <Svg data-layer="a5fdd6ff-d36c-40e7-bbdd-5b100afa201d" style={styles.blog_bottomMenu_iconIonicLogoOctocat_path3} preserveAspectRatio="none" viewBox="21.241405487060547 20.21484375 4.5140380859375 6.22265625" fill="rgba(247, 165, 102, 1)"><SvgPath d="M 23.53359413146973 20.21484375 C 22.90078163146973 20.21484375 22.34531211853027 20.51015663146973 21.90234375 21.11484336853027 C 21.45937538146973 21.71249961853027 21.24140548706055 22.45078086853027 21.24140548706055 23.32265663146973 C 21.24140548706055 24.20156288146973 21.46640586853027 24.93984413146973 21.90234375 25.53750038146973 C 22.34531211853027 26.13515663146973 22.89374923706055 26.4375 23.53359413146973 26.4375 C 24.13125038146973 26.4375 24.65156364440918 26.13515663146973 25.09453201293945 25.53750038146973 C 25.53750038146973 24.93984413146973 25.75547027587891 24.20156288146973 25.75547027587891 23.32265663146973 C 25.75547027587891 22.45078086853027 25.53046989440918 21.71249961853027 25.09453201293945 21.11484336853027 C 24.65156173706055 20.51015663146973 24.13828086853027 20.21484375 23.53359413146973 20.21484375 Z"  /></Svg>
            </View>
        </View>
    </ScrollView>
    );
  }
}

Blog.propTypes = {

}

Blog.defaultProps = {

}


const styles = StyleSheet.create({
  "blog": {
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
  "blog_topMenu": {
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
  "blog_topMenu_rectangle1": {
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
  "blog_topMenu_companion": {
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
    "left": 102.5,
    "top": 48
  },
  "blog_topMenu_wellnessBlog": {
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
    "width": 256,
    "height": 33,
    "left": 66,
    "top": 92
  },
  "blog_mentalHealthResources": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 33,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Bodoni MT",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 371,
    "height": 73,
    "left": 21,
    "top": 172
  },
  "blog_healtharticlef3f7394e": {
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
    "width": 210,
    "height": 264,
    "left": 21,
    "top": 220
  },
  "blog_healtharticlef3f7394e_path11e514026a": {
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
    "width": 210,
    "height": 264,
    "left": 0,
    "top": 0
  },
  "blog_healtharticlef3f7394e_waysToChangeTheWayYouThinkInAPositiveWay": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(111, 104, 95, 1)",
    "fontSize": 35,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Calibri",
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
    "height": 231,
    "left": 19,
    "top": 17
  },
  "blog_healtharticle75aea276": {
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
    "width": 124,
    "height": 120,
    "left": 246,
    "top": 220
  },
  "blog_healtharticle75aea276_path111437517e": {
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
    "width": 124,
    "height": 120,
    "left": 0,
    "top": 0
  },
  "blog_healtharticle75aea276_component171": {
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
    "width": 97,
    "height": 103,
    "left": 14,
    "top": 9
  },
  "blog_healtharticle75aea276_component171_howToStayProductiveWhenTired": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(111, 104, 95, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Calibri",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 97,
    "height": 103,
    "left": 0,
    "top": 0
  },
  "blog_healtharticle5a9f738b": {
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
    "width": 124,
    "height": 124,
    "left": 246,
    "top": 360
  },
  "blog_healtharticle5a9f738b_path11bf468592": {
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
    "width": 124,
    "height": 124,
    "left": 0,
    "top": 0
  },
  "blog_healtharticle5a9f738b_cuteCats": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(111, 104, 95, 1)",
    "fontSize": 35,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Calibri",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 86,
    "height": 91,
    "left": 19,
    "top": 17
  },
  "blog_healtharticle": {
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
    "width": 349,
    "height": 229,
    "left": 21,
    "top": 504
  },
  "blog_healtharticle_path11": {
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
    "width": 349,
    "height": 229,
    "left": 0,
    "top": 0
  },
  "blog_healtharticle_maintainingYourMentalHealthandHabitsThatWillHelpYouBoostIt": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(111, 104, 95, 1)",
    "fontSize": 35,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Calibri",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 311,
    "height": 196,
    "left": 19,
    "top": 17
  },
  "blog_bottomMenu": {
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
  "blog_bottomMenu_rectangle3": {
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
  "blog_bottomMenu_iconSimpleLivejournal": {
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
  "blog_bottomMenu_iconMaterialPhoneInTalk": {
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
  "blog_bottomMenu_iconMetroHome": {
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
  "blog_bottomMenu_iconMaterialChatBubble": {
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
  "blog_bottomMenu_iconIonicLogoOctocat": {
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
  "blog_bottomMenu_iconIonicLogoOctocat_path2": {
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
  "blog_bottomMenu_iconIonicLogoOctocat_path3": {
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
  "blog_bottomMenu_iconIonicLogoOctocat_path4": {
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