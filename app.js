const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 模拟数据库
let commentsDatabase = {};

// 中间件
app.use(express.static('public'));
app.use(bodyParser.json());

// 获取某个地点的评论
app.get('/comments/:place', (req, res) => {
    const place = req.params.place;
    res.status(200).json(commentsDatabase[place] || []);
});

// 添加新评论
app.post('/comments', (req, res) => {
    const { place, comment } = req.body;
    if (!commentsDatabase[place]) {
        commentsDatabase[place] = [];
    }
    commentsDatabase[place].push(comment);
    res.status(200).send('评论已添加');
});

// 启动服务器
app.listen(3000, () => {
    console.log('服务器已启动，访问 http://localhost:3000');
});
