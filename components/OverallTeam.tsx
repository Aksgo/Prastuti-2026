import React from 'react';
import { TEAM_CORE, TEAM_HEAD, TEAM_VERTICAL } from '../constants';
import {Team} from './Team';
import {TeamMember} from "../types";

export const OverallTeam: React.FC = ()=>{
    return (
        <>
        <Team TEAM ={TEAM_CORE} title={"Core Team"}></Team>
        <Team TEAM ={TEAM_HEAD} title={"Team Heads"}></Team>
        <Team TEAM ={TEAM_VERTICAL} title={"Vertical Heads"}></Team>

        </>
    );
};

