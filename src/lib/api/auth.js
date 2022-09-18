import Cookies from "js-cookie"
import client from "./client"

// サインアップ（新規アカウント作成）
export const signUp = (params) => {
  return client.post("auth", params, { withCredentials: true })
}

// サインイン（ログイン）
export const signIn = async(params)  => {
  await client.post("auth/sign_in", params, { withCredentials: true })
  .then((res) => {
    return res
  })
  .catch((err) => {
    console.log(err)
  })
}

// サインアウト（ログアウト）
export const signOut = () => {
  return client.delete("auth/sign_out", { headers: {
    "access-token": Cookies.get("_access_token"),
    "client": Cookies.get("_client"),
    "uid": Cookies.get("_uid")
  }})  
}

// 認証済みのユーザーを取得
export const getCurrentUser = () => {
  if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return
  return client.get("/auth/sessions", { headers: {
    "access-token": Cookies.get("_access_token"),
    "client": Cookies.get("_client"),
    "uid": Cookies.get("_uid")
  }}, { withCredentials: true })
}