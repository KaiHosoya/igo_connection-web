import React from "react";
import SideBar from "../component/SideBar/SideBar";

const Home = () => {
  return (
    <div style={styles.home}>
      <SideBar />
      <h1>ホーム画面</h1>
    </div>
  )
}

export default Home;

const styles = {
  home: {
    display: "flex"
  }
}