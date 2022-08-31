import React from "react";
import { Button } from "@mui/material";
import Sidebar from "../component/SideBar/SideBar";
import { useLocation } from "react-router";

const ApplicationForm = () => {
  const location = useLocation()
  const targetName = location.state.name

  return (
    <div style={styles.applicationForm}>
      <Sidebar />
      <div style={styles.contents}>
        <p style={styles.confirm_message}>{targetName}に添削依頼をする</p>
        <Button
          style={styles.button}
          variant="contained"
          component="label"
        >
          棋譜をアップロードする
          <input
            type="file"
            style={{ display: "none" }}
          />
        </Button>
      </div>
    </div>
  )
}

export default ApplicationForm;

const styles = {
  applicationForm: {
    display: "flex"
  },

  contents: {
    width: "85vw",
  },

  confirm_message: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 30
  },

  button: {
    display: "block",
    width: "30%",
    textAlign: "center",
    margin: "auto",
    marginTop: "15%"
  }
}