const QRCode = require('qrcode');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('🔗 Enter a URL to generate QR code: ', function (url) {
  QRCode.toFile('qrcode.png', url, function (err) {
    if (err) {
      console.error('❌ Failed to generate QR Code:', err);
    } else {
      console.log('✅ QR Code saved as qrcode.png');
    }
    rl.close(); 
  });
});
