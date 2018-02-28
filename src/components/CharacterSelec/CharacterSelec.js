import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
const CharacterSelec = props => (
    <div>
    <dl>
        <dd>
            <strong>Name: </strong>{props.character.character_name}
        </dd>
        <dd>
            <strong>Author: </strong>{props.character.character_author}
        </dd>
        <dd>
            <strong>Description: </strong>{props.character.character_desc}
        </dd>
        <dd>
            <strong>Class: </strong>{props.character.class_name}
        </dd>
        <dd>
            <strong>Strength Point </strong>{props.character.strength_point}
        </dd>
        <dd>
            <strong>Speed Point </strong>{props.character.speed_point}
        </dd>
        <dd>
            <strong>Srength Point Exp </strong>{props.character.strenth_point_exp}
        </dd>
        <dd>
            <strong>Speed Point Exp </strong>{props.character.speed_point_exp}
        </dd>
        <dd>
            <strong>Hit Point</strong>{props.character.hit_point}
        </dd>
        <dd>
            <strong>Ghost HP</strong>{props.character.ghost_hp}
        </dd>
        <dd>
            <strong>Wins</strong>{props.character.wins}
        </dd>
        <dd>
            <strong>Losses</strong>{props.character.losses}
        </dd>
        <dd>
            <strong>Weapon</strong>{props.character.weapon}
        </dd>
        <dd>
            <strong>Weaponmaterial</strong>{props.character.weaponmaterial}
        </dd>
        <dd>
            <strong>Meat / Protein (lbs.)</strong>{props.character.meat_protein_lbs}
        </dd>
        <dd>
            <strong>Steel (lbs.)</strong>{props.character.steel_lbs}
        </dd>
        <dd>
            <strong>Mechanical Parts (oz)</strong>{props.character.mechanical_parts_oz}
        </dd>
        <dd>
            <strong>Puzzle_Parts (oz)</strong>{props.character.puzzle_parts_oz}
        </dd>
        <dd>
            <strong>Imperial Pounds</strong>{props.character.imperial_pounds}
        </dd>
        <dd>
            <strong>Produce (lbs.)</strong>{props.character.produce_lbs}
        </dd>
        <dd>
            <strong>Ghost HP</strong>{props.character.ghost_hp}
        </dd>
        </dl>
    </div>
)
export default CharacterSelec;