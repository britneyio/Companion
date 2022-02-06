import { LitElement, html } from '@polymer/lit-element';
import { BlogsResearchInfoStyle } from './blogsResearchInfo.style';

export class BlogsResearchInfo extends LitElement {
  static get properties(){
    return {
      
      
    };
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
  }

  
  

  constructor(){
    super();

    
    
    
  }

  handleKeyPress(e) {
      if (e.key === 'Enter') {
        let name;
        let id;
        let index = -1;
        const value = e.target.value;
        if (e.target.name.search("::") > -1) {
            const varCount = e.target.name.split("::").length;
            if (varCount === 2) {
                name = e.target.name.split("::")[0];
                id = e.target.name.split("::")[1];
            } else if (varCount === 3) {
                name = e.target.name.split("::")[0];
                index = e.target.name.split("::")[1];
                id = e.target.name.split("::")[2];
            }
        } else {
            name = e.target.name;
        }
        this.dispatchEvent(new CustomEvent(`${name}:enter`, {
            bubbles: true,
            detail: {
                type: "textinput",
                name: name,
                value: value,
                index: index,
                id: id
          }
        }));
      }
      let name;
      let id;
      let index = -1;
      const value = e.key;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:keypress`, {
          bubbles: true,
          detail: {
              type: "textinput",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChange(e) {
    let name;
    let id;
    let index = -1;
    const value = e.target.value;
    if (e.target.name.search("::") > -1) {
        const varCount = e.target.name.split("::").length;
        if (varCount === 2) {
            name = e.target.name.split("::")[0];
            id = e.target.name.split("::")[1];
        } else if (varCount === 3) {
            name = e.target.name.split("::")[0];
            index = e.target.name.split("::")[1];
            id = e.target.name.split("::")[2];
        }
    } else {
        name = e.target.name;
    }
    this.dispatchEvent(new CustomEvent(`${name}:change`, {
        bubbles: true,
        detail: {
            type: "textinput",
            name: name,
            value: value,
            index: index,
            id: id
        }
    }));
  }

  handleClick(target, owner, e) {
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
            this[`${owner}SelectedIndex`] = index;
            this.requestUpdate();
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:click`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOver(target, owner, e) {
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
    this.dispatchEvent(new CustomEvent(`${name}:mouseover`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOut(target, owner, e) {
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
    this.dispatchEvent(new CustomEvent(`${name}:mouseout`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleChangeCheckbox(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "checkbox",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeRadio(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "radio",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeRadioGroup(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.value;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      // this.state[groupName] = value;
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "radiogroup",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeSelect(e) {
      let name;
      let id;
      const value = e.target.value;
      if (value !== "selectdefault") {
          if (e.target.id.search("::") > -1) {
              id = e.target.id.split("::")[1];
          }
          name = e.target.name;
          // this.state[groupName] = value;
          this.dispatchEvent(new CustomEvent(`${name}:change`, {
              bubbles: true,
              detail: {
                  type: "select",
                  name: name,
                  value: value,
                  id: id
              }
          }));
      }
  }

  render(){
    
    return html`
    <style>
      ${BlogsResearchInfoStyle}
    </style>
    <div data-layer="dd6e8698-5142-4089-8581-678752ee54dd" class="blogsResearchInfo">        <div data-layer="cfa700df-9118-4c95-a240-bf8fa4c6bddc" class="mentalHealthResources">Mental Health Resources<br /></div>
        <div data-layer="2d147ef8-aa57-4ab7-854c-742f49820b1d" class="bottomMenu">            <div data-layer="0b7ead34-903b-4c0c-ba23-eb167fdca8ba" class="rectangle3"></div>
            <svg data-layer="0c622d09-91c6-41c0-bf9e-662b1fc81947" preserveAspectRatio="none" viewBox="0 0 50 50" class="iconSimpleLivejournal"><path d="M 37.6875 30.61666679382324 C 34.53749847412109 32 32.00833129882812 34.54375076293945 30.64374732971191 37.69791412353516 L 39.53958129882812 39.53749847412109 L 37.69374847412109 30.61666488647461 L 37.6875 30.61666488647461 Z M 5.15625 17.32708168029785 L 0 12.18749904632568 C 2.34375 6.743750095367432 6.699999332427979 2.375 12.13124942779541 0 L 12.14374923706055 0 L 17.28749847412109 5.131249904632568 C 20.13749694824219 3.899999856948853 23.27916526794434 3.212499856948853 26.58541297912598 3.212499856948853 C 39.51457977294922 3.212499856948853 49.99999618530273 13.68541622161865 49.99999618530273 26.60624885559082 C 49.99999618530273 39.52708053588867 39.51457977294922 50 26.58541679382324 50 C 13.64791584014893 50 3.166666507720947 39.53333282470703 3.166666507720947 26.60624885559082 C 3.166666507720947 23.29166793823242 3.906249761581421 20.18749809265137 5.149999618530273 17.33333206176758 L 24.19791793823242 36.32083129882812 C 26.54166603088379 30.87707901000977 30.9020824432373 26.50833129882812 36.32917022705078 24.13333129882812 L 17.29791641235352 5.133331775665283 L 17.28125 5.133331775665283 C 11.85208415985107 7.508331775665283 7.500000953674316 11.88333225250244 5.150001525878906 17.32083129882812 L 5.156250953674316 17.32708168029785 Z"  /></svg>
            <svg data-layer="c8608a53-6233-46a1-ac96-2cd16b351d79" preserveAspectRatio="none" viewBox="4.5 4.5 50 43.73907470703125" class="iconMaterialPhoneInTalk"><path d="M 51.72222137451172 34.87435150146484 C 48.25 34.87435150146484 44.91666793823242 34.38836288452148 41.80555725097656 33.48928070068359 C 40.83333587646484 33.22198486328125 39.74999618530273 33.4163818359375 38.97222137451172 34.07247161865234 L 32.86111068725586 39.41835403442383 C 31.50900077819824 38.81650543212891 30.19880104064941 38.15211486816406 28.66407012939453 37.27260971069336 C 22.85543060302734 33.95019912719727 17.86755752563477 29.11906814575195 14.55555725097656 23.40499687194824 L 20.66666793823242 18.03481101989746 C 21.4444465637207 17.40302276611328 21.66666793823242 16.45534324645996 21.36111450195312 15.60486221313477 C 20.33333396911621 12.88332176208496 19.77777862548828 9.96738338470459 19.77777862548828 6.929947853088379 C 19.77777862548828 5.593477249145508 18.52777862548828 4.5 17.00000190734863 4.5 L 7.277777671813965 4.5 C 5.750000953674316 4.5 4.5 5.593477249145508 4.5 6.929947853088379 C 4.5 29.74715805053711 25.63888931274414 48.23906707763672 51.72222137451172 48.23906707763672 C 53.25000381469727 48.23906707763672 54.5 47.14559173583984 54.5 45.80912017822266 L 54.5 37.30429840087891 C 54.5 35.96782684326172 53.25000381469727 34.87435150146484 51.72222137451172 34.87435150146484 Z M 48.94444274902344 26.36953353881836 L 54.5 26.36953353881836 C 54.5 14.29269027709961 43.30555725097656 4.5 29.50000190734863 4.5 L 29.50000190734863 9.359896659851074 C 40.25 9.359896659851074 48.94444274902344 16.96563339233398 48.94444274902344 26.36953353881836 Z M 37.83333206176758 26.36953353881836 L 43.38888931274414 26.36953353881836 C 43.38888931274414 19.66287803649902 37.16666793823242 14.21979331970215 29.50000190734863 14.21979331970215 L 29.50000190734863 19.07968902587891 C 34.11111068725586 19.07968902587891 37.83333206176758 22.33581924438477 37.83333206176758 26.36953353881836 Z"  /></svg>
            <svg data-layer="d549e22a-3596-4570-9ac9-3d5cc70f977e" preserveAspectRatio="none" viewBox="2.570700168609619 2.861382246017456 50 50" class="iconMetroHome"><path d="M 52.57070159912109 32.97177886962891 L 27.57070159912109 11.58220386505127 L 2.570700168609619 32.97188568115234 L 2.570700168609619 24.2509593963623 L 27.57070159912109 2.861382246017456 L 52.57070159912109 24.25106811523438 L 52.57070159912109 32.97177886962891 Z M 46.32070159912109 32.19439697265625 L 46.32070159912109 52.86138534545898 L 33.82070159912109 52.86138534545898 L 33.82070159912109 39.08339309692383 L 21.32069969177246 39.08339309692383 L 21.32069969177246 52.86138534545898 L 8.820699691772461 52.86138534545898 L 8.820699691772461 32.19439697265625 L 27.57070159912109 16.69416236877441 L 46.32070159912109 32.19439697265625 Z"  /></svg>
            <svg data-layer="1f0b1aba-5302-4e79-b29e-6b281329755c" preserveAspectRatio="none" viewBox="3 3 50 50" class="iconMaterialChatBubble"><path d="M 48 3 L 8 3 C 5.249999523162842 3 3 5.249999523162842 3 8 L 3 53 L 13 43 L 48 43 C 50.75 43 53 40.75 53 38 L 53 8 C 53 5.249999523162842 50.75 3 48 3 Z"  /></svg>
            <div data-layer="4250677a-a638-407a-9c96-6bba2019564d" class="iconIonicLogoOctocat">                <svg data-layer="6c4ab47c-4cc5-492c-8f76-1a083854b20c" preserveAspectRatio="none" viewBox="10.251562118530273 20.21484375 4.50701904296875 6.22265625" class="path2"><path d="M 12.54374980926514 20.21484375 C 11.90390586853027 20.21484375 11.35546875 20.51015663146973 10.91249942779541 21.11484336853027 C 10.46953105926514 21.71249961853027 10.25156211853027 22.45078086853027 10.25156211853027 23.32265663146973 C 10.25156211853027 24.20156288146973 10.4765625 24.93984413146973 10.91249942779541 25.53750038146973 C 11.35546779632568 26.13515663146973 11.89687442779541 26.4375 12.54374980926514 26.4375 C 13.14140605926514 26.4375 13.66171836853027 26.13515663146973 14.09765625 25.53750038146973 C 14.54062461853027 24.93984413146973 14.75859355926514 24.20156288146973 14.75859355926514 23.32265663146973 C 14.75859355926514 22.45078086853027 14.53359317779541 21.71249961853027 14.09765625 21.11484336853027 C 13.65468788146973 20.51015663146973 13.14140605926514 20.21484375 12.54374980926514 20.21484375 Z"  /></svg>
                <svg data-layer="d8344c52-8bf7-4676-898a-ca087803e56e" preserveAspectRatio="none" viewBox="21.241405487060547 20.21484375 4.51409912109375 6.22265625" class="path3"><path d="M 23.53359413146973 20.21484375 C 22.90078163146973 20.21484375 22.34531211853027 20.51015663146973 21.90234375 21.11484336853027 C 21.45937538146973 21.71249961853027 21.24140548706055 22.45078086853027 21.24140548706055 23.32265663146973 C 21.24140548706055 24.20156288146973 21.46640586853027 24.93984413146973 21.90234375 25.53750038146973 C 22.34531211853027 26.13515663146973 22.89374923706055 26.4375 23.53359413146973 26.4375 C 24.13125038146973 26.4375 24.65156364440918 26.13515663146973 25.09453201293945 25.53750038146973 C 25.53750038146973 24.93984413146973 25.75547027587891 24.20156288146973 25.75547027587891 23.32265663146973 C 25.75547027587891 22.45078086853027 25.53046989440918 21.71249961853027 25.09453201293945 21.11484336853027 C 24.65156173706055 20.51015663146973 24.13828086853027 20.21484375 23.53359413146973 20.21484375 Z"  /></svg>
                <svg data-layer="a42742fa-e5e6-43ec-a1e0-95d63f2848a6" preserveAspectRatio="none" viewBox="2.25 4.499999046325684 50 50" class="path4"><path d="M 48.43303298950195 18.5625 L 48.43303298950195 18.5625 C 48.421875 18.5625 48.734375 16.70052146911621 48.46651458740234 13.45833110809326 C 48.22097778320312 10.21614551544189 47.62946319580078 7.234374046325684 46.66964340209961 4.499999046325684 C 46.66964340209961 4.499999046325684 46.17856979370117 4.604166030883789 45.24106979370117 4.877603054046631 C 44.30357360839844 5.151040077209473 42.77455520629883 5.697915554046631 40.67633819580078 6.804686546325684 C 38.61160659790039 7.911456108093262 36.43526458740234 9.382810592651367 34.16964340209961 11.16666603088379 C 32.62946319580078 10.65885257720947 30.33035659790039 10.39843654632568 27.25 10.39843654632568 C 24.31473350524902 10.39843654632568 22.015625 10.65885257720947 20.33035850524902 11.16666603088379 C 15.3526782989502 7.143229484558105 11.18973255157471 4.916666507720947 7.819196701049805 4.5 C 6.859375 7.234375 6.267857551574707 10.22916507720947 6.033481597900391 13.484375 C 5.765625 16.72656059265137 6.078125 18.60156059265137 6.078125 18.60156059265137 C 3.366071462631226 22.02604103088379 2.25 26.96093559265137 2.25 31.03645515441895 C 2.25 34.1875 2.328125 37.0390625 2.930803537368774 39.56510162353516 C 3.555803537368774 42.07812118530273 4.348214149475098 44.13541030883789 5.285714149475098 45.71093368530273 C 6.245535850524902 47.28645706176758 7.40625 48.67968368530273 8.8125 49.86458587646484 C 10.2075891494751 51.07551956176758 11.4910717010498 51.94791412353516 12.65178489685059 52.49479293823242 C 13.82365989685059 53.06770706176758 15.15178489685059 53.484375 16.66964340209961 53.78385543823242 C 18.15401649475098 54.09635925292969 19.28125 54.25260543823242 20.07365989685059 54.3046875 C 20.07365989685059 54.3046875 23.19865989685059 54.5 27.26115989685059 54.5 C 31.32365989685059 54.5 34.43749618530273 54.3046875 34.43749618530273 54.3046875 C 35.21874618530273 54.25260543823242 36.34597778320312 54.09635925292969 37.84151458740234 53.78385543823242 C 39.34821319580078 53.48437881469727 40.68749618530273 53.0546875 41.84821319580078 52.49479293823242 C 43.00892639160156 51.93489456176758 44.29241180419922 51.07551956176758 45.69865798950195 49.86458587646484 C 47.09375 48.69270706176758 48.25446319580078 47.29947662353516 49.21428298950195 45.71093368530273 C 50.15178298950195 44.13541793823242 50.94419860839844 42.07812118530273 51.56919860839844 39.56510162353516 C 52.18303680419922 37.0390625 52.25 34.17447280883789 52.25 31.0234317779541 C 52.25 27.078125 51.13392639160156 22.07812309265137 48.43303298950195 18.5625 Z M 41.13393020629883 48.97916030883789 C 38.02008819580078 50.68489074707031 33.44419479370117 51.375 27.37277030944824 51.375 L 27.13839721679688 51.375 C 21.06696891784668 51.375 16.49107551574707 50.69791412353516 13.43303966522217 48.97916030883789 C 10.36384296417236 47.2734375 8.823664665222168 43.75780868530273 8.823664665222168 38.47135162353516 C 8.823664665222168 35.30729293823242 9.783486366271973 32.74218368530273 11.66964721679688 30.77603530883789 C 12.49553966522217 29.9296817779541 13.50000476837158 29.34374237060547 14.7500057220459 28.9921817779541 C 15.98884391784668 28.65363883972168 17.13839721679688 28.62759780883789 18.2098274230957 28.66665840148926 C 19.25893402099609 28.7187442779541 20.73214912414551 28.9531192779541 22.59598731994629 29.12238883972168 C 24.47098731994629 29.29165840148926 25.8660774230957 29.51301383972168 27.26116561889648 29.51301383972168 C 28.56697082519531 29.51301383972168 30.2968807220459 29.25259780883789 33.07589721679688 28.9921817779541 C 35.86607360839844 28.73176574707031 37.93080520629883 28.60155487060547 39.27009201049805 28.86197280883789 C 40.64286041259766 29.12238883972168 41.83705520629883 29.66926574707031 42.85268020629883 30.77603530883789 C 44.82812881469727 32.83332824707031 45.82143020629883 35.39842987060547 45.82143020629883 38.47134780883789 C 45.81026458740234 43.75780868530273 44.23660659790039 47.2734375 41.13393020629883 48.97916030883789 Z"  /></svg>
</div>
</div>
        <div data-layer="834adafe-5528-490a-ae35-6a57ab2cb83e" class="topMenu">            <div data-layer="0ecf40c9-4736-4881-b55b-3e02e10e7f98" class="rectangle1"></div>
            <div data-layer="9351f5e3-5858-4c70-a281-ee648e6defd0" class="companion">Companion</div>
            <div data-layer="bca1d2ad-68f3-4584-bd37-540d6d138297" class="wellnessBlog">WELLNESS BLOG</div>
</div>
        <div data-layer="4da9518f-2647-4e91-bef4-0d2776e83b6a" class="healtharticle9e37164b">            <svg data-layer="a7c7b0a6-468b-4e55-a6cd-29ab55fe7748" preserveAspectRatio="none" viewBox="0 0 224 264" class="path112655b574"><path d="M 15 0 L 209 0 C 217.2842712402344 0 224 6.715728759765625 224 15 L 224 249 C 224 257.2842712402344 217.2842712402344 264 209 264 L 15 264 C 6.715728759765625 264 0 257.2842712402344 0 249 L 0 15 C 0 6.715728759765625 6.715728759765625 0 15 0 Z"  /></svg>
            <div data-layer="ae9818c2-a95b-46ff-9b82-b1cafd659a74" class="waysToChangeTheWayYouThinkInAPositiveWay">Ways to change the way you think in a positive way</div>
</div>
        <div data-layer="04573902-fd5c-4f75-a39e-aa29105d51d9" class="healtharticle80a2779a">            <svg data-layer="f0e82737-1fd7-4adc-8123-a138985458c5" preserveAspectRatio="none" viewBox="0 0 138 120" class="path11b9a2c72c"><path d="M 9.241070747375488 0 L 128.7589263916016 0 C 133.8626251220703 0 138 3.052603960037231 138 6.818181991577148 L 138 113.1818237304688 C 138 116.9474029541016 133.8626251220703 120 128.7589263916016 120 L 9.241070747375488 120 C 4.137368202209473 120 0 116.9474029541016 0 113.1818237304688 L 0 6.818181991577148 C 0 3.052603960037231 4.137368202209473 0 9.241070747375488 0 Z"  /></svg>
            <div data-layer="d0f3fd5d-c1af-4c54-bb39-a2ddfd798761" class="component171">                <div data-layer="ca0a8927-5f8d-4e12-9d59-ccfd0d531851" class="howToStayProductiveWhenTired">How to stay <br />productive when tired?</div>
</div>
</div>
        <div data-layer="818905b4-5729-4a44-aa78-fc56547f7a1a" class="healtharticlef53bf1b1">            <svg data-layer="e07db5c8-2fea-4c0a-b39c-f70155659a9f" preserveAspectRatio="none" viewBox="0 0 138 124" class="path1160b03b65"><path d="M 9.241070747375488 0 L 128.7589263916016 0 C 133.8626251220703 0 138 3.154357433319092 138 7.045454502105713 L 138 116.9545440673828 C 138 120.8456420898438 133.8626251220703 124 128.7589263916016 124 L 9.241070747375488 124 C 4.137368202209473 124 0 120.8456420898438 0 116.9545440673828 L 0 7.045454502105713 C 0 3.154357433319092 4.137368202209473 0 9.241070747375488 0 Z"  /></svg>
            <div data-layer="f46613be-50e0-42dc-ad29-a68586e6d2bc" class="cuteCats">Cute Cats</div>
</div>
        <div data-layer="5fd9c68a-c453-4c73-927b-c1b062d3d6cb" class="healtharticle">            <svg data-layer="1458f9a3-1d96-409c-bcfa-a75fdf857e13" preserveAspectRatio="none" viewBox="0 0 375 264" class="path11"><path d="M 25.11160850524902 0 L 349.8883972167969 0 C 363.7571716308594 0 375 6.715728759765625 375 15 L 375 249 C 375 257.2842712402344 363.7571716308594 264 349.8883972167969 264 L 25.11160850524902 264 C 11.2428503036499 264 0 257.2842712402344 0 249 L 0 15 C 0 6.715728759765625 11.2428503036499 0 25.11160850524902 0 Z"  /></svg>
            <div data-layer="29ea94e8-587b-4500-9104-002141426323" class="maintainingYourMentalHealthandHabitsThatWillHelpYouBoostIt">Maintaining your mental health<br />and habits that will help you boost it.</div>
</div>
</div>

    `;
  }
}
customElements.define('blogsResearchInfo-element', BlogsResearchInfo);