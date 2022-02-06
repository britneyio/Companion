import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Hotline extends Component {

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
    <ScrollView data-layer="1d031757-da7a-4975-8467-43a4114e7b07" style={styles.hotline}>
        <View data-layer="609c58f5-abe4-4b3c-97dd-cafeb9cc78d4" style={styles.hotline_topMenu}>
            <View data-layer="e1acc05c-1f4a-4bf6-ade2-09e3a0989496" style={styles.hotline_topMenu_rectangle1}></View>
            <Text data-layer="98014127-9212-48cb-9e8e-1b575cadc1d5" style={styles.hotline_topMenu_companion}>Companion</Text>
            <Text data-layer="2c13b644-a9c3-4546-8e81-b48a6a0fc9cf" style={styles.hotline_topMenu_hotline8dc9f413}>HOTLINE</Text>
        </View>
        <View data-layer="6953fd6d-86e8-45da-8e30-afac9fd23898" style={styles.hotline_bottomMenu}>
            <View data-layer="7464558b-d543-4862-b5c2-3537ca7d19dd" style={styles.hotline_bottomMenu_group1}>
                <View data-layer="3c49de0c-4ac5-44db-814c-3a5e0f2a5b2f" style={styles.hotline_bottomMenu_group1_rectangle3}></View>
            </View>
            <Svg data-layer="c858b6e6-a4e1-4613-a08c-f2e476d2fa86" style={styles.hotline_bottomMenu_iconSimpleLivejournal} preserveAspectRatio="none" viewBox="0 0 50 50" fill="rgba(141, 141, 141, 1)"><SvgPath d="M 37.6875 30.61666679382324 C 34.53749847412109 32 32.00833129882812 34.54375076293945 30.64374732971191 37.69791412353516 L 39.53958129882812 39.53749847412109 L 37.69374847412109 30.61666488647461 L 37.6875 30.61666488647461 Z M 5.15625 17.32708168029785 L 0 12.18749904632568 C 2.34375 6.743750095367432 6.699999332427979 2.375 12.13124942779541 0 L 12.14374923706055 0 L 17.28749847412109 5.131249904632568 C 20.13749694824219 3.899999856948853 23.27916526794434 3.212499856948853 26.58541297912598 3.212499856948853 C 39.51457977294922 3.212499856948853 49.99999618530273 13.68541622161865 49.99999618530273 26.60624885559082 C 49.99999618530273 39.52708053588867 39.51457977294922 50 26.58541679382324 50 C 13.64791584014893 50 3.166666507720947 39.53333282470703 3.166666507720947 26.60624885559082 C 3.166666507720947 23.29166793823242 3.906249761581421 20.18749809265137 5.149999618530273 17.33333206176758 L 24.19791793823242 36.32083129882812 C 26.54166603088379 30.87707901000977 30.9020824432373 26.50833129882812 36.32917022705078 24.13333129882812 L 17.29791641235352 5.133331775665283 L 17.28125 5.133331775665283 C 11.85208415985107 7.508331775665283 7.500000953674316 11.88333225250244 5.150001525878906 17.32083129882812 L 5.156250953674316 17.32708168029785 Z"  /></Svg>
            <Svg data-layer="47f8acb3-1496-4a93-835e-ab9301e62385" style={styles.hotline_bottomMenu_iconMaterialPhoneInTalk} preserveAspectRatio="none" viewBox="4.5 4.5 50 43.73907470703125" fill="rgba(247, 165, 102, 1)"><SvgPath d="M 51.72222137451172 34.87435150146484 C 48.25 34.87435150146484 44.91666793823242 34.38836288452148 41.80555725097656 33.48928070068359 C 40.83333587646484 33.22198486328125 39.74999618530273 33.4163818359375 38.97222137451172 34.07247161865234 L 32.86111068725586 39.41835403442383 C 31.50900077819824 38.81650543212891 30.19880104064941 38.15211486816406 28.66407012939453 37.27260971069336 C 22.85543060302734 33.95019912719727 17.86755752563477 29.11906814575195 14.55555725097656 23.40499687194824 L 20.66666793823242 18.03481101989746 C 21.4444465637207 17.40302276611328 21.66666793823242 16.45534324645996 21.36111450195312 15.60486221313477 C 20.33333396911621 12.88332176208496 19.77777862548828 9.96738338470459 19.77777862548828 6.929947853088379 C 19.77777862548828 5.593477249145508 18.52777862548828 4.5 17.00000190734863 4.5 L 7.277777671813965 4.5 C 5.750000953674316 4.5 4.5 5.593477249145508 4.5 6.929947853088379 C 4.5 29.74715805053711 25.63888931274414 48.23906707763672 51.72222137451172 48.23906707763672 C 53.25000381469727 48.23906707763672 54.5 47.14559173583984 54.5 45.80912017822266 L 54.5 37.30429840087891 C 54.5 35.96782684326172 53.25000381469727 34.87435150146484 51.72222137451172 34.87435150146484 Z M 48.94444274902344 26.36953353881836 L 54.5 26.36953353881836 C 54.5 14.29269027709961 43.30555725097656 4.5 29.50000190734863 4.5 L 29.50000190734863 9.359896659851074 C 40.25 9.359896659851074 48.94444274902344 16.96563339233398 48.94444274902344 26.36953353881836 Z M 37.83333206176758 26.36953353881836 L 43.38888931274414 26.36953353881836 C 43.38888931274414 19.66287803649902 37.16666793823242 14.21979331970215 29.50000190734863 14.21979331970215 L 29.50000190734863 19.07968902587891 C 34.11111068725586 19.07968902587891 37.83333206176758 22.33581924438477 37.83333206176758 26.36953353881836 Z"  /></Svg>
            <Svg data-layer="eb7670c6-b253-4935-8ed8-c58a5744fdca" style={styles.hotline_bottomMenu_iconMetroHome} preserveAspectRatio="none" viewBox="2.570700168609619 2.861382246017456 50 50" fill="rgba(66, 66, 66, 1)"><SvgPath d="M 52.57070159912109 32.97177886962891 L 27.57070159912109 11.58220386505127 L 2.570700168609619 32.97188568115234 L 2.570700168609619 24.2509593963623 L 27.57070159912109 2.861382246017456 L 52.57070159912109 24.25106811523438 L 52.57070159912109 32.97177886962891 Z M 46.32070159912109 32.19439697265625 L 46.32070159912109 52.86138534545898 L 33.82070159912109 52.86138534545898 L 33.82070159912109 39.08339309692383 L 21.32069969177246 39.08339309692383 L 21.32069969177246 52.86138534545898 L 8.820699691772461 52.86138534545898 L 8.820699691772461 32.19439697265625 L 27.57070159912109 16.69416236877441 L 46.32070159912109 32.19439697265625 Z"  /></Svg>
            <Svg data-layer="2e2572d0-f72a-4a62-bbe9-f0b7179eb267" style={styles.hotline_bottomMenu_iconMaterialChatBubble} preserveAspectRatio="none" viewBox="3 3 50 50" fill="rgba(29, 29, 29, 1)"><SvgPath d="M 48 3 L 8 3 C 5.249999523162842 3 3 5.249999523162842 3 8 L 3 53 L 13 43 L 48 43 C 50.75 43 53 40.75 53 38 L 53 8 C 53 5.249999523162842 50.75 3 48 3 Z"  /></Svg>
            <View data-layer="6c139605-17b1-4ef0-befb-73fc78511790" style={styles.hotline_bottomMenu_iconIonicLogoOctocat}>
                <Svg data-layer="5644a05c-8477-494f-ba2d-399673777702" style={styles.hotline_bottomMenu_iconIonicLogoOctocat_path2} preserveAspectRatio="none" viewBox="10.251562118530273 20.21484375 4.507080078125 6.22265625" fill="rgba(141, 141, 141, 1)"><SvgPath d="M 12.54374980926514 20.21484375 C 11.90390586853027 20.21484375 11.35546875 20.51015663146973 10.91249942779541 21.11484336853027 C 10.46953105926514 21.71249961853027 10.25156211853027 22.45078086853027 10.25156211853027 23.32265663146973 C 10.25156211853027 24.20156288146973 10.4765625 24.93984413146973 10.91249942779541 25.53750038146973 C 11.35546779632568 26.13515663146973 11.89687442779541 26.4375 12.54374980926514 26.4375 C 13.14140605926514 26.4375 13.66171836853027 26.13515663146973 14.09765625 25.53750038146973 C 14.54062461853027 24.93984413146973 14.75859355926514 24.20156288146973 14.75859355926514 23.32265663146973 C 14.75859355926514 22.45078086853027 14.53359317779541 21.71249961853027 14.09765625 21.11484336853027 C 13.65468788146973 20.51015663146973 13.14140605926514 20.21484375 12.54374980926514 20.21484375 Z"  /></Svg>
                <Svg data-layer="ae24984e-9d11-4db4-aad7-fb840ce699ae" style={styles.hotline_bottomMenu_iconIonicLogoOctocat_path3} preserveAspectRatio="none" viewBox="21.241405487060547 20.21484375 4.513916015625 6.22265625" fill="rgba(141, 141, 141, 1)"><SvgPath d="M 23.53359413146973 20.21484375 C 22.90078163146973 20.21484375 22.34531211853027 20.51015663146973 21.90234375 21.11484336853027 C 21.45937538146973 21.71249961853027 21.24140548706055 22.45078086853027 21.24140548706055 23.32265663146973 C 21.24140548706055 24.20156288146973 21.46640586853027 24.93984413146973 21.90234375 25.53750038146973 C 22.34531211853027 26.13515663146973 22.89374923706055 26.4375 23.53359413146973 26.4375 C 24.13125038146973 26.4375 24.65156364440918 26.13515663146973 25.09453201293945 25.53750038146973 C 25.53750038146973 24.93984413146973 25.75547027587891 24.20156288146973 25.75547027587891 23.32265663146973 C 25.75547027587891 22.45078086853027 25.53046989440918 21.71249961853027 25.09453201293945 21.11484336853027 C 24.65156173706055 20.51015663146973 24.13828086853027 20.21484375 23.53359413146973 20.21484375 Z"  /></Svg>
                <Svg data-layer="340b811e-a557-4c43-9759-983e91ae0292" style={styles.hotline_bottomMenu_iconIonicLogoOctocat_path4} preserveAspectRatio="none" viewBox="2.25 4.499999046325684 50 50" fill="rgba(141, 141, 141, 1)"><SvgPath d="M 48.43303298950195 18.5625 L 48.43303298950195 18.5625 C 48.421875 18.5625 48.734375 16.70052146911621 48.46651458740234 13.45833110809326 C 48.22097778320312 10.21614551544189 47.62946319580078 7.234374046325684 46.66964340209961 4.499999046325684 C 46.66964340209961 4.499999046325684 46.17856979370117 4.604166030883789 45.24106979370117 4.877603054046631 C 44.30357360839844 5.151040077209473 42.77455520629883 5.697915554046631 40.67633819580078 6.804686546325684 C 38.61160659790039 7.911456108093262 36.43526458740234 9.382810592651367 34.16964340209961 11.16666603088379 C 32.62946319580078 10.65885257720947 30.33035659790039 10.39843654632568 27.25 10.39843654632568 C 24.31473350524902 10.39843654632568 22.015625 10.65885257720947 20.33035850524902 11.16666603088379 C 15.3526782989502 7.143229484558105 11.18973255157471 4.916666507720947 7.819196701049805 4.5 C 6.859375 7.234375 6.267857551574707 10.22916507720947 6.033481597900391 13.484375 C 5.765625 16.72656059265137 6.078125 18.60156059265137 6.078125 18.60156059265137 C 3.366071462631226 22.02604103088379 2.25 26.96093559265137 2.25 31.03645515441895 C 2.25 34.1875 2.328125 37.0390625 2.930803537368774 39.56510162353516 C 3.555803537368774 42.07812118530273 4.348214149475098 44.13541030883789 5.285714149475098 45.71093368530273 C 6.245535850524902 47.28645706176758 7.40625 48.67968368530273 8.8125 49.86458587646484 C 10.2075891494751 51.07551956176758 11.4910717010498 51.94791412353516 12.65178489685059 52.49479293823242 C 13.82365989685059 53.06770706176758 15.15178489685059 53.484375 16.66964340209961 53.78385543823242 C 18.15401649475098 54.09635925292969 19.28125 54.25260543823242 20.07365989685059 54.3046875 C 20.07365989685059 54.3046875 23.19865989685059 54.5 27.26115989685059 54.5 C 31.32365989685059 54.5 34.43749618530273 54.3046875 34.43749618530273 54.3046875 C 35.21874618530273 54.25260543823242 36.34597778320312 54.09635925292969 37.84151458740234 53.78385543823242 C 39.34821319580078 53.48437881469727 40.68749618530273 53.0546875 41.84821319580078 52.49479293823242 C 43.00892639160156 51.93489456176758 44.29241180419922 51.07551956176758 45.69865798950195 49.86458587646484 C 47.09375 48.69270706176758 48.25446319580078 47.29947662353516 49.21428298950195 45.71093368530273 C 50.15178298950195 44.13541793823242 50.94419860839844 42.07812118530273 51.56919860839844 39.56510162353516 C 52.18303680419922 37.0390625 52.25 34.17447280883789 52.25 31.0234317779541 C 52.25 27.078125 51.13392639160156 22.07812309265137 48.43303298950195 18.5625 Z M 41.13393020629883 48.97916030883789 C 38.02008819580078 50.68489074707031 33.44419479370117 51.375 27.37277030944824 51.375 L 27.13839721679688 51.375 C 21.06696891784668 51.375 16.49107551574707 50.69791412353516 13.43303966522217 48.97916030883789 C 10.36384296417236 47.2734375 8.823664665222168 43.75780868530273 8.823664665222168 38.47135162353516 C 8.823664665222168 35.30729293823242 9.783486366271973 32.74218368530273 11.66964721679688 30.77603530883789 C 12.49553966522217 29.9296817779541 13.50000476837158 29.34374237060547 14.7500057220459 28.9921817779541 C 15.98884391784668 28.65363883972168 17.13839721679688 28.62759780883789 18.2098274230957 28.66665840148926 C 19.25893402099609 28.7187442779541 20.73214912414551 28.9531192779541 22.59598731994629 29.12238883972168 C 24.47098731994629 29.29165840148926 25.8660774230957 29.51301383972168 27.26116561889648 29.51301383972168 C 28.56697082519531 29.51301383972168 30.2968807220459 29.25259780883789 33.07589721679688 28.9921817779541 C 35.86607360839844 28.73176574707031 37.93080520629883 28.60155487060547 39.27009201049805 28.86197280883789 C 40.64286041259766 29.12238883972168 41.83705520629883 29.66926574707031 42.85268020629883 30.77603530883789 C 44.82812881469727 32.83332824707031 45.82143020629883 35.39842987060547 45.82143020629883 38.47134780883789 C 45.81026458740234 43.75780868530273 44.23660659790039 47.2734375 41.13393020629883 48.97916030883789 Z"  /></Svg>
            </View>
        </View>
        <View data-layer="dd9b41d7-5085-4bdb-b39b-9b40bafc77e2" style={styles.hotline_hotlineText}>
            <Text data-layer="eda99e2c-089d-4d9f-9c42-220c66e79376" style={styles.hotline_hotlineText_nationalSuicidePreventionLifeline8002738255nacionalDePrevencionDelSuicidio8886289454nationalSuicidePreventionLifelineOptionsForDeafAndHardOfHearingForTtyUsersUseYourPreferredRelayServiceOrdial711Then1800}>National Suicide Prevention Lifeline 
(800) 273-8255

Nacional de Prevención del Suicidio 
(888) 628-9454

National Suicide Prevention Lifeline (Options for Deaf and Hard of Hearing) 
For TTY Users: 
Use your preferred relay service or
dial 711 then 1-800-273-8255

National Sexual Assault Hotline 
(800) 656-4673

Childhelp National Child Abuse Hotline 
(800) 422-4453

Substance Abuse and Mental Health Services Administration National Helpline 
(800) 662-4357</Text>
        </View>
    </ScrollView>
    );
  }
}

