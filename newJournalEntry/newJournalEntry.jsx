
import React from "react";
import PropTypes from "prop-types";

import "./newJournalEntry.css";

class NewJournalEntry extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
  }
  
  render() {
    
    return (
          <div data-layer="cbfb2e9a-7d91-4b3d-aa2f-94648e3aaa06" className="newJournalEntry">        <div data-layer="290cbc86-d221-4cf5-8e32-b9668ba9335e" className="journalTopBack">            <svg data-layer="627b48ff-bc17-4a7f-8348-0600c90acb8b" preserveAspectRatio="none" viewBox="0 0 428 95" className="path9"><path d="M 0 0 L 428 0 L 428 95 L 0 95 L 0 0 Z"  /></svg>
            <div data-layer="20b73c3b-cd33-4f68-a4b3-72ebcb60e4ee" className="titleOfJournalEntry">Title of Journal entry</div>
            <div data-layer="97dd4b82-d052-497d-bb96-4ea123520626" className="date">Date<br /></div>
            <svg data-layer="5862fb3e-f7c6-4f21-8a36-93fd5761c697" preserveAspectRatio="none" viewBox="0 0 36 36" className="iconOpenArrowCircleLeft"><path d="M 18 0 C 8.055000305175781 0 0 8.055000305175781 0 18 C 0 27.94499969482422 8.055000305175781 36 18 36 C 27.94499969482422 36 36 27.94499969482422 36 18 C 36 8.055000305175781 27.94499969482422 0 18 0 Z M 18 4.5 L 18 13.5 L 31.5 13.5 L 31.5 22.5 L 18 22.5 L 18 31.5 L 4.5 18 L 18 4.5 Z"  /></svg>
</div>
        <div data-layer="6c580114-eddb-41a1-bfc8-b030ae6ce494" className="topMenu">            <div data-layer="0115db1d-a1a3-40a2-996b-d5190089405a" className="rectangle1"></div>
            <div data-layer="2ee615c0-c770-4005-96db-62169b6f853a" className="companion">Companion</div>
            <div data-layer="8fdca77f-7bb0-446d-99fb-83e2805e2bf6" className="journal">JOURNAL</div>
</div>
</div>

    );
  }
}

NewJournalEntry.propTypes = {

}

NewJournalEntry.defaultProps = {

}


export default NewJournalEntry;
          