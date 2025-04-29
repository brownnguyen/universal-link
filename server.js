// server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const code = req.query.code;
  const state = req.query.state;

  if (!code) {
    return res.status(400).send('Missing code');
  }

  // Tạo HTML để tự động mở app
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redirecting...</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script>
          window.onload = function() {
            const url = 'myapp://login?code=${code}&state=${state ?? ''}';
            window.location.href = url;
          };
        </script>
      </head>
      <body>
        <p>Đang chuyển hướng về app...</p>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Redirect server listening at http://localhost:${port}`);
});
