import React from "react";
import Sidebar from "../component/SideBar/SideBar";

const ApplicationForm = () => {
  return (
    <div style={styles.applicationForm}>
      <Sidebar />
    </div>
  )
}

export default ApplicationForm;

const styles = {
  applicationForm: {
    display: "flex"
  }
}