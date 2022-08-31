import React from "react";
import SideBar from "../component/SideBar/SideBar";

const Home = () => {
  return (
    <div style={styles.home}>
      <SideBar />
      <div style={styles.contents}>
        <h1>ご登録ありがとうございます！！</h1>
        <p>様々な機能を開発中です！</p>
        <p>まずは添削依頼から棋譜添削を依頼してみてください！！</p>
      </div>
    </div>
  )
}

export default Home;

const styles = {
  home: {
    display: "flex"
  },
}