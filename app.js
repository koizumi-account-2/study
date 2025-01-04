const express = require('express'); // Expressをインポート
const app = express(); // アプリケーション作成
const port = 3000; // ポート番号

// ルート（"/"）へのGETリクエストを処理
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// サーバーを起動
app.listen(port, () => {
  console.log('サーバーが http://localhost:3000 で起動しました');
});