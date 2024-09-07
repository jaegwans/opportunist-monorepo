const express = require('express');
const app = express();
const port = 4000; // Express 서버는 4000번 포트에서 실행

// 간단한 API 라우트 예시
app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`);
});
