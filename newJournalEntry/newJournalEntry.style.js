
import { html } from '@polymer/lit-element';
let cssText = `


      html {
        height: 100%;
        width: 100%;
      }

      body {
        font-family: 'Open Sans', serif;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        -webkit-font-smoothing: antialiased;
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
      }

      

      .newJournalEntry {

      display: block;
      position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      overflow-x: auto;
      overflow-y: auto;
      background-color: rgba(235, 210, 178, 1);
      width: 428.00px;
    height: 926.00px;
    left: 0px;
    top: 0px;

}

.newJournalEntry .journalTopBack {

      display: block;
      position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      overflow-x: unset;
      overflow-y: unset;
      background-color: transparent;
      width: 428.00px;
    height: 125.00px;
    left: 0.00px;
    top: 132.00px;

}

.newJournalEntry .journalTopBack .path9 {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      fill: rgba(255, 255, 255, 1);
      box-shadow: none;
      width: 428.00px;
    height: 95.00px;
    left: 0.00px;
    top: 0.00px;

}

.newJournalEntry .journalTopBack .titleOfJournalEntry {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 255, 255, 0);
      text-align: left;
      letter-spacing: 0.00px;
      color: rgba(141, 141, 141, 1);
      -webkit-text-stroke: unset;
      font-size: 30.00px;
      font-weight: 400;
    font-style: normal;
      font-family: .AppleSystemUIFont, Arial;
      text-decoration: none;
      box-shadow: none;
      overflow-x: unset;
      overflow-y: unset;
      white-space: pre;
      width: 263.00px;
    height: 35.00px;
    left: 64.00px;
    top: 11.00px;

}

.newJournalEntry .journalTopBack .date {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 255, 255, 0);
      text-align: left;
      letter-spacing: 0.00px;
      color: rgba(141, 141, 141, 1);
      -webkit-text-stroke: 1.00px rgba(0, 0, 0, 0);
      font-size: 30.00px;
      font-weight: 400;
    font-style: normal;
      font-family: .AppleSystemUIFont, Arial;
      text-decoration: none;
      box-shadow: none;
      overflow-x: unset;
      overflow-y: unset;
      white-space: pre;
      width: 61.00px;
    height: 70.00px;
    left: 64.00px;
    top: 48.00px;

}

.newJournalEntry .journalTopBack .iconOpenArrowCircleLeft {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      fill: rgba(141, 141, 141, 1);
      box-shadow: none;
      width: 36.00px;
    height: 36.00px;
    left: 14.00px;
    top: 30.00px;

}

.newJournalEntry .topMenu {

      display: block;
      position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      overflow-x: unset;
      overflow-y: unset;
      background-color: transparent;
      width: 428.00px;
    height: 132.00px;
    left: 0.00px;
    top: 0.00px;

}

.newJournalEntry .topMenu .rectangle1 {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(252, 171, 110, 1);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: none;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: none;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: none;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: none;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 428.00px;
    height: 132.00px;
    left: 0.00px;
    top: 0.00px;

}

.newJournalEntry .topMenu .companion {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 255, 255, 0);
      text-align: left;
      letter-spacing: 0.00px;
      color: rgba(112, 112, 112, 1);
      -webkit-text-stroke: unset;
      font-size: 40.00px;
      font-weight: 700;
    font-style: normal;
      font-family: 'Script MT', Arial;
      text-decoration: none;
      box-shadow: none;
      overflow-x: unset;
      overflow-y: unset;
      white-space: pre;
      width: 220.00px;
    height: 40.00px;
    left: 125.00px;
    top: 49.00px;

}

.newJournalEntry .topMenu .journal {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 255, 255, 0);
      text-align: center;
      letter-spacing: 0.00px;
      color: rgba(112, 112, 112, 1);
      -webkit-text-stroke: unset;
      font-size: 30.00px;
      font-weight: 400;
    font-style: normal;
      font-family: 'Gill Sans MT', Arial;
      text-decoration: none;
      box-shadow: none;
      overflow-x: unset;
      overflow-y: unset;
      white-space: pre;
      width: 132.00px;
    height: 35.00px;
    left: 147.00px;
    top: 91.00px;

}

;
`;
cssText = cssText.replace(/background-image: url\(\"assets/g, `background-image: url("${import.meta.url.replace('newJournalEntry.style.js', 'assets')}`);
cssText = cssText.replace(/src: url\(assets/g, `src: url(${import.meta.url.replace('newJournalEntry.style.js', 'assets')}`);
export const NewJournalEntryStyle = html`
${cssText}
`;
