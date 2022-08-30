import React from "react";
import Sidebar from "../component/SideBar/SideBar";

const Playback = () => {
  return (
    <div style={styles.playback}>
      <Sidebar />
    </div>
  )
}

export default Playback;

const styles = {
  playback: {
    display: "flex"
  }
}