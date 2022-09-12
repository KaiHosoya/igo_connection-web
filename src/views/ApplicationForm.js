import React, { useContext } from "react";
// import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import Sidebar from "../component/SideBar/SideBar";
import { useLocation, Navigate, useNavigate } from "react-router";
import { init, send } from 'emailjs-com';
import { authContent } from "../App";

const ApplicationForm = () => {
  const location = useLocation()
  const targetName = location.state.name
  // const { register, handleSubmit, watch } = useForm();
  const { currentUser } = useContext( authContent )
  const navigate = useNavigate()


  const onClick = () => {
        // emailjsのUser_IDを使って初期化
    init(process.env.REACT_APP_PUBLIC_KEY);

    // 環境変数からService_IDとTemplate_IDを取得する。
    const emailjsServiceId = process.env.REACT_APP_SERVICE_ID;
    const emailjsTemplateId = process.env.REACT_APP_TEMPLATE_ID;

    // emailjsのテンプレートに渡すパラメータを宣言
    const templateParams = {
        from_name: currentUser?.name,
        to_name: targetName
        // file: data.file
    };
    console.log(templateParams)

    // ServiceId,Template_ID,テンプレートに渡すパラメータを引数にemailjsを呼び出し
    send(emailjsServiceId,emailjsTemplateId, templateParams)
    .then(()=>{
      navigate("/home")
      alert("依頼を受け付けました！")
    });
  }

  return (

    <div>
      { currentUser ? (
        <div style={styles.applicationForm}>
          <Sidebar />
          <div style={styles.contents}>
            <p style={styles.confirm_message}>{targetName}に添削依頼をする<br />（運営からご連絡差し上げます！！）</p>
            <Button
              style={styles.button}
              variant="contained"
              component="label"
              onClick={onClick}
            >
              依頼する
            </Button>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  )
}

    // // <div style={styles.applicationForm}>
    // //   <Sidebar />
    // //   <div style={styles.contents}>
    // //     <p style={styles.confirm_message}>{targetName}に添削依頼をする<br />（運営からご連絡差し上げます！！）</p>
    //     {/* <form enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
    //       <Button
    //         style={styles.button}
    //         variant="contained"
    //         component="label"
    //       >
    //         棋譜をアップロードする
    //         <input
    //           type="file"
    //           style={{ display: "none" }}
    //           name="file"
    //           {...register("file", {required: true })}
    //         />
    //       </Button>
    //       <div className="fileName">{watchFile[0]?.name}</div>
    //       <Button
    //         style={styles.button}
    //         variant="contained"
    //         component="label"
    //       >
    //         <input type= "submit" />
    //       </Button>
    //     </form> */}
    //       {/* <Button
    //         style={styles.button}
    //         variant="contained"
    //         component="label"
    //         onClick={onClick}
    //       >
    //         依頼する
    //       </Button>
    //   </div>
    // </div> */}

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