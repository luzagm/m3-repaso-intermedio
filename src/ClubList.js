import React from "react";
import Clubs from "./Clubs";
import "./Clubs.css";
import "./stylesheet/fontawesome-free-5.10.2-web/css/all.css";

const clubs = [
  {
    name: "Book club",
    icon: "fas fa-glasses",
    members: [
      "Rosalie Bradley",
      "Lula Day",
      "Hallie Bryant",
      "Antonio Martin",
      "Polly Nelson"
    ]
  },
  {
    name: "Chess club",
    icon: "fas fa-chess",
    members: [
      "Francisco Alexander",
      "Alice Garner",
      "Michael Elliott",
      "Tyler Sparks",
      "Rose Munoz",
      "Lena Rios",
      "Abbie Perkins"
    ]
  },
  {
    name: "Escape room club",
    icon: "fas fa-dungeon",
    members: [
      "Della Frank",
      "Nathan Briggs",
      "Alexander Caldwell",
      "John McCarthy",
      "Theodore Lawson"
    ]
  },
  {
    name: "Thief club",
    icon: "fas fa-mask",
    members: [
      "Ina Becker",
      "Jared Bryan",
      "Eugenia Crawford",
      "Mina Goodwin",
      "Hester Rodriquez",
      "Cameron Watts",
      "Charles Daniel",
      "Christine Barnes"
    ]
  },
  {
    name: "Fight club",
    icon: "fas fa-fist-raised",
    members: [
      "Bernice Marshall",
      "Alvin McCormick",
      "Aiden Edwards",
      "Daniel Mendoza",
      "Olive Poole"
    ]
  },
  {
    name: "Magic club",
    icon: "fas fa-magic",
    members: [
      "Harry Ruiz",
      "Tom Dunn",
      "Emily Gonzales",
      "Evelyn Snyder",
      "Evan Doyle",
      "Stanley Mann",
      "Tom Nash",
      "Glenn Luna",
      "Hattie McCoy",
      "Erik Cobb",
      "Ada Warren",
      "Lucy Webb"
    ]
  },
  {
    name: "Live long and prosper club",
    icon: "fas fa-hand-spock",
    members: [
      "Shane Lambert",
      "Willie Young",
      "Jane Hunt",
      "Martha Houston",
      "Clyde Johnston",
      "Jonathan Brooks",
      "Emily Howard",
      "Steven Peters",
      "Helen Stewart",
      "John Cox",
      "Lillie Moore",
      "Chris Walters",
      "Sally Cunningham",
      "Ada Klein",
      "Fanny Kelly",
      "Jane Norton",
      "Bertha Francis",
      "Jane Scott",
      "Etta Klein",
      "Bobby Rodriguez",
      "Tyler Goodman",
      "Peter Ferguson",
      "Theresa Hudson",
      "Lloyd Soto",
      "Stanley Hardy",
      "Bobby Stewart"
    ]
  }
];

class ClubList extends React.Component {
  getClubData() {
    let clubList = clubs.map(club => {
      return (
        <Clubs
          clubIcons={club.icon}
          clubName={club.name}
          clubMembers={club.members}
        />
      );
    });
    return <ul className="ul-wrapper">{clubList}</ul>;
  }

  render() {
    return <div className="page">{this.getClubData()}</div>;
  }
}

export default ClubList;
