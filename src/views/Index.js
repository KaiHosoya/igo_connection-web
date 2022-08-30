import React from "react";
import Sidebar from "../component/SideBar/SideBar";

const Index = () => {
  return (
    <div style={styles.index}>
      <Sidebar />
    </div>
  )
}

export default Index;

const styles = {
  home: {
    display: "flex"
  }
}