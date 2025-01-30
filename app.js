const express = require('express'); // Expressをインポート
const hogeRouter = require("./routes/hoge"); // hogeルータのインポート

const app = express(); // アプリケーション作成
const port = 3000; // ポート番号

// ルート（"/"）へのGETリクエストを処理
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// エンドポイント("/hoge") へのGETリクエストを処理
app.use("/hoge", hogeRouter);

// サーバーを起動
app.listen(port, () => {
  console.log('サーバーが http://localhost:3000 で起動しました');
});