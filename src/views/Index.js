import React, { useContext, useState } from "react";
import Sidebar from "../component/SideBar/SideBar";
import Header from "../component/Index/Header";
import { Link, Navigate } from "react-router-dom";
import { authContent } from "../App";

const Index = () => {
  const [files, setFiles] = useState()
  const { currentUser } = useContext(authContent)


  return (
    <div>
      { currentUser ? (
        <div style={styles.index}>
          <Sidebar />
          <div>
            { files ? (
              <div>
                <Header title="棋譜一覧" />
              </div>
            ) : (
              <div style={styles.notContents}>
                <h3>まだ添削された棋譜がありません...<br />棋譜添削を依頼してみましょう！！</h3>
                <Link to="/application">添削依頼をする</Link>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Navigate to={`/`} />
      )}
    </div>
  )
}

export default Index;

const styles = {
  index: {
    display: "flex"
  },
  notContents: {
    width: "85vw",
    textAlign: "center",
    marginTop: 30
  }
}