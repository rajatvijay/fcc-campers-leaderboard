import React from "react";

const Styles = {
  anchor: {
    color: "#337ab7",
    cursor: "hand",
  },
  img: {
    width: 40,
    border: "2px solid #006400",
    borderRadius: 4,
    maxHeight: 40,
    marginRight: 4,
    verticalAlign: "middle",
  },
};

const UserDetails = props => {
  return (
    <a
      style={Styles.anchor}
      src={"https://freecodecamp.com/" + props.userName}
      target="_blank"
    >
      <img style={Styles.img} src={props.userThumbnail} alt="User Thumbnail" />
      <span>{props.userName}</span>
    </a>
  );
};

export default UserDetails;
