import React from "react";
import FontAwesome from "react-fontawesome";
import "../../../css/cardInfo.css";
const CardInfo = props => {
  const teamName = (teams, teamId) => {
    return teams.find(team => {
      return team.id === teamId;
    }).name;
  };
  return (
    <div className="cardInfo">
      <span className="teamName">{teamName(props.teams, props.teamId)}</span>

      <FontAwesome name="calendar-alt" />
      <span className="date">{props.date}</span>
    </div>
  );
};
export default CardInfo;
