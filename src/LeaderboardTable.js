import React from "react";
import LeaderboardItem from "./LeaderboardItem";
import LeaderboardTableHeader from "./LeaderboardTableHeader";
import axios from "axios";

const Styles = {
  outerDiv: { background: "green", padding: 10, color: "white" },
};
export default class LeaderboardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentOrdering: "",
    };
  }

  componentDidMount() {
    axios({
      url: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
      method: "get",
    }).then(({ data }) => this.setState({ data }));
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
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
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
