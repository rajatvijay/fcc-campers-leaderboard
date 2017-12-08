import React from "react";

const Styles = {
  th: {
    border: "1px solid black",
    padding: 6,
  },
};

const LeaderboardTableHeader = props => {
  return (
    <thead>
      <tr>
        <th style={Styles.th}>#</th>
        <th style={Styles.th}>Camper Name</th>
        <th
          onClick={() => props.onChangingOrder("recent")}
          style={{ ...Styles.th, cursor: "hand" }}
        >
          Points in past 30 days
        </th>
        <th
          onClick={() => props.onChangingOrder("alltime")}
          style={{ ...Styles.th, cursor: "hand" }}
        >
          All time points
        </th>
      </tr>
    </thead>
  );
};

export default LeaderboardTableHeader;
