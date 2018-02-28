import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class CharacterSelec extends React.Component {
  state = {
    user_id: "",
    character_id: 0,
    characters: [],
    character: {}
    // character_name: "",
    // character_author: "",
    // character_description: "",
    // class_name: "",
    // character_image: "",
    // strength_point: 0,
    // speed_point: 0,
    // strength_point_exp: 0,
    // speed_point_exp: 0,
    // hit_point: 0,
    // ghost_hp: 0,
    // wins: 0,
    // losses: 0,
    // weapon:"",
    // weaponmaterial: "",
    // meat_protein_lbs: 0, 
    // steel_lbs: 0,
    // mechanical_parts_oz: 0,
    // puzzle_parts_oz: 0,
    // imperial_pounds: 0,
    // produce_lbs: 0,
    // ghost_hP: 0
};

componentDidMount() {
     this.getUser();
  }

  
  getUser() {
    axios.get("/api/user")
      .then(function(response) {
        this.setState({
            user_id: response._id,
            character_id: last_character
        })
        this.getCharactersNames();
      })
  }

getCharactersNames() {
    axios.get("/api/api/Characternames/")
        .then(res => {
          this.setState({
            characters: res.data.message
          })
        .catch(err => console.log(err));
  })
}

getCharacter() {
    axios.get("/api/api/Character/"+this.state.character_id)
        .then(res => {
          this.setState({
            character: res.data.message
          })
        })
        .catch(err => console.log(err));
}

selectHandle = (event) => {
    this.setState({ character_id: event.target.id });
    this.getCharacter;
}

  render() {
    return (
      <div>
        <dl>
          <dd>
              <strong>Name: </strong>{this.state.character.character_name}
          </dd>
          <dd>
              <strong>Author: </strong>{this.state.character.character_author}
          </dd>
          <dd>
              <strong>Description: </strong>{this.state.character.character_desc}
          </dd>
          <dd>
              <strong>Class: </strong>{this.state.character.class_name}
          </dd>
          <dd>
              <strong>Strength Point </strong>{this.state.character.strength_point}
          </dd>
          <dd>
              <strong>Speed Point </strong>{this.state.character.speed_point}
          </dd>
          <dd>
              <strong>Srength Point Exp </strong>{this.state.character.strenth_point_exp}
          </dd>
          <dd>
              <strong>Speed Point Exp </strong>{this.state.character.speed_point_exp}
          </dd>
          <dd>
              <strong>Hit Point</strong>{this.state.character.hit_point}
          </dd>
          <dd>
              <strong>Ghost HP</strong>{this.state.character.ghost_hp}
          </dd>
          <dd>
              <strong>Wins</strong>{this.state.character.wins}
          </dd>
          <dd>
              <strong>Losses</strong>{this.state.character.losses}
          </dd>
          <dd>
              <strong>Weapon</strong>{this.state.character.weapon}
          </dd>
          <dd>
              <strong>Weaponmaterial</strong>{this.state.character.weaponmaterial}
          </dd>
          <dd>
              <strong>Meat / Protein (lbs.)</strong>{this.state.character.meat_protein_lbs}
          </dd>
          <dd>
              <strong>Steel (lbs.)</strong>{this.state.character.steel_lbs}
          </dd>
          <dd>
              <strong>Mechanical Parts (oz)</strong>{this.state.character.mechanical_parts_oz}
          </dd>
          <dd>
              <strong>Puzzle_Parts (oz)</strong>{this.state.character.puzzle_parts_oz}
          </dd>
          <dd>
              <strong>Imperial Pounds</strong>{this.state.character.imperial_pounds}
          </dd>
          <dd>
              <strong>Produce (lbs.)</strong>{this.state.character.produce_lbs}
          </dd>
          <dd>
              <strong>Ghost HP</strong>{this.state.character.ghost_hp}
          </dd>

          </dl>
      </div>

    )
  }
}

export default CharacterSelec;