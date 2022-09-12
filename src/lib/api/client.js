// axios-case-converterは、snake_case / camelCaseを変換するため利用
import applyCaseMiddleware from "axios-case-converter";
// axiosをインポート
import axios from "axios";

// ヘッダーはケバブケースのままにする
const options = {
  ignoreHeaders: true,
};

// URLの共通部分を設定
const client = applyCaseMiddleware(axios.create({
  baseURL: process.env.REACT_APP_API_DOMEIN
}), options)

export default client;
