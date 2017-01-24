import express from 'express';
import http from 'http';

const app = express();

app.get('/', (req, res) => {
	res.send('hello world\n');
});

const server = http.createServer(app);
server.listen(8090);
