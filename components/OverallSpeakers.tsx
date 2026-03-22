import React from "react";
import { Speakers } from "../constants";
import { SpeakerPerson } from "./Speaker";

export const OverallSpeakers: React.FC = () => {
  return (
    <>
      <SpeakerPerson Speakers={Speakers} title={"Speakers"}></SpeakerPerson>
    </>
  );
};
