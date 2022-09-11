import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import Sidebar from "../component/SideBar/SideBar";
import { useLocation } from "react-router";

const ApplicationForm = () => {
  const location = useLocation()
  const targetName = location.state.name
  const { register, handleSubmit, watch } = useForm();

  const watchFile = watch("file", "")


  const onSubmit = async(data) => {
    console.log(data)
  };

  return (
    <div style={styles.applicationForm}>
      <Sidebar />
      <div style={styles.contents}>
        <p style={styles.confirm_message}>{targetName}に添削依頼をする</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Button
            style={styles.button}
            variant="contained"
            component="label"
          >
            棋譜をアップロードする
            <input
              type="file"
              style={{ display: "none" }}
              name="file"
              {...register("file", {required: true })}
            />
          </Button>
          <div className="fileName">{watchFile[0]?.name}</div>
          <Button
            style={styles.button}
            variant="contained"
            component="label"
          >
            <input type= "submit" />
          </Button>
        </form>
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