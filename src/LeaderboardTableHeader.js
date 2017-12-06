import React from "react";

const Styles = {
  th: {
    border: "1px solid black",
    padding: 6
  }
};

const LeaderboardTableHeader = props => {
  return (
    <thead>
      <tr>
        <th style={Styles.th}>#</th>
        <th style={Styles.th}>Camper Name</th>
        <th style={Styles.th}>Points in past 30 days</th>
        <th style={Styles.th}>All time points</th>
      </tr>
    </thead>
  );
};

export default LeaderboardTableHeader;
