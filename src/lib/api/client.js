// axios-case-converterは、snake_case / camelCaseを変換するため利用
import applyCaseMiddleware from "axios-case-converter";
// axiosをインポート
import axios from "axios";

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.withCredentials = true;

// ヘッダーはケバブケースのままにする
const options = {
  ignoreHeaders: true,
};

// URLの共通部分を設定
const client = applyCaseMiddleware(axios.create({
  baseURL: process.env.REACT_APP_API_DOMEIN,
  // credentials: 'include'
}), options)

export default client;
