import React from "react";
import UserDetails from "./UserDetails";

const Styles = {
  td: {
    border: "1px solid black",
    padding: 6
  }
};

const LeaderboradItem = props => {
  return (
    <tr>
      <td style={Styles.td}>{props.index}</td>
      <td style={Styles.td}>
        <UserDetails userThumbnail={props.img} userName={props.username} />
      </td>
      <td style={Styles.td}>{props.recent}</td>
      <td style={Styles.td}>{props.alltime}</td>
    </tr>
  );
};

export default LeaderboradItem;
