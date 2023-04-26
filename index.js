const express = require('express');
const app = express();
const router = require('./routes/route');

// 정적 파일 선언
app.use(express.static('public'));

// 미들웨어 설정
app.use(router);

app.listen(3000, (err)=>{
    if(err) throw '에러';
    console.log('서버가 실행되었습니다.');
})