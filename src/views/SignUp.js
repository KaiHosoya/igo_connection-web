import React, { useContext } from "react";
import { Grid, Avatar, Typography, TextField, Box, Button, Paper } from "@mui/material";
import { teal } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CreateIcon from '@mui/icons-material/Create';
import Cookies from "js-cookie"
import { signUp } from "../lib/api/auth";
import { authContent } from "../App";

const SignUp = () => {
  const { register, handleSubmit } = useForm()
  const { setCurrentUser } = useContext( authContent )
  const navigate = useNavigate()

  const onSubmit  = async (data) => {
    console.log(data)

    try {
      const res = await signUp(data)
      if (res.status === 200) {
        // アカウント作成と同時にログインさせてしまう
        // 本来であればメール確認などを挟むべきだが、今回はサンプルなので
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])

        setCurrentUser(res.data.data)
        navigate("/home")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Grid>
    <Paper
      elevation={3}
      sx={{
        p: 4,
        height: "70vh",
        width: "50vw",
        m: "20px auto"
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-start" //多分、デフォルトflex-startなので省略できる。
        alignItems="center"
      >
        <Avatar sx={{ bgcolor: teal[400] }}>
          <CreateIcon />
        </Avatar>
        <Typography variant={"h5"} sx={{ m: "30px" }}>
          新規作成
        </Typography>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="text"
          label="Name"
          variant="standard"
          fullWidth
          required
          {...register("name")}
        />
        <TextField label="Email" variant="standard" {...register("email")}fullWidth required />
        <TextField
          type="password"
          label="Password"
          variant="standard"
          fullWidth
          required
          {...register("password")}
        />
        <TextField
          type="password"
          label="PasswordConfirm"
          variant="standard"
          fullWidth
          required
          {...register("password_confirmation")}
        />
        {/* ラベルとチェックボックス */}
        {/* <FormControlLabel
          labelPlacement="end"
          label="パスワードを忘れました"
          control={<Checkbox name="checkboxA" size="small" color="primary" />}
        /> */}
        <Box mt={3}>
          <Button type="submit" color="primary" variant="contained" fullWidth>
            新規作成
          </Button>

          {/* <Typography variant="caption">
            <Link href="#">パスワードを忘れましたか？</Link>
          </Typography> */}
          <Typography variant="caption" display="block">
            アカウントを持っていますか？
            <Link to="/">ログイン</Link>
          </Typography>
        </Box>
      </form>
    </Paper>
  </Grid>
  )
}

export default SignUp