Hotline.propTypes = {

}

Hotline.defaultProps = {

}


const styles = StyleSheet.create({
  "hotline": {
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
  "hotline_topMenu": {
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
  "hotline_topMenu_rectangle1": {
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
  "hotline_topMenu_companion": {
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
  "hotline_topMenu_hotline8dc9f413": {
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
    "width": 130,
    "height": 33,
    "left": 129,
    "top": 92
  },
  "hotline_bottomMenu": {
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
  "hotline_bottomMenu_group1": {
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
  "hotline_bottomMenu_group1_rectangle3": {
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
  "hotline_bottomMenu_iconSimpleLivejournal": {
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
  "hotline_bottomMenu_iconMaterialPhoneInTalk": {
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
    "height": 43.74,
    "left": 91.3,
    "top": 25.63
  },
  "hotline_bottomMenu_iconMetroHome": {
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
  "hotline_bottomMenu_iconMaterialChatBubble": {
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
  "hotline_bottomMenu_iconIonicLogoOctocat": {
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
  "hotline_bottomMenu_iconIonicLogoOctocat_path2": {
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
  "hotline_bottomMenu_iconIonicLogoOctocat_path3": {
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
  "hotline_bottomMenu_iconIonicLogoOctocat_path4": {
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
  },
  "hotline_hotlineText": {
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
    "width": 386,
    "height": 666,
    "left": 4,
    "top": 144
  },
  "hotline_hotlineText_nationalSuicidePreventionLifeline8002738255nacionalDePrevencionDelSuicidio8886289454nationalSuicidePreventionLifelineOptionsForDeafAndHardOfHearingForTtyUsersUseYourPreferredRelayServiceOrdial711Then1800": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(111, 104, 95, 1)",
    "fontSize": 22,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Calibri",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 386,
    "height": 666,
    "left": 0,
    "top": 0
  }
});