import React from "react";
import "./Clubs.css";

class Clubs extends React.Component {
  render() {
    let members = this.props.clubMembers.map(member => {
      return <li className="members-names">{member}</li>;
    });

    return (
      <div className="wrapper">
        <i className={`icon-css ${this.props.clubIcons}`}></i>
        <div className="club-data">
          <p className="club-name">{this.props.clubName}</p>
          <p className="club-members">
            Members: <ul className="members-list">{members}</ul>
          </p>
        </div>
      </div>
    );
  }
}

export default Clubs;
