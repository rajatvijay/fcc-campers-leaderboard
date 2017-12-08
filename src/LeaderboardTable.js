import React from "react";
import LeaderboardItem from "./LeaderboardItem";
import LeaderboardTableHeader from "./LeaderboardTableHeader";

const Styles = {
  outerDiv: { background: "green", padding: 10, color: "white" },
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
          lastUpdate: "2017-12-03T00:38:30.376Z",
        },
        {
          username: "khaduch",
          img: "https://avatars2.githubusercontent.com/u/1930584?v=4",
          alltime: 3248,
          recent: 105,
          lastUpdate: "2017-12-03T00:36:30.179Z",
        },
        {
          username: "heroiczero",
          img: "https://avatars.githubusercontent.com/u/21147717?v=3",
          alltime: 1791,
          recent: 88,
          lastUpdate: "2017-12-03T00:31:44.724Z",
        },
        {
          username: "sjames1958gm",
          img: "https://avatars1.githubusercontent.com/u/4639625?v=4",
          alltime: 8411,
          recent: 84,
          lastUpdate: "2017-12-04T21:51:54.545Z",
        },
        {
          username: "0x0936",
          img: "https://avatars1.githubusercontent.com/u/4724513?v=3",
          alltime: 693,
          recent: 82,
          lastUpdate: "2017-12-03T00:29:44.375Z",
        },
        {
          username: "kbaig",
          img: "https://avatars3.githubusercontent.com/u/24844214?v=4",
          alltime: 157,
          recent: 75,
          lastUpdate: "2017-12-03T00:21:27.528Z",
        },
        {
          username: "jagannaththakur",
          img: "https://avatars2.githubusercontent.com/u/7877962?v=4",
          alltime: 42,
          recent: 74,
          lastUpdate: "2017-10-01T16:58:38.519Z",
        },
        {
          username: "DarrenfJ",
          img: "https://avatars2.githubusercontent.com/u/13170765?v=4",
          alltime: 1935,
          recent: 65,
          lastUpdate: "2017-12-03T00:40:00.489Z",
        },
        {
          username: "zcassini",
          img: "https://avatars1.githubusercontent.com/u/373576?v=4",
          alltime: 1484,
          recent: 57,
          lastUpdate: "2017-12-03T00:27:44.008Z",
        },
        {
          username: "ch3rn0v",
          img: "https://avatars3.githubusercontent.com/u/1066109?v=4",
          alltime: 97,
          recent: 50,
          lastUpdate: "2017-12-03T00:19:42.107Z",
        },
        {
          username: "alpox",
          img: "https://avatars3.githubusercontent.com/u/12485194?v=3",
          alltime: 1344,
          recent: 49,
          lastUpdate: "2017-12-03T00:28:59.245Z",
        },
        {
          username: "CodeDraken",
          img: "https://avatars3.githubusercontent.com/u/16908616?v=3",
          alltime: 1527,
          recent: 47,
          lastUpdate: "2017-12-03T00:33:14.844Z",
        },
        {
          username: "ZuleikaRose",
          img: "https://avatars1.githubusercontent.com/u/20495151?v=4",
          alltime: 45,
          recent: 45,
          lastUpdate: "2017-12-03T00:44:00.731Z",
        },
        {
          username: "LeafDragon",
          img: "https://avatars0.githubusercontent.com/u/33531671?v=4",
          alltime: 45,
          recent: 45,
          lastUpdate: "2017-12-07T21:28:22.836Z",
        },
      ],
      currentOrdering: "",
    };
  }

  // TODO: Refactor it!
  // Super shitty!
  reorder = column => {
    const orderingBySameColumn = this.state.currentOrdering.includes(column);
    const currentOrderingType = this.state.currentOrdering.includes("-")
      ? -1
      : 1;
    let currentOrdering = null;
    const orderingFunction = (a, b) => {
      if (orderingBySameColumn) {
        currentOrdering = column + currentOrderingType * -1;
        return (a[column] - b[column]) * (currentOrderingType * -1);
      } else {
        currentOrdering = column;
        return a[column] - b[column];
      }
    };

    const reorderedData = this.state.data.sort(orderingFunction);
    this.setState({
      currentOrdering,
      data: reorderedData,
    });
  };

  render() {
    return (
      <div>
        <div style={Styles.outerDiv}>Leaderboard</div>
        <table style={{ "border-collapse": "collapse", width: "100%" }}>
          <LeaderboardTableHeader onChangingOrder={this.reorder} />
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
