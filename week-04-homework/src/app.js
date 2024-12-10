import express from "express";
import playersRouter from "./routes/player.router.js";

const app = express();
app.use(express.json()); // JSON 요청 본문 파싱

app.use('/', [playersRouter]);

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`${PORT} 포트로 서버가 열렸습니다! `);
});