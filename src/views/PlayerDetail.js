import React  from "react";
import Sidebar from "../component/SideBar/SideBar";

const PlayerDetail = () => {
  return (
    <div style={styles.player_detail}>
      <Sidebar />
    </div>
  )
}

export default PlayerDetail;

const styles = {
  player_detail: {
    display: "flex"
  }
}