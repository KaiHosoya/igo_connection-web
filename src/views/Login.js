import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie"

import {
  Avatar,
  Box,
  Button,
  // Checkbox,
  // FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { teal } from "@mui/material/colors";
import { authContent } from "../App";
import { signIn } from "../lib/api/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { setCurrentUser } = useContext( authContent)
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()


  const onSubmit =  async (data) => {
    console.log(data)

    try {
      const res = await signIn(data)
      if (res.status === 200) {
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
            <ExitToAppIcon />
          </Avatar>
          <Typography variant={"h5"} sx={{ m: "30px" }}>
            ログイン
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField label="Email" variant="standard" {...register("email")}fullWidth required />
          <TextField
            type="password"
            label="Password"
            variant="standard"
            fullWidth
            required
            {...register("password")}
          />
          {/* ラベルとチェックボックス */}
          {/* <FormControlLabel
            labelPlacement="end"
            label="パスワードを忘れました"
            control={<Checkbox name="checkboxA" size="small" color="primary" />}
          /> */}
          <Box mt={3}>
            <Button type="submit" color="primary" variant="contained" fullWidth>
              ログイン
            </Button>

            {/* <Typography variant="caption">
              <Link href="#">パスワードを忘れましたか？</Link>
            </Typography> */}
            <Typography variant="caption" display="block">
              アカウントを持っていますか？
              <Link to="/signup">アカウントを作成</Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login