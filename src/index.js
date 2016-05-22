import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import logger from 'morgan';

import voteRouter from './routes/vote';

const PORT = 9090;

const app = express();
const upload = multer();

app.use(express.static(__dirname + '/../public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(cookieParser());

// 注册路由
app.use('/api/vote', voteRouter);

app.listen(PORT, () => {
  console.log('server is listening @', PORT);
});
