const express = require('express');
const QRCode = require('qrcode');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send(`
    <form action="/generate" method="POST">
      <label>Enter URL:</label>
      <input type="text" name="url" required />
      <button type="submit">Generate QR Code</button>
    </form>
  `);
});


app.post('/generate', (req, res) => {
  const url = req.body.url;

  QRCode.toDataURL(url, (err, qrCodeUrl) => {
    if (err) return res.send('Error generating QR code');

    res.send(`
      <p>QR Code for: <strong>${url}</strong></p>
      <img src="${qrCodeUrl}" />
      <p><a href="/">Go Back</a></p>
    `);
  });
});

app.listen(port, () => {
  console.log(`🚀 QR Code Web App running at http://localhost:${port}`);
});
