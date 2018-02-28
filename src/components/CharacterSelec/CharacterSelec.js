import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';


const CharacterSelec = props => (
    <div>
    <dl>
        <dd>
            <strong>Name: </strong>{character.character_name}
        </dd>
        <dd>
            <strong>Author: </strong>{character.character_author}
        </dd>
        <dd>
            <strong>Description: </strong>{character.character_desc}
        </dd>
        <dd>
            <strong>Class: </strong>{character.class_name}
        </dd>
        <dd>
            <strong>Strength Point </strong>{character.strength_point}
        </dd>
        <dd>
            <strong>Speed Point </strong>{character.speed_point}
        </dd>
        <dd>
            <strong>Srength Point Exp </strong>{character.strenth_point_exp}
        </dd>
        <dd>
            <strong>Speed Point Exp </strong>{character.speed_point_exp}
        </dd>
        <dd>
            <strong>Hit Point</strong>{character.hit_point}
        </dd>
        <dd>
            <strong>Ghost HP</strong>{character.ghost_hp}
        </dd>
        <dd>
            <strong>Wins</strong>{character.wins}
        </dd>
        <dd>
            <strong>Losses</strong>{character.losses}
        </dd>
        <dd>
            <strong>Weapon</strong>{character.weapon}
        </dd>
        <dd>
            <strong>Weaponmaterial</strong>{character.weaponmaterial}
        </dd>
        <dd>
            <strong>Meat / Protein (lbs.)</strong>{character.meat_protein_lbs}
        </dd>
        <dd>
            <strong>Steel (lbs.)</strong>{character.steel_lbs}
        </dd>
        <dd>
            <strong>Mechanical Parts (oz)</strong>{character.mechanical_parts_oz}
        </dd>
        <dd>
            <strong>Puzzle_Parts (oz)</strong>{character.puzzle_parts_oz}
        </dd>
        <dd>
            <strong>Imperial Pounds</strong>{character.imperial_pounds}
        </dd>
        <dd>
            <strong>Produce (lbs.)</strong>{character.produce_lbs}
        </dd>
        <dd>
            <strong>Ghost HP</strong>{character.ghost_hp}
        </dd>

        </dl>
    </div>

)

export default CharacterSelec;