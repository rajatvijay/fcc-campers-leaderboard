import React from "react";
import LeaderboardItem from "./LeaderboardItem";
import LeaderboardTableHeader from "./LeaderboardTableHeader";

const Styles = {
  outerDiv: { background: "green", padding: 10, color: "white" }
};
export default class LeaderboardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          username: "rahsheen",
          img: "https://avatars1.githubusercontent.com/u/4641959?v=4",
          alltime: 922,
          recent: 116,
          lastUpdate: "2017-12-03T00:38:30.376Z"
        },
        {
          username: "khaduch",
          img: "https://avatars2.githubusercontent.com/u/1930584?v=4",
          alltime: 3248,
          recent: 105,
          lastUpdate: "2017-12-03T00:36:30.179Z"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div style={Styles.outerDiv}>Leaderboard</div>
        <table style={{ "border-collapse": "collapse", width: "100%" }}>
          <LeaderboardTableHeader />
          <tbody>
            {this.state.data.map((d, i) => (
              <LeaderboardItem index={i + 1} key={d.username} {...d} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
