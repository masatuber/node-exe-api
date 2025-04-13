//EXEファイルダウンロードのWeb API
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
app.use(cors());

//サーバーが使用するport
const PORT = process.env.PORT || 3000;

//ダウンロードページエンドポイント定義
app.get("/paDL", (req, res) => {
  const filePath = path.join(__dirname, "files", "run_pad.exe");

  //ファイル送信
  res.download(filePath, "run_pad.exe", (err) => {
    if (err) {
      console.error("ファイルダウンロード中にエラーが発生:", err);

      //クライアントにエラーメッセージをreturnさせる
      res.status(500).send("ファイルダウンロードに失敗しました");
    }
  });
});

//ダウンロードページエンドポイント定義Excel自動化スクリプト
app.get("/xlsxDL", (req, res) => {
  const filePath = path.join(__dirname, "files", "xlsx.exe");

  //ファイル送信
  res.download(filePath, "xlsx.exe", (err) => {
    if (err) {
      console.error("ファイルダウンロード中にエラーが発生:", err);

      //クライアントにエラーメッセージをreturnさせる
      res.status(500).send("ファイルダウンロードに失敗しました");
    }
  });
});

//サーバーの設定
app.listen(PORT, () => {
  console.log(`サーバーがポート ${PORT} で起動中...`);
});