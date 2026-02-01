import React from 'react';
import { TEAM } from '../constants';
import {Team} from './Team';
import {TeamMember} from "../types";

export const OverallTeam: React.FC = ()=>{
    return (
        <>
        <Team TEAM ={TEAM} title={"Core Team"}></Team>
            <Team TEAM ={TEAM} title={"Team Heads"}></Team>
        <Team TEAM ={TEAM} title={"Vertical Heads"}></Team>

        </>
    );
};

