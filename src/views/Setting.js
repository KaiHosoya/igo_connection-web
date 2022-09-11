import React from "react";
import Sidebar from "../component/SideBar/SideBar";

const Setting = () => {
  return (
    <div style={styles.setting}>
      <Sidebar />
    </div>
  )
}

export default Setting;

const styles = {
  setting: {
    display: "flex"
  }
}