import React from "react";
import { render } from "react-dom";
import LeaderboardTable from "./LeaderboardTable";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <LeaderboardTable />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
