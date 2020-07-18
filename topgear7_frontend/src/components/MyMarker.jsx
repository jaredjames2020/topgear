import React from "react";
import "./Marker.css";

const MyMarker = (props: any) => {
  const {color, name, id} = props;
  return (
    <div>
      <div
        className="pin bounce"
        style={{backgroundColor: color, cursor: "pointer"}}
        title={name}
      />
      <div className="pulse" />
    </div>
  );
};

export default MyMarker;
