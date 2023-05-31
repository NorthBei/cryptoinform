/* eslint-disable @typescript-eslint/no-var-requires */
const https = require('https');
const next = require('next');
const fs = require('fs');

const port = parseInt(process.env.PORT || 443);
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

const httpsOptions = {
  // The relative path need add /server because the command we run is in /cryptoinform fold
  key: fs.readFileSync('./server/ssl/localhost.key'),
  cert: fs.readFileSync('./server/ssl/localhost.crt'),
};

app.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => {
      handle(req, res);
    })
    .listen(port);
  console.log(`> Server started on https://localhost:${port}`);
});